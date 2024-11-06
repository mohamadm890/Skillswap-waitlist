import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../StoreZustand';

const QuestionPromot = () => {
  const [prompt, setPrompt] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [tone, setTone] = useState('');
  const [audienceType, setAudienceType] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [keywords, setKeywords] = useState('');
  const { doc_id } = useStore();
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!prompt.trim()) {
      setErrorMessage('يرجى إدخال الموضوع الرئيسي.');
      return;
    }

    // Redirect to RichEditor without API call
    router.push(`/Rich_editor?doc_id=${doc_id}`);
  };

  // Shared styles for inputs
  const inputStyle = {
    borderRadius: '40px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #D0D5DD',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '8px',
    padding: '4px',
  };

  const placeholderStyle = {
    fontSize: '12px', // Adjust font size to be smaller
    color: '#B0B0B0', // Optional: Change placeholder color to a lighter shade
  };

  const labelStyle = {
    textAlign: 'right',
    display: 'block',
    color: "#0F172A",
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '24px',
    marginBottom: '4px',
    marginTop: '12px', // Ensure consistent spacing
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '24px', // Space above the button
    padding: '10px 20px',
    borderRadius: '20px',
    backgroundColor: '#0F973D',
    width: '100%', // Width of the button
    color: 'white',
    border: 'none', // Remove border
    cursor: 'pointer', // Change cursor to pointer
    transition: 'background-color 0.3s', // Smooth transition for hover
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0B7A2D', // Darker shade on hover

  };

  return (
    <div style={{ marginBottom: "20px",width:"300px" }}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>الموضوع الرئيسي</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ ...inputStyle, height: '50px' }}
            placeholder="اكتب موضوع المقالة (مثال: فوائد الذكاء الاصطناعي)"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>نوع الجمهور</label>
          <input
            type="text"
            style={inputStyle}
            placeholder="نوع الجمهور (مثال: طلاب، محترفون)"
            value={audienceType}
            onChange={(e) => setAudienceType(e.target.value)}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>الضمائر المستخدمة</label>
          <input
            type="text"
            style={inputStyle}
            placeholder="مثال:  ضمائر المخاطَب , الغائب , المتكلم "
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>عدد الكلمات</label>
          <input
            type="number"
            style={inputStyle}
            placeholder="عدد الكلمات (مثال: 500)"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>الكلمات مفتاحية</label>
          <input
            type="text"
            style={inputStyle}
            placeholder="الكلمات مفتاحية (مثال: ذكاء اصطناعي، تكنولوجيا)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          إنشاء المحتوى
        </button>

        {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
      </form>

      <style jsx>{`
        textarea::placeholder,
        input::placeholder {
          font-size: ${placeholderStyle.fontSize};
          color: ${placeholderStyle.color};
        }
      `}</style>
    </div>
  );
};

export default QuestionPromot;
