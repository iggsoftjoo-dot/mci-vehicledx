import { ExternalLink, Mail, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BookingButton({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "default" }),
        "h-11 px-5 text-sm",
        inverted && "bg-teal text-navy-deep hover:bg-teal/90",
        className
      )}
    >
      {site.bookingLabel}
      <span className="ml-1.5 text-[0.7rem] font-normal opacity-80">
        {site.bookingLabelKo}
      </span>
    </a>
  );
}

export function ContactChannels({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  const muted = inverted ? "text-paper/55" : "text-teal";
  const value = inverted ? "text-paper" : "text-navy";
  const link = inverted
    ? "text-paper underline-offset-4 hover:underline"
    : "font-medium text-navy underline underline-offset-4";

  return (
    <dl className="space-y-5 text-sm">
      <div>
        <dt className={`text-xs font-semibold tracking-[0.16em] uppercase ${muted}`}>
          Appraiser
        </dt>
        <dd className={`mt-2 ${value}`}>
          {site.contactName}{" "}
          <span className={inverted ? "text-paper/65" : "text-muted-foreground"}>
            ({site.contactNameKo})
          </span>
          <p className={`mt-1 text-xs leading-relaxed ${inverted ? "text-paper/65" : "text-muted-foreground"}`}>
            {site.title}
            <br />
            {site.titleKo}
          </p>
        </dd>
      </div>
      <div>
        <dt className={`text-xs font-semibold tracking-[0.16em] uppercase ${muted}`}>
          Phone · 전화
        </dt>
        <dd className="mt-2">
          <a href={site.phoneHref} className={link}>
            {site.phone}
          </a>
        </dd>
      </div>
      <div>
        <dt className={`text-xs font-semibold tracking-[0.16em] uppercase ${muted}`}>
          Email
        </dt>
        <dd className="mt-2">
          <a href={`mailto:${site.email}`} className={link}>
            {site.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className={`text-xs font-semibold tracking-[0.16em] uppercase ${muted}`}>
          KakaoTalk · 카카오톡
        </dt>
        <dd className="mt-2">
          <a
            href={site.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Open chat
          </a>
        </dd>
      </div>
      <div>
        <dt className={`text-xs font-semibold tracking-[0.16em] uppercase ${muted}`}>
          WhatsApp
        </dt>
        <dd className="mt-2">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Message MCI
          </a>
        </dd>
      </div>
    </dl>
  );
}

export function ContactIconRow({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  const item = inverted
    ? "text-paper/80 underline-offset-4 hover:text-paper hover:underline"
    : "text-navy underline-offset-4 hover:underline";

  return (
    <ul className="space-y-2 text-sm">
      <li className={inverted ? "text-paper/80" : "text-navy"}>
        {site.contactName} ({site.contactNameKo})
      </li>
      <li className={inverted ? "text-paper/65" : "text-muted-foreground"}>
        {site.titleKo}
      </li>
      <li>
        <a href={site.phoneHref} className={`inline-flex items-center gap-2 ${item}`}>
          <Phone className="size-3.5" aria-hidden />
          {site.phone}
        </a>
      </li>
      <li>
        <a href={`mailto:${site.email}`} className={`inline-flex items-center gap-2 ${item}`}>
          <Mail className="size-3.5" aria-hidden />
          {site.email}
        </a>
      </li>
      <li>
        <a
          href={site.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${item}`}
        >
          <MessageCircle className="size-3.5" aria-hidden />
          KakaoTalk open chat
        </a>
      </li>
      <li>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${item}`}
        >
          <MessageCircle className="size-3.5" aria-hidden />
          WhatsApp
        </a>
      </li>
      <li>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${item}`}
        >
          <ExternalLink className="size-3.5" aria-hidden />
          {site.bookingLabel} · {site.bookingLabelKo}
        </a>
      </li>
    </ul>
  );
}
