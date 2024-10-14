
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
    padding: '12px',
    borderRadius: '40px',
    marginTop: '10px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #D0D5DD',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '8px',
  };

  const labelStyle = {
    textAlign: 'right',
    display: 'block',
    color:"#0F172A",
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '4px',
    marginTop: '8px', // Ensure consistent spacing
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    width: '100%',
    marginBottom: '16px', // Spacing between form groups
  };

  const buttonStyle = {
    marginTop: '20px', // Space above the button
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
    <div style={{ marginBottom: "20px", padding: "8px", backgroundColor:"white" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ width: "100%", margin: "auto", textAlign: "right", direction: "rtl", marginTop: "16px", marginBottom: "24px", color:"#0F172A" }}>
          <h2 style={{ fontWeight: "800", marginTop: "12px", fontSize: "24px", marginBottom: "12px" }}>ابتكر محتوى فريد مع الذكاء الاصطناعي</h2>
          <p style={{ fontSize: "16px",color: "#64748B", marginBottom: "12px", marginTop: "12px", fontWeight: "600" }}>استخدم النموذج أدناه لإنشاء محتوى مخصص يتناسب مع احتياجاتك. يرجى ملء الحقول التالية</p>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>الموضوع الرئيسي</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ ...inputStyle, height: '100px' }}
            placeholder="اكتب موضوع المقالة (مثال: فوائد الذكاء الاصطناعي)"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>أسلوب الكتابة</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            style={inputStyle}
          >
            <option value="">اختر أسلوب الكتابة</option>
            <option value="رسمى">رسمى</option>
            <option value="غير رسمى">غير رسمى</option>
            <option value="وصفى">وصفى</option>
            <option value="تحليلى">تحليلى</option>
            <option value="تسويقى">تسويقى</option>
            <option value="تعليمى">تعليمى</option>
            <option value="إبداعى">إبداعى</option>
            <option value="فكاهى">فكاهى</option>
            <option value="اجتماعى">اجتماعى</option>
            <option value="شخصى">شخصى</option>
          </select>
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
            placeholder=" مثال:  ضمائر المخاطَب , الغائب , المتكلم "
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
    </div>
  );
};

export default QuestionPromot;
