"use client"

import { create } from 'zustand';
import { EditorState } from 'draft-js';

// Create the Zustand store
const useStore = create((set) => ({
  // Initialize state with default values
  doc_id: '',
  title: '',
  Info: {},
  editorState: EditorState.createEmpty(),  // Store the EditorState
  plainText: '',  // Store plain text separately for easier access
  
  setDocId: (id) => {
    set({ doc_id: id });
    localStorage.setItem('doc_id', id); // Persist to localStorage
  },
  
  setTitle: (title) => {
    set({ title });
    localStorage.setItem('title', title); // Persist to localStorage
  },
  
  setInfo: (info) => {
    set({ Info: info });
    localStorage.setItem('Info', JSON.stringify(info)); // Persist to localStorage
  },
  
  setEditorState: (newEditorState) => {
    const currentContent = newEditorState.getCurrentContent();
    const plainText = currentContent.getPlainText();  // Extract plain text from the EditorState
    
    set({ editorState: newEditorState, plainText });  // Update both editorState and plainText
    localStorage.setItem('plainText', plainText); // Persist plainText to localStorage
  },
  
  // Function to initialize state from localStorage
  initializeStore: () => {
    const storedDocId = localStorage.getItem('doc_id');
    const storedTitle = localStorage.getItem('title');
    const storedInfo = JSON.parse(localStorage.getItem('Info'));
    const storedPlainText = localStorage.getItem('plainText');

    set({
      doc_id: storedDocId || '',
      title: storedTitle || '',
      Info: storedInfo || {},
      plainText: storedPlainText || '',
    });
  }
}));

export default useStore;
