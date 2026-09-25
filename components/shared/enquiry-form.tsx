"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { SiteContent } from "@/content/types";
import { buildWhatsAppLink } from "@/lib/site";
import { Icon } from "./icons";

type FormState = Record<string, string>;

const inputClass =
  "mt-1.5 w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-ink disabled:bg-paper-2 disabled:text-muted disabled:cursor-not-allowed";
const labelClass = "block text-xs font-medium uppercase tracking-wider text-muted";
const errorClass = "mt-1 text-xs text-yellow-deep";

// Custom dropdown — replaces native <select>
function SelectField({
  label,
  id,
  options,
  value,
  disabled,
  onChange,
}: {
  label: string;
  id: string;
  options: string[];
  value: string;
  disabled?: boolean;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`mt-1.5 flex w-full cursor-pointer items-center justify-between border bg-paper px-3.5 py-2.5 text-left text-sm transition-colors duration-200 disabled:bg-paper-2 disabled:cursor-not-allowed ${
          open ? "border-ink" : "border-line"
        } ${value ? "text-ink" : "text-muted/60"}`}
      >
        <span>{value || "—"}</span>
        <Icon
          name="chevron"
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 border border-t-0 border-ink bg-paper py-1 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
        >
          {options.map((o) => (
            <li key={o} role="option" aria-selected={value === o}>
              <button
                type="button"
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 text-left text-sm transition-colors duration-150 hover:bg-paper-2 ${
                  value === o ? "font-medium text-ink" : "text-ink-soft"
                }`}
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function EnquiryForm({
  form,
  whatsappMessage,
}: {
  form: SiteContent["contact"]["form"];
  whatsappMessage: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (key: string, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    // Clear error on change
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!values.name?.trim()) nextErrors.name = form.errorRequired;
    if (!values.phone?.trim()) nextErrors.phone = form.errorRequired;
    if (
      values.email?.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setServerError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry. Please try again.");
      }

      setIsSuccess(true);
      setValues({});
    } catch (err: unknown) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Failed to send enquiry. Please try again or reach out on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const reqMark = <span className="text-yellow-deep"> *</span>;

  if (isSuccess) {
    return (
      <div className="border border-line bg-paper p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center bg-yellow text-ink">
            <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <h3 className="text-lg font-semibold text-ink">
            Enquiry Received
          </h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          {form.success}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-line">
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#25D366] px-5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-95"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            {form.whatsappCta}
          </a>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="inline-flex min-h-11 items-center justify-center border border-line bg-paper px-4 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-paper-2"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      {serverError && (
        <div className="border border-yellow-deep/50 bg-yellow/10 p-4 text-sm text-ink flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-yellow-deep">Notice:</p>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed">{serverError}</p>
          </div>
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-ink underline"
          >
            WhatsApp directly
          </a>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor={`${uid}-name`} className={labelClass}>
          {form.name.label}
          {reqMark}
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          disabled={isSubmitting}
          autoComplete="name"
          placeholder={form.name.placeholder}
          aria-invalid={!!errors.name || undefined}
          className={`${inputClass} ${errors.name ? "border-yellow-deep" : ""}`}
          value={values.name ?? ""}
          onChange={(e) => set("name", e.target.value)}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      {/* Phone + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>
            {form.phone.label}
            {reqMark}
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            disabled={isSubmitting}
            autoComplete="tel"
            placeholder={form.phone.placeholder}
            aria-invalid={!!errors.phone || undefined}
            className={`${inputClass} ${errors.phone ? "border-yellow-deep" : ""}`}
            value={values.phone ?? ""}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            {form.email.label}
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            disabled={isSubmitting}
            autoComplete="email"
            placeholder={form.email.placeholder}
            aria-invalid={!!errors.email || undefined}
            className={`${inputClass} ${errors.email ? "border-yellow-deep" : ""}`}
            value={values.email ?? ""}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      {/* Property + Budget */}
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label={form.propertyType.label}
          id={`${uid}-property`}
          disabled={isSubmitting}
          options={form.propertyType.options ?? []}
          value={values.propertyType ?? ""}
          onChange={(v) => set("propertyType", v)}
        />
        <SelectField
          label={form.budget.label}
          id={`${uid}-budget`}
          disabled={isSubmitting}
          options={form.budget.options ?? []}
          value={values.budget ?? ""}
          onChange={(v) => set("budget", v)}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${uid}-message`} className={labelClass}>
          {form.message.label}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          disabled={isSubmitting}
          placeholder={form.message.placeholder}
          className={`${inputClass} resize-y`}
          value={values.message ?? ""}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-4 w-4 animate-spin text-paper"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            {form.submit}
            <Icon name="arrow" className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
