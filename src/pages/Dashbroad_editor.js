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
import ProducatDes from "./Template/ProducatDes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function Dashbroad_editor({ docId }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tokenCount, setTokenCount] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const { title, plainText, setInfo } = useStore();
  const [selectedComponent, setSelectedComponent] = useState("QuestionPromot");
  const [generatedText, setGeneratedText] = useState('');

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
    const userInfo = {
      id: docId,
      title: title,
      plainText: plainText,
    };
    console.log("User info submitted:", userInfo);
    setIsEditorVisible(true);
  };

  return (
    <>
      {/* CSS for Responsive Hiding */}
      <style jsx>{`
        .editor-container {
          display: flex;
          font-family: ${cairo.style.fontFamily};
          justify-content: center;
          height: 100vh;
          padding: 20px;
          overflow: auto;
          direction: rtl;
          align-content: center;
        
          background-color: #f7f9fc;
        }
        
        @media (max-width: 700px) {
          .editor {
            padding: 32px;
            display: none;
            height: auto;
          }
        }
      `}</style>

      <div className="editor-container">
        <div></div>
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
                  
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label
                        htmlFor="useCaseSelect"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          marginBottom: "4px",
                        }}
                      >
                        اختيار حالة الاستخدام:
                      </label>
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
                    <div style={{ height: "auto", padding: "4px", marginBottom: "32px", overflowY: "auto" }}>
                      {selectedComponent === "ads" && <Ads generatedText={generatedText} setGeneratedText={setGeneratedText}  />}
                      {selectedComponent === "email" && <Email />}
                      {selectedComponent === "presentation" && <Presentation />}
                      {selectedComponent === "socialMedia" && <SocialMedia />}
                      {selectedComponent === "story" && <Story />}
                      {selectedComponent === "QuestionPromot" && <QuestionPromot />}
                      {selectedComponent === "businessPlan" && <BusinessPlan />}
                      {selectedComponent === "ProducatDes" && <ProducatDes />}
                    </div>
                  </div>
                  <div className="editor">
                  <Rich_editor generatedText={generatedText}  />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Styles for select elements
const selectStyle = {
  marginBottom: "12px",
  padding: "4px",
  border: "1px solid rgb(204, 204, 204)",
  borderRadius: "4px",
  fontSize: "12px",
  fontFamily: "inherit",
  direction: "rtl",
  backgroundColor: "rgb(255, 255, 255)",
  boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px",
  outline: "none",
  paddingRight: "12px",
  cursor: "pointer",
  height: "32px",
};
