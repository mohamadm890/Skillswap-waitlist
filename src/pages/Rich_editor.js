import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { EditorState, convertToRaw,ContentState  } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import useStore from './StoreZustand.js';

// Dynamic import for the WYSIWYG editor
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const Rich_editor = ({generatedText}) => {
  // State for the title and editor state
  const [editor, seteditor] = useState(EditorState.createEmpty());

  const { setTitle, setEditorState, editorState, title, doc_id } = useStore();
  
  useEffect(() => {
    
    const contentState = ContentState.createFromText(generatedText); // Create ContentState from text
    const editorState = EditorState.createWithContent(contentState);
  setEditorState(editorState);

  }, [generatedText]);

  

  
  // Handle title input change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const editorStateOnchange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div
      style={{
        display:"flex",
        justifyItems:"center",
        alignContent:"center",
        flexDirection: "column",
        height:"auto",
        alignItems: "center",
        maxWidth:"100%",
        marginBottom:"40px"
      }}
    >
      {/* Title input */}
     <div style={{
      height:"auto",
     }}>
        {/* Rich text editor */}
        <Editor
          editorState={editorState} // Use the new editor state
          toolbarClassName="rounded-md bg-gray-500 px-4 pb-4 pt-0 sticky top-0 z-10 shadow-2xl border-solid border-2   " // Sticky toolbar
          wrapperClassName="rounded-md w-full"
          editorClassName="text-gray-600 rounded-md border-none w-300 overflow-hidden"
          onEditorStateChange={editorStateOnchange}
          toolbar={{
             blockType: {
              options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote', 'Code'],
            },
            options: ['inline', 'list', 'textAlign', 'history'],
           
            inline: { options: ['bold', 'italic', 'underline'] },
            list: { options: ['unordered', 'ordered'] },
            textAlign: { options: ['left', 'center', 'right', 'justify'] },
            history: { options: ['undo', 'redo'] },
            
          }}
          editorStyle={{
            backgroundColor: 'white',
            paddingLeft: '4rem',
            paddingRight:'4rem',
            paddingBottom:'2rem',
            paddingTop:"1.4rem",
            width: "64vw",
            borderRadius: '4px',
            height: 'auto',
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:"40px",
            border:"1px solid red", 
            minHeight: '500px',
            color:"rgb(14, 16, 26)",
            fontSize:"calc(1.0625px * 14)",
            fontWeight:"400",
            lineHeight: "calc(2px * 14"
          }}
        />
        </div>
    </div>
  );
};

export default Rich_editor;
