"use client"
import { RiMoreFill } from "react-icons/ri";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { v4 as uuidv4 } from 'uuid';
import { FaRegFileLines } from "react-icons/fa6";

const Create = () => {
  const [fileName, setFileName] = useState(''); 
  const [documents, setDocuments] = useState([]);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/Get'); // Call the API route
        if (!response.ok) {
          throw new Error('Failed to fetch documents'); // Handle non-200 responses
        }
        const data = await response.json(); // Parse the response as JSON
        setDocuments(data); // Update state with fetched documents
      } catch (error) {
        console.log(error.message); // Handle errors
      } 
    };

    fetchDocuments(); // Invoke the function
  }, []); // Empty dependency array means this runs once on mount

  const handleFileCreate = async () => {
    if (!fileName) return; // Ensure file name is not empty
    const newFileId = uuidv4();
    try {
      const response = await fetch('/api/createDoc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: newFileId , title: fileName }), // Send both title and ID
      });

      if (!response.ok) {
        throw new Error('Failed to create document');
      }

      route.push(`/doc/${newFileId}`); // Redirect to the new document page
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding:"8px" }}>
  

      <div
        onClick={() => setPopoverOpen(!isPopoverOpen)} // Toggle popover visibility
        style={{
          height: '40px',
          width:'129px',
          backgroundColor: 'white',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          cursor: 'pointer',
          border: '1px solid #E4E7EC',
          backgroundColor: '#0F973D'
        }}
      >
        <div style={{ padding: '12px', display: 'flex',  alignItems: 'center', justifyContent:"space-between", gap:"8px" }}>
          <HiOutlineDocumentAdd size={20} style={{ color: '#fff' }} />
          <p style={{ fontWeight: '600', fontSize: '12px',  color: '#fff', marginLeft:'12px'}}>
            مستند جديد
          </p>
        </div>
      </div>

      {isPopoverOpen && ( // Conditionally render the popover
        <div
          style={{
            position: 'fixed',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>أدخل اسم المستند</h3>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="اسم المستند"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #E4E7EC',
              marginBottom: '10px',
              width: '100%',
            }}
          />
          <button
            onClick={handleFileCreate}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: '#0F973D',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              width: '100%',
            }}
          >
            إنشاء
          </button>
          <button
            onClick={() => setPopoverOpen(false)} // Close the popover
            style={{
              marginTop: '10px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              color: '#0F973D',
              border: 'none',
            }}
          >
            إلغاء
          </button>
        </div>
      )}
      <h2 style={{marginTop:"32px",fontWeight:"800"}}> المستندات التي أنشأتها </h2>
      {/* Render the documents */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '32px', gap: '16px'}}>

        {documents.map((doc) => (
          <div
            key={doc.id}
            style={{
              height: '80px',
              Width: '1000px',
              backgroundColor: 'white',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #E4E7EC',
              cursor: 'pointer',
              flexDirection: 'row',
              fontSize: '8px',
            }}
            onClick={() => route.push(`/doc/${doc.id}`)} // Redirect to the document page on click
          >
            <div style={{  display:'flex', flexDirection:'row', alignItems:"center", width: '100%', padding: '12px'}}>
            <FaRegFileLines size={28} style={{color:"#0F973D"}}/>
            <p style={{ fontWeight: '600', fontSize: '16px', color: '#101928', padding:"12px" }}>
              {doc.title} {/* Display the document title */}
            </p>
            <RiMoreFill size={28} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create;
