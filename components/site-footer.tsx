import Link from "next/link";
import { ContactIconRow } from "@/components/contact-channels";
import { SiteLogo } from "@/components/site-logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <SiteLogo inverted />
          <p className="text-sm leading-relaxed text-paper/70">
            Objective used-car inspection and evaluation materials from Korea,
            prepared for overseas buyers and importers.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper/80 underline-offset-4 hover:text-paper hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Contact
          </p>
          <div className="mt-4">
            <ContactIconRow inverted />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.domain} is the intended home for this brand.</p>
        </div>
      </div>
    </footer>
  );
}
