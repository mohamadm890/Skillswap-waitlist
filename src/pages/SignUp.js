import { Cairo } from "@next/font/google";
import React, { useState } from "react";

const cairo = Cairo({
  subsets: ['arabic'],
  variable: "--font-cairo",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const MakeCall = async () => {
  const res = await fetch('/api/hello', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });
  if (res.ok)
    {
      alert("You are new member")
    } else {
      alert('something went wrong!')
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    MakeCall()
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3175257435.
    alert('You are Now Sign Up')
  }

  return (
    <div style={{ 
      fontFamily: `${cairo.style.fontFamily}`, 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      position: "relative",
      padding: "20px" // Added padding for smaller screens
    }}>
      <div style={{
        width: "90%", // Use a percentage for flexibility
        maxWidth: "600px", // Set a maximum width
        height: "auto", // Allow height to adjust
        marginTop: "50px",
        backgroundColor: "white", 
        padding: "40px", // Adjust padding
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        borderRadius: "40px", 
        position: "relative",
        zIndex: "1",
      }}>
        <h1 style={{fontWeight: "800", fontSize:"32px", marginTop:"12px", marginBottom: "70px", textAlign:"center"}}>إنشاء حساب جديد</h1>
        <form onSubmit={handleSubmit}>
          <div style={{display: "flex", flexDirection: "column", gap: "12px", width: "100%"}}>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="أدخل بريدك الإلكتروني" 
              required
              onChange={(e) => handleChange(e)}
              value={email}
              style={{width: "100%", padding:"16px", borderRadius:"40px", border:"1px solid #E0E0E0"}}
            />
            <input 
              onChange={(e) => handleChange(e)}
              value={password}
              type="password" 
              name="password"
              id="password" 
              placeholder="أدخل كلمة المرور" 
              required 
              style={{width: "100%", padding:"16px", borderRadius:"40px", border:"1px solid #E0E0E0"}}
            />
          </div>
          <button style={{backgroundColor:"#0F973D", color: "white", padding: "16px", borderRadius: "40px", fontWeight: "800", fontSize:"12px", marginTop: "24px", width: "100%"}}>حساب جديد</button>
        </form>
      </div>

      {/* First blurred circle */}
      <div style={{
        width: "300px", 
        height: "300px", 
        backgroundColor: "#0F973D", 
        borderRadius: "50%", 
        filter: "blur(550px)", 
        position: "absolute", 
        zIndex: "-1",  
        bottom: "100px",  
        left: "50%",  
        transform: "translateX(-75%)"  
      }}></div>

      {/* Second blurred circle */}
      <div style={{
        width: "300px", 
        height: "300px", 
        backgroundColor: "#0F973D", 
        borderRadius: "50%", 
        filter: "blur(550px)", 
        position: "absolute",  
        zIndex: "-1",  
        bottom: "-100px",  
        right: "50%",  
        transform: "translateX(75%)"  
      }}></div>
    </div>
  );
}
