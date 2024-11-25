import { Cairo } from "@next/font/google";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for open and close
import Link from 'next/link';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: "--font-cairo",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export default function Header() {
  const route = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ fontFamily: `${cairo.style.fontFamily}`, display: "flex", justifyContent: "space-between", padding: "20px", alignItems: "center" }}>
      
      <div onClick={toggleMenu} style={{ cursor: "pointer" }} aria-label={menuOpen ? "Close menu" : "Open menu"}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <div style={{
        display: menuOpen ? "flex" : "none",
        flexDirection: "column",
        position: "absolute",
        top: "60px",
        left: "0",
        right: "0",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "20px"
      }}>

        <div style={{ display: "flex", gap: "20px", fontWeight: "800", color: "#344054", fontSize: "12px", flexDirection: "column" }}>
          <Link href="/Price">الأسعار</Link> {/* Change to the correct path */}
          <Link href="/Features">المميزات</Link> {/* Change to the correct path */}
          <Link href="/">الرئيسية</Link> {/* Link to homepage */}
        </div>

        <div style={{ fontWeight: "600", color: "#344054", display: "flex", flexDirection: "column", gap: "10px", marginTop: "28px" }}>
      
            <button style={{ backgroundColor: "#0F973D", color: "white", padding: "12px", borderRadius: "40px", fontWeight: "800", fontSize: "12px", border: 'none', cursor: 'pointer' }} onClick={() => route.push('/Login')} >إنشاء حساب</button>
        
            <button style={{ fontSize: "12px", fontWeight: "800", border: 'none', cursor: 'pointer' }} onClick={() => route.push('/Dashbroad')}>تسجيل الدخول</button>
        </div>
      </div>

      {/* Logo */}
      <img src='/logo.svg' alt='logo' width={139} height={40} />
    </div>
  );
}
