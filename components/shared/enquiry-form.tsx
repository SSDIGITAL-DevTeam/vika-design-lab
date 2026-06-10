"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { SiteContent } from "@/content/types";
import { Icon } from "./icons";

type FormState = Record<string, string>;

const inputClass =
  "mt-1.5 w-full border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-ink";
const labelClass = "block text-xs font-medium uppercase tracking-wider text-muted";
const errorClass = "mt-1 text-xs text-yellow-deep";

// Custom dropdown — replaces native <select>
function SelectField({
  label,
  id,
  options,
  value,
  onChange,
}: {
  label: string;
  id: string;
  options: string[];
  value: string;
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
        onClick={() => setOpen((v) => !v)}
        className={`mt-1.5 flex w-full cursor-pointer items-center justify-between border bg-paper px-3.5 py-2.5 text-left text-sm transition-colors duration-200 ${
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
}: {
  form: SiteContent["contact"]["form"];
  whatsappMessage: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (key: string, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    // Clear error on change
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    setErrors(nextErrors);
    // Button validates only — no submission or success state for now
  };

  const reqMark = <span className="text-yellow-deep"> *</span>;

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
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
          options={form.propertyType.options ?? []}
          value={values.propertyType ?? ""}
          onChange={(v) => set("propertyType", v)}
        />
        <SelectField
          label={form.budget.label}
          id={`${uid}-budget`}
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
          placeholder={form.message.placeholder}
          className={`${inputClass} resize-y`}
          value={values.message ?? ""}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-ink-soft sm:w-auto"
      >
        {form.submit}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
