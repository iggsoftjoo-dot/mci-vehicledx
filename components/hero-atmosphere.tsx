export function HeroAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(circle at 82% 12%, rgb(20 184 166 / 0.28), transparent 34%), radial-gradient(circle at 8% 88%, rgb(255 255 255 / 0.07), transparent 30%)",
        }}
      />
      <svg
        className="absolute -right-16 -bottom-10 h-[120%] w-[92%] text-paper/[0.07] sm:right-[-4%] sm:w-[70%] lg:w-[58%]"
        viewBox="0 0 800 520"
        fill="none"
      >
        <g className="opacity-40" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="430" cy="250" rx="310" ry="168" />
          <ellipse cx="430" cy="250" rx="230" ry="124" />
          <path d="M120 250c80-90 200-140 310-140s230 50 310 140" />
          <path d="M120 250c80 90 200 140 310 140s230-50 310-140" />
        </g>
        <path
          className="fill-paper/[0.11]"
          d="M92 338c18-6 46-38 78-52 28-12 62-16 98-18l42-46c18-20 44-32 78-36 52-6 118 4 168 22 36 14 74 38 98 58 14 12 36 38 44 58 6 16 4 28-8 34-18 8-48 6-78 4l-18 22c-8 10-22 16-38 16h-54c-12 0-22-4-28-12l-10-14H246l-16 18c-8 10-22 16-36 16h-58c-20 0-38-10-46-28-10-20-8-32 4-42z"
        />
        <path
          className="fill-paper/[0.06]"
          d="M248 232c28-8 70-14 118-12 36 2 78 12 108 26-38-28-92-44-148-42-28 1-52 10-78 28z"
        />
        <circle className="fill-paper/[0.16]" cx="236" cy="372" r="34" />
        <circle className="fill-navy-deep/50" cx="236" cy="372" r="16" />
        <circle className="fill-paper/[0.16]" cx="548" cy="372" r="34" />
        <circle className="fill-navy-deep/50" cx="548" cy="372" r="16" />
      </svg>
    </div>
  );
}
