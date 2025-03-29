import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/helper/site";

export const runtime = "edge";

const interBold = fetch(new URL("/fonts/Inter-Bold.ttf", siteConfig.url))
  .then((res) => res.arrayBuffer())
  .catch(() => null); // Handle font fetch errors

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title") || "Untitled";

    const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div style={{ display: "flex", flexDirection: "column", padding: "12px", width: "100%", height: "100%", alignItems: "start", backgroundColor: "white", color: "black" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
            </svg>
            <p style={{ marginLeft: "8px", fontSize: "32px", fontWeight: "bold" }}>T-logs</p>
          </div>
          <div style={{ flex: 1, paddingTop: "40px", paddingBottom: "40px" }}>
            <div style={{ fontSize: "24px", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "-0.05em" }}>
              BLOG POST
            </div>
            <div style={{ fontSize: "50px", fontWeight: "bold" }}>{heading}</div>
          </div>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <div style={{ fontSize: "20px" }}>{siteConfig.url}</div>
            <div style={{ fontSize: "20px" }}>{siteConfig.links.github}</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fontBold
          ? [
              {
                name: "Inter",
                data: fontBold,
                style: "normal",
                weight: 700,
              },
            ]
          : [],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
