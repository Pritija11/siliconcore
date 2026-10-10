import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "SiliconCore — GPU Cloud for AI Training & Inference";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "#f6f1e7",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(217,87,10,0.16), transparent 55%), radial-gradient(circle at 85% 15%, rgba(15,142,156,0.12), transparent 55%), radial-gradient(circle at 50% 90%, rgba(191,52,104,0.08), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={140}
          height={140}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 24,
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#241a0f",
          }}
        >
          siliconcore
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 26,
            color: "#6c5c46",
          }}
        >
          GPU cloud for AI training &amp; inference
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 10,
            background:
              "linear-gradient(90deg, #d9570a 0%, #0f8e9c 55%, #bf3468 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
