import Image from "next/image";
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
      <Image
        src="/brand/mci-emblem.png"
        alt=""
        width={72}
        height={72}
        className="size-9 rounded-full bg-navy-deep object-cover shadow-sm ring-1 ring-navy/10"
        priority
      />
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
