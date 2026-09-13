import { BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CredentialNote({
  inverted = false,
  showKorean = true,
  className,
}: {
  inverted?: boolean;
  showKorean?: boolean;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border p-6",
        inverted
          ? "border-white/15 bg-white/5 text-paper"
          : "border-navy/10 bg-card text-navy",
        className
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold tracking-[0.16em] uppercase",
          inverted ? "text-teal" : "text-teal"
        )}
      >
        Who inspects
      </p>
      <p className="mt-3 flex gap-3 text-sm leading-relaxed">
        <BadgeCheck
          className="mt-0.5 size-5 shrink-0 text-teal"
          aria-hidden
        />
        <span>{site.appraiserCredential}</span>
      </p>
      {showKorean ? (
        <p
          className={cn(
            "mt-3 pl-8 text-xs leading-relaxed",
            inverted ? "text-paper/60" : "text-muted-foreground"
          )}
        >
          {site.appraiserCredentialKo}
        </p>
      ) : null}
    </aside>
  );
}
