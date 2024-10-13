import dynamic from 'next/dynamic';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import useStore from "./StoreZustand.js";

// Dynamic import for the WYSIWYG editor
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const Rich_editor = () => {
  // State for the title and editor state
  const [editor, seteditor] = useState(EditorState.createEmpty(),)

  const { setTitle, setEditorState, editorState, title, doc_id } = useStore();

  // Handle title input change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

const editorStateOnchange = (newEditorState) => {
  setEditorState(newEditorState)

}


  return (
    <div style={{
      padding: '20px',
      minHeight: '100%',
      width: "100%",
      display: "flex",
      flexDirection: "column", // Allow column layout for title and editor
      margin: "auto",
      backgroundColor: "white",
      borderRadius: "40px",
      overflow: "hidden",
      textAlign: 'right', 
      direction: 'rtl',
      
    }}>
      {/* Title input */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="عنوان رئيسي"
        style={{
          padding: '12px',
          fontSize: '20px',
          width: '100%',
          fontWeight: "800",
          marginBottom: '20px',
          borderRadius: '10px',
          border: 'none',
          outline: 'none',         // Removes the default outline
          boxShadow: 'none',
        }}
      />

      {/* Rich text editor */}
      <Editor
        editorState={editorState} // Use the new editor state
        toolbarClassName="rounded-md bg-gray-100 "
        wrapperClassName="rounded-md w-full"
        editorClassName=" text-gray-600 rounded-md p-2 border-none w-500 overflow-hidden "
        onEditorStateChange={editorStateOnchange}
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'history'],
          inline: { options: ['bold', 'italic', 'underline'] },
          list: { options: ['unordered', 'ordered'] },
          textAlign: { options: ['left', 'center', 'right', 'justify'] },
          history: { options: ['undo', 'redo'] },
          direction: 'rtl',
        }}
        editorStyle={{
          textAlign: 'right', // Force text alignment to right
          direction: 'rtl', // Force text direction to RTL
        }}
      />

  </div>
  );
};

export default Rich_editor;
