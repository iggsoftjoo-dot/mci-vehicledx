"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  country: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.email.trim()) {
    errors.email = "Please enter a work email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.country.trim()) errors.country = "Please enter your country.";
  if (values.message.trim().length < 12) {
    errors.message = "Share a little more about the vehicles or program.";
  }
  return errors;
}

function mailtoHref(values: Fields) {
  const subject = encodeURIComponent(
    `MCI evaluation inquiry — ${values.company}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      `Country: ${values.country}`,
      "",
      values.message,
    ].join("\n")
  );
  return `mailto:${site.inquiryEmail}?subject=${subject}&body=${body}`;
}

const fieldClassName = cn(
  "h-11 w-full min-w-0 rounded-lg border border-input bg-card px-3 text-sm outline-none",
  "placeholder:text-muted-foreground/80",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
);

const textareaClassName = cn(
  "min-h-32 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none",
  "placeholder:text-muted-foreground/80",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
);

export function InquiryForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function submitInquiry(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: Replace mailto with a server action or CRM webhook when intake is ready.
    setStatus("success");
    window.setTimeout(() => {
      window.location.assign(mailtoHref(values));
    }, 50);
  }

  function fieldProps(name: keyof Fields) {
    return {
      id: name,
      name,
      value: values[name],
      "aria-invalid": Boolean(errors[name]) || undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setValues((current) => ({ ...current, [name]: event.target.value }));
        if (errors[name]) {
          setErrors((current) => {
            const next = { ...current };
            delete next[name];
            return next;
          });
        }
      },
    };
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-teal/30 bg-teal-soft p-6 text-navy"
      >
        <p className="font-heading text-2xl">Your inquiry is ready to send.</p>
        <p className="mt-3 text-sm leading-relaxed text-navy/80">
          Your email client should open with a message to{" "}
          <strong>{site.inquiryEmail}</strong>. If it does not, use the link
          below.
        </p>
        <a
          href={mailtoHref(values)}
          className="mt-4 inline-flex text-sm font-medium text-navy underline underline-offset-4"
        >
          Open email draft again
        </a>
        <p className="mt-6 text-xs text-navy/60">
          Server-side intake is not wired yet. This form prepares a mailto
          draft only.
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      onSubmit={submitInquiry}
      noValidate
      method="post"
      action="/contact"
      className="space-y-5"
    >
      {hasErrors ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          Please complete the required fields below.
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name">
          <input
            {...fieldProps("name")}
            autoComplete="name"
            className={fieldClassName}
            placeholder="Full name"
          />
        </Field>
        <Field label="Company" error={errors.company} htmlFor="company">
          <input
            {...fieldProps("company")}
            autoComplete="organization"
            className={fieldClassName}
            placeholder="Company or trading name"
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Work email" error={errors.email} htmlFor="email">
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            className={fieldClassName}
            placeholder="name@company.com"
          />
        </Field>
        <Field label="Country" error={errors.country} htmlFor="country">
          <input
            {...fieldProps("country")}
            autoComplete="country-name"
            className={fieldClassName}
            placeholder="Country or destination market"
          />
        </Field>
      </div>
      <Field
        label="What do you need evaluated?"
        error={errors.message}
        htmlFor="message"
      >
        <textarea
          {...fieldProps("message")}
          className={textareaClassName}
          placeholder="Vehicle types, destination market, and whether you need a standing evaluation arrangement or a one-off report."
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className={cn(buttonVariants({ variant: "default" }), "h-11 px-5 text-sm")}
        >
          Send inquiry
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Opens your email client to {site.inquiryEmail}. No account required.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
