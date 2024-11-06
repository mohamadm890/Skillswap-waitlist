"use client";
import { Cairo } from "@next/font/google";
import Rich_editor from "./Rich_editor.js";
import { useEffect, useState } from "react";
import { EditorState } from "draft-js"; // Import EditorState from draft-js
import useStore from "./StoreZustand.js";
import Ads from "./Template/Ads";
import Email from "./Template/Email";
import Presentation from "./Template/Presentation";
import SocialMedia from "./Template/SocialMedia";
import Story from "./Template/Story";
import QuestionPromot from "./Template/QuestionPromot"; // Import the Blog component
import BusinessPlan from "./Template/BusinessPlan"; 
import ProducatDes from "./Template/ProducatDes"
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: [
    "200", "300", "400", "500", "600", "700", "800", "900", "1000"
  ],
});

export default function Dashboard_editor({ docId }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tokenCount, setTokenCount] = useState(0); // State to store token count
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isEditorVisible, setIsEditorVisible] = useState(false); // State to control the editor visibility
  const { title, plainText, setInfo } = useStore();
  const [selectedComponent, setSelectedComponent] = useState("QuestionPromot");

  useEffect(() => {
    const obj = {
      id: docId,
      title: title,
      plainText: plainText,
    };
    setInfo(obj);
  }, [title, plainText, setInfo, docId]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };
  const handleNext = () => {
    // Action to store info or perform submission logic
    const userInfo = {
      id: docId,
      title: title,
      plainText: plainText,
    };

    // Simulate saving or sending data
    console.log("User info submitted:", userInfo);

    // After submission, switch to the editor view
    setIsEditorVisible(true);
  };

  return (
    <div
      style={{
        display: "flex",
        fontFamily: `${cairo.style.fontFamily}`,
        justifyContent:"center",
        height: "100vh",
        padding: "12px",
        overflow: "auto",
        direction: "rtl",
        backgroundColor: "#F7F9FC",
      }}
    >
      <div>
      </div>
      <div
        style={{
          margin: "12px",
          maxWidth: "100%",
          display: "flex",
          gap: "12px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          {/* Show QuestionPrompt without button for submission */}
          {!isEditorVisible && (
            <div
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                height: "auto",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
                <div style={{ overflowY: "auto" }}>
                  {/* Language Selection */}
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                  <div style={{display:"flex", flexDirection:"column", maxWidth:"100%"}}>
                  <label htmlFor="languageSelect" style={{fontSize:"12px", fontWeight:"600", marginBottom:"4px"}}>اختر اللغة:</label>
                  <select
                    id="languageSelect"
                    style={selectStyle}
                  >
                    <option value="">-- اختر اللغة --</option>
                    <option value="arabic">العربية</option>
                    <option value="english">English</option>
                    <option value="french">Français</option>
                    <option value="spanish">Español</option>
                  </select>
                   </div>
                  {/* Tone/Voice Selection */}
                  <div style={{display:"flex", flexDirection:"column"}}>
                  <label htmlFor="toneSelect" style={{fontSize:"12px", fontWeight:"600", marginBottom:"4px"}} >اختر نغمة/صوت:</label>
                  <select
                    id="toneSelect"
                    style={selectStyle}
                  >
                    <option value="">-- اختر نغمة/صوت --</option>
                    <option value="convincing">مقنع</option>
                    <option value="friendly">ودود</option>
                    <option value="formal">رسمى</option>
                    <option value="casual">غير رسمي</option>
                  </select>
                    </div>

                    </div>
                  {/* Use Case Selection */}
                  <div style={{display:"flex", flexDirection:"column"}}>

                  <label htmlFor="useCaseSelect" style={{fontSize:"12px", fontWeight:"600", marginBottom:"4px"}} >اختيار حالة الاستخدام:</label>
                  <select
                    id="useCaseSelect"
                    style={selectStyle}
                    onChange={handleComponentChange}
                    value={selectedComponent}
                  >
                  <option value=" ">-- اختيار المكون --</option>
                  <option value="QuestionPromot">مدونة</option>
                  <option value="ads">إعلانات</option>
                  <option value="email">البريد الإلكتروني</option>
                  <option value="presentation">العرض التقديمي</option>
                  <option value="socialMedia">وسائل التواصل الاجتماعي</option>
                  <option value="story">القصة</option>
                  <option value="businessPlan">خطة العمل</option>
                  <option value="ProducatDes">وصف المنتج</option>

                  </select>
                   </div>
                  
                  <div style={{height:"auto", padding:"4px", marginBottom:"32px", overflowY: 'auto'}}>

                  {selectedComponent === "ads" && <Ads />}
                {selectedComponent === "email" && <Email />}
                {selectedComponent === "presentation" && <Presentation />}
                {selectedComponent === "socialMedia" && <SocialMedia />}
                {selectedComponent === "story" && <Story />}
                {selectedComponent === "QuestionPromot" && <QuestionPromot />} 
                {selectedComponent === "businessPlan" && <BusinessPlan />} 
                {selectedComponent === "ProducatDes" && <ProducatDes />} 
               </div>
                </div>

                {/* Rich Editor Component */}
                <Rich_editor />
                  </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles for select elements
const selectStyle = {
  marginBottom: "12px",
  padding: "4px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "12px",
  fontFamily: "inherit",
  direction: "rtl", // Right-to-left direction for Arabic
  backgroundColor: "#fff",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  outline: "none",
  cursor: "pointer",
  height:"32px",
  borderRadius:"40px"
};


