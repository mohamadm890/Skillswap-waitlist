import {Cairo} from "@next/font/google"

const cairo = Cairo({
    subsets: ['arabic'],
    variable: "--font-cairo",
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
  });

export default function Feature({title, description}) {
  return (
    <div style={{ fontFamily: `${cairo.style.fontFamily}`, textAlign: "right"}}>
      <h2 style={{ fontWeight: "800", fontSize:"32px", marginTop:"12px"}}>{title}</h2>
      <p style={{ fontWeight: "600", fontSize:"16px", marginTop:"12px", lineHeight:"28px"}}>{description}</p>
    </div>
  )};