"use client";

import { useId, useState } from "react";
import type { SiteContent } from "@/content/types";
import { buildWhatsAppLink } from "@/lib/site";
import { Icon } from "./icons";

type FormState = Record<string, string>;

const fieldClass =
  "mt-1.5 w-full rounded-[var(--radius)] border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-ink";
const labelClass = "block text-sm font-medium text-ink-soft";

/**
 * Client-side enquiry form. No backend yet (per project scope): a valid submit
 * shows a confirmation and a WhatsApp fallback. Name + phone are required.
 */
export function EnquiryForm({
  form,
  whatsappMessage,
}: {
  form: SiteContent["contact"]["form"];
  whatsappMessage: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string, v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, boolean> = {
      name: !values.name?.trim(),
      phone: !values.phone?.trim(),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius)] border border-ink bg-yellow/15 p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
            <Icon name="check" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-ink">{form.success}</p>
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-[var(--radius)] bg-ink px-5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {form.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const reqMark = <span className="text-yellow-deep"> *</span>;

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={`${uid}-name`} className={labelClass}>
          {form.name.label}
          {reqMark}
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={form.name.placeholder}
          aria-invalid={errors.name || undefined}
          className={fieldClass}
          value={values.name ?? ""}
          onChange={(e) => set("name", e.target.value)}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-yellow-deep">{form.errorRequired}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>
            {form.phone.label}
            {reqMark}
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={form.phone.placeholder}
            aria-invalid={errors.phone || undefined}
            className={fieldClass}
            value={values.phone ?? ""}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-yellow-deep">
              {form.errorRequired}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            {form.email.label}
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={form.email.placeholder}
            className={fieldClass}
            value={values.email ?? ""}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-property`} className={labelClass}>
            {form.propertyType.label}
          </label>
          <select
            id={`${uid}-property`}
            name="propertyType"
            className={fieldClass}
            value={values.propertyType ?? ""}
            onChange={(e) => set("propertyType", e.target.value)}
          >
            <option value="">—</option>
            {form.propertyType.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-budget`} className={labelClass}>
            {form.budget.label}
          </label>
          <select
            id={`${uid}-budget`}
            name="budget"
            className={fieldClass}
            value={values.budget ?? ""}
            onChange={(e) => set("budget", e.target.value)}
          >
            <option value="">—</option>
            {form.budget.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className={labelClass}>
          {form.message.label}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          placeholder={form.message.placeholder}
          className={`${fieldClass} resize-y`}
          value={values.message ?? ""}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[var(--radius)] bg-ink px-6 font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft sm:w-auto"
      >
        {form.submit}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
