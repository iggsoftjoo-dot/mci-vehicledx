import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  title,
  body,
  primaryLabel = "Get evaluation access",
  secondaryLabel = "Talk to MCI",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-navy text-paper">
      <div className="container-page section-space grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Next step
          </p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/75">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 bg-teal px-5 text-sm text-navy-deep hover:bg-teal/90"
            )}
          >
            {primaryLabel}
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 border-paper/25 bg-transparent px-5 text-sm text-paper hover:bg-white/10 hover:text-paper"
            )}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
