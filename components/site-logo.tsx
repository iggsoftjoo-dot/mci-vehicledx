import Link from "next/link";
import { site } from "@/lib/site";

export function SiteLogo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
    >
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-md bg-navy text-[0.68rem] font-semibold tracking-[0.12em] text-paper"
      >
        MCI
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-[0.95rem] font-semibold tracking-tight ${
            inverted ? "text-paper" : "text-navy"
          }`}
        >
          {site.legalName}
        </span>
        {!compact ? (
          <span
            className={`text-[0.7rem] tracking-wide ${
              inverted ? "text-paper/65" : "text-muted-foreground"
            }`}
          >
            {site.taglineKo}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
