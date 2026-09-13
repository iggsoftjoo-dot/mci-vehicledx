import { ImageResponse } from "next/og";

export const alt = "MCI — My Car Inspection";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1F33",
          color: "#F7F4EE",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#0F766E",
              color: "#0B1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            MCI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600 }}>
              My Car Inspection
            </div>
            <div style={{ fontSize: 18, color: "#94B8B4" }}>
              마이 카 인스펙션 · vehicledx.com
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            lineHeight: 1.15,
            fontWeight: 600,
            maxWidth: 960,
          }}
        >
          Objective inspection reports for Korean used cars, built for
          overseas buyers.
        </div>
        <div style={{ fontSize: 22, color: "#C9D4D2" }}>
          Professional diagnostic evaluators in Korea. Real-time evaluation
          delivery to importers.
        </div>
      </div>
    ),
    { ...size }
  );
}
