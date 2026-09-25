import nodemailer from "nodemailer";
import { CONTACT } from "./site";

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  propertyType?: string;
  budget?: string;
  message?: string;
}

export function createEmailTransporter() {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER and GMAIL_APP_PASSWORD are not configured in environment variables."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: pass.replace(/\s+/g, ""),
    },
  });
}

function sanitizePhoneForWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // If Singapore 8-digit mobile starting with 8 or 9, prepend country code 65
  if (digits.length === 8 && (digits.startsWith("8") || digits.startsWith("9"))) {
    return `65${digits}`;
  }
  return digits;
}

export function renderEmailHtml(data: ContactFormData): string {
  const dateStr = new Date().toLocaleString("en-SG", {
    timeZone: "Asia/Singapore",
    dateStyle: "full",
    timeStyle: "short",
  });

  const waNumber = data.phone ? sanitizePhoneForWhatsApp(data.phone) : "";
  const waUrl = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(
        `Hi ${data.name}, thank you for contacting Vika Design Lab regarding your ${
          data.propertyType || "renovation"
        } project.`
      )}`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry — Vika Design Lab</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #0a0a0a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e4e4e4; border-top: 5px solid #ffd400; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; background-color: #0a0a0a; color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #ffd400; font-family: monospace;">
                      VIKA DESIGN LAB
                    </div>
                    <h1 style="margin: 8px 0 0 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; color: #ffffff; line-height: 1.3;">
                      New Project Consultation Enquiry
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #a3a3a3;">
                      Received on ${dateStr} (SGT)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Section Label -->
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #5c5c5c; margin-bottom: 16px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px;">
                Client Information
              </div>

              <!-- Info Table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td width="36%" style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #5c5c5c; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                    Client Name
                  </td>
                  <td width="64%" style="padding: 10px 0; font-size: 15px; font-weight: 700; color: #0a0a0a; vertical-align: top;">
                    ${escapeHtml(data.name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #5c5c5c; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                    Phone Number
                  </td>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 15px; font-weight: 600; color: #0a0a0a; vertical-align: top;">
                    <a href="tel:${escapeHtml(data.phone)}" style="color: #0a0a0a; text-decoration: none; border-bottom: 1px dotted #0a0a0a;">
                      ${escapeHtml(data.phone)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #5c5c5c; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                    Email Address
                  </td>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 14px; color: #0a0a0a; vertical-align: top;">
                    ${
                      data.email
                        ? `<a href="mailto:${escapeHtml(
                            data.email
                          )}" style="color: #0a0a0a; text-decoration: underline;">${escapeHtml(
                            data.email
                          )}</a>`
                        : `<span style="color: #a3a3a3; font-style: italic;">Not provided</span>`
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #5c5c5c; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                    Property Type
                  </td>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #0a0a0a; vertical-align: top;">
                    ${
                      data.propertyType
                        ? `<span style="display: inline-block; background-color: #f5f5f5; border: 1px solid #e4e4e4; padding: 3px 8px; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;">${escapeHtml(
                            data.propertyType
                          )}</span>`
                        : `<span style="color: #a3a3a3;">—</span>`
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #5c5c5c; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                    Budget Range
                  </td>
                  <td style="padding: 10px 0; border-top: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #0a0a0a; vertical-align: top;">
                    ${
                      data.budget
                        ? `<span style="display: inline-block; background-color: #fff9db; border: 1px solid #e6bf00; color: #0a0a0a; padding: 3px 8px; font-size: 12px; font-weight: 700;">${escapeHtml(
                            data.budget
                          )}</span>`
                        : `<span style="color: #a3a3a3;">—</span>`
                    }
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #5c5c5c; margin-bottom: 12px; border-bottom: 1px solid #e4e4e4; padding-bottom: 8px;">
                Client Note / Project Scope
              </div>
              <div style="background-color: #f9f9f9; border-left: 4px solid #ffd400; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #2a2a2a; margin-bottom: 32px; white-space: pre-wrap;">
                ${
                  data.message?.trim()
                    ? escapeHtml(data.message.trim())
                    : `<span style="color: #a3a3a3; font-style: italic;">No specific message provided.</span>`
                }
              </div>

              <!-- Quick Action Buttons -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        ${
                          waUrl
                            ? `
                        <td style="padding-right: 12px;">
                          <a href="${waUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 20px; letter-spacing: 0.04em;">
                            💬 Reply on WhatsApp
                          </a>
                        </td>
                        `
                            : ""
                        }
                        ${
                          data.email
                            ? `
                        <td>
                          <a href="mailto:${escapeHtml(
                            data.email
                          )}?subject=${encodeURIComponent(
                                "Vika Design Lab — Consultation Response"
                              )}" style="display: inline-block; background-color: #0a0a0a; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 20px; letter-spacing: 0.04em;">
                            ✉️ Reply by Email
                          </a>
                        </td>
                        `
                            : ""
                        }
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #fbfbfb; border-top: 1px solid #e4e4e4; text-align: center; font-size: 12px; color: #737373; line-height: 1.5;">
              <div style="font-weight: 700; color: #0a0a0a; letter-spacing: 0.05em; text-transform: uppercase;">
                Vika Design Lab
              </div>
              <div style="margin-top: 4px;">
                ${CONTACT.address}
              </div>
              <div style="margin-top: 4px;">
                WhatsApp: ${CONTACT.phone} · Email: ${CONTACT.email}
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function renderEmailText(data: ContactFormData): string {
  return `
VIKA DESIGN LAB — NEW PROJECT ENQUIRY
=====================================

Client Name   : ${data.name}
Phone Number  : ${data.phone}
Email Address : ${data.email || "-"}
Property Type : ${data.propertyType || "-"}
Budget Range  : ${data.budget || "-"}

Message / Project Scope:
------------------------
${data.message || "(No specific message)"}

=====================================
Sent from vikadesignlab.com contact form
`.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
