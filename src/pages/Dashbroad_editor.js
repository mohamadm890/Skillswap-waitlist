
import { Cairo } from "@next/font/google";
import Rich_editor from "./Rich_editor.js";
import { useEffect, useState } from 'react';
import { EditorState } from 'draft-js'; // Import EditorState from draft-js
import QuestionPromot from "./Template/QuestionPromot.js";
import SideBar from "./SideBar";
import useStore from "./StoreZustand.js";
import SocialMedia from "./Template/SocialMedia.js";
import Story from "./Template/Story.js"
const cairo = Cairo({
  subsets: ['arabic'],
  variable: "--font-cairo",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export default function Dashboard_editor({ docId }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tokenCount, setTokenCount] = useState(0); // State to store token count
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isEditorVisible, setIsEditorVisible] = useState(false); // State to control the editor visibility
  const { title, plainText, setInfo,  } = useStore();

  useEffect(() => {
    const obj = {
      id: docId,
      title: title,
      plainText: plainText
    };
    setInfo(obj);
  }, [title, plainText, setInfo, docId]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleNext = () => {
    // Action to store info or perform submission logic
    const userInfo = {
      id: docId,
      title: title,
      plainText: plainText
    };

    // Simulate saving or sending data
    console.log('User info submitted:', userInfo);

    // After submission, switch to the editor view
    setIsEditorVisible(true);
  };

  return (
    <div 
      style={{ 
        display: "flex",
        fontFamily: `${cairo.style.fontFamily}`, 
        height: "100vh", 
        padding: "8px", 
        overflow: "auto",
        direction: "rtl", 
      }}
    >   
      {isSidebarVisible && <SideBar />}

      <div style={{ margin: "12px", width: "100%", display: "flex", gap: "12px", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ display: "flex", gap: "12px" }}>
          
          {/* Show QuestionPrompt without button for submission */}
          {!isEditorVisible && (
            <div style={{ flex: 1, margin: "auto", textAlign: "center", marginTop: "60px" }}>
              <SocialMedia />
            </div>
          )}

          {/* Rich Editor, shown after submission */}
          {isEditorVisible && (
            <div style={{ flex: 1 }}>
              <Rich_editor 
                editorState={editorState} 
                setEditorState={setEditorState} 
                tokenCount={tokenCount} 
                setTokenCount={setTokenCount} 
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
