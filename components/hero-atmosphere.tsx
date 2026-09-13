export function HeroAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 12%, rgb(20 184 166 / 0.26), transparent 34%), radial-gradient(circle at 12% 88%, rgb(255 255 255 / 0.06), transparent 28%)",
        }}
      />
      <svg
        className="absolute right-[-18%] bottom-[-6%] h-[58%] w-[88%] text-paper sm:right-[-6%] sm:bottom-[-4%] sm:h-[72%] sm:w-[62%] lg:right-[-2%] lg:w-[54%]"
        viewBox="0 0 860 360"
        fill="none"
      >
        <g opacity="0.09" stroke="currentColor" strokeWidth="1.4">
          <ellipse cx="470" cy="168" rx="300" ry="132" />
          <ellipse cx="470" cy="168" rx="210" ry="92" />
        </g>
        <path
          className="fill-paper/20"
          d="M78 232c22-8 48-44 86-58 26-10 64-16 104-18l36-40c16-18 42-30 76-34 58-6 128 6 182 24 44 14 86 40 112 62 18 16 42 44 50 64 6 14 2 26-12 32-22 8-58 4-92 2l-14 18c-8 10-22 16-38 16h-58c-12 0-22-4-28-12l-8-12H268l-14 16c-8 10-22 16-36 16h-62c-22 0-40-10-48-28-8-18-6-30 8-40z"
        />
        <path
          className="fill-paper/10"
          d="M252 154c32-10 78-16 128-14 40 2 84 14 116 28-40-30-98-46-156-44-32 2-58 12-88 30z"
        />
        <circle className="fill-paper/28" cx="248" cy="268" r="36" />
        <circle className="fill-navy-deep/70" cx="248" cy="268" r="16" />
        <circle className="fill-paper/28" cx="568" cy="268" r="36" />
        <circle className="fill-navy-deep/70" cx="568" cy="268" r="16" />
      </svg>
    </div>
  );
}
