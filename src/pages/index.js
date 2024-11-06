"use client"
import { Cairo } from "@next/font/google";
import LeadingPage from "./LeadingPage";
import Header from "./Header";
import Feature from "./Feature";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: cairo.style.fontFamily,
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <LeadingPage />
      </div>

      
      <style jsx>{`
        @media (max-width: 768px) {
          .img-two,
          .img-three {
            display: none;
          }

          img {
            width: 100%;
            height: auto;
          }

          div[style] {
            gap: 50px !important;
          }
        }

        @media (max-width: 480px) {
          div[style] {
            flex-direction: column;
            text-align: center;
            gap: 20px !important;
            padding: 12px;
          }

          .img-one {
            display: block;
          }

          img {
            width: 100% !important;
            height: auto !important;
          }

          div[style] > * {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
}
