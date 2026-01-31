import { ImageResponse } from "next/og";

export const alt = "GoDev Studio | Software de Alta Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Feixe de luz no canto superior direito (como na página) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse 140% 120% at 100% -5%, rgba(255,255,255,0.12) 0%, rgba(228,228,231,0.06) 28%, transparent 72%)",
            pointerEvents: "none",
          }}
        />
        {/* Conteúdo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, #ffffff 0%, #e4e4e7 50%, #71717a 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            GoDev Studio
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            Software de Alta Performance. Sem burocracia.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
