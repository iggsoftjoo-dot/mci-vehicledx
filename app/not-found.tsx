import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="container-page flex flex-1 flex-col items-start justify-center py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-tight">
        That page is not here.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The address may have changed. The MCI brand pages are Home, About,
        Service, and Contact.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-8 h-11 px-5")}
      >
        Back to home
      </Link>
    </section>
  );
}
