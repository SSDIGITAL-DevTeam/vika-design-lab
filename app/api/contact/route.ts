import { NextResponse } from "next/server";
import {
  createEmailTransporter,
  renderEmailHtml,
  renderEmailText,
  type ContactFormData,
} from "@/lib/email";
import { CONTACT } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, propertyType, budget, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (
      email &&
      typeof email === "string" &&
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name: name.trim(),
      phone: phone.trim(),
      email: typeof email === "string" ? email.trim() : undefined,
      propertyType: typeof propertyType === "string" ? propertyType.trim() : undefined,
      budget: typeof budget === "string" ? budget.trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
    };

    const user = process.env.GMAIL_USER || process.env.SMTP_USER;
    const recipient =
      process.env.CONTACT_TO_EMAIL || user || CONTACT.email;

    const transporter = createEmailTransporter();

    const subject = `[New Enquiry] ${formData.name}${
      formData.propertyType ? ` · ${formData.propertyType}` : ""
    }${formData.budget ? ` (${formData.budget})` : ""}`;

    await transporter.sendMail({
      from: `"${formData.name} (Vika Web)" <${user}>`,
      to: recipient,
      replyTo: formData.email || undefined,
      subject,
      text: renderEmailText(formData),
      html: renderEmailHtml(formData),
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Failed to send contact enquiry email:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email.";

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Email error: ${message}`
            : "Failed to send your message. Please try contacting us via WhatsApp or phone directly.",
      },
      { status: 500 }
    );
  }
}
