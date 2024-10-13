import React from 'react';
import { Cairo } from "@next/font/google";
import Header from "./Header";

const cairo = Cairo({
  subsets: ['arabic'],
  variable: "--font-cairo",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export default function LeadingPage() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        fontFamily: `${cairo.style.fontFamily}`,
        textAlign: "center",
        margin: "100px auto",
        padding: "0 16px"
      }}
    >
      <h1 style={{
        fontWeight: "800",
        fontSize: "60px",
        marginBottom: "16px",
        lineHeight: "1.2"
      }}>
    اجعل كل دقيقة تحسب
      </h1>
      <p style={{
        fontWeight: "600",
        fontSize: "24px",
        marginTop: "12px",
        marginBottom: "24px"
      }}>
لماذا تبقى عالقًا في الكتابة التقليدية؟ مع هذه التقنية الحديثة، يمكنك بسهولة إنتاج محتوى عربي جذاب لجميع احتياجاتك. ابدأ اليوم وكن أكثر إنتاجية!


</p>
      <button style={{
        backgroundColor: "#0F973D",
        color: "white",
        padding: "20px 40px",
        borderRadius: "40px",
        fontWeight: "600",
        fontSize: "20px",
        marginTop: "24px",
        cursor: "pointer"
      }}>
        جرّب مجانًا الآن
      </button>

      {/* Add media queries for responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 20px;
          }
          p {
            font-size: 16px;
          }
          button {
            padding: 16px 32px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 20px;
          }
          p {
            font-size: 12px;
          }
          button {
            padding: 12px 24px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

  