export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-navy text-paper">
      <div className="container-page py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-tight tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}
