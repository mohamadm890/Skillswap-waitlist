import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../StoreZustand';

const ProducatDes = () => {
  const [productName, setProductName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [benefits, setBenefits] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { doc_id } = useStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Check for required fields
    if (!productName.trim() || !shortDescription.trim()) {
      setErrorMessage('يرجى إدخال اسم المنتج ووصف قصير.');
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
    fontSize: '12px',
    color: '#B0B0B0',
  };

  const labelStyle = {
    textAlign: 'right',
    display: 'block',
    color: "#0F172A",
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '24px',
    marginBottom: '4px',
    marginTop: '8px',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '24px',
    padding: '10px 20px',
    borderRadius: '20px',
    backgroundColor: '#0F973D',
    width: '100%',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0B7A2D',
  };

  return (
    <div style={{ marginBottom: "20px", marginTop: "-20px", width: "300px" }}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>اسم المنتج</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={inputStyle}
            placeholder="اكتب اسم المنتج"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>وصف قصير</label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            style={{ ...inputStyle, height: '50px' }}
            placeholder="اكتب وصفًا قصيرًا للمنتج"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>المميزات</label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            style={{ ...inputStyle, height: '50px' }}
            placeholder="اكتب ميزات المنتج (مثال: شاشة AMOLED, كاميرا 64 ميجابكسل)"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>الفوائد</label>
          <textarea
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            style={{ ...inputStyle, height: '50px' }}
            placeholder="اكتب فوائد المنتج"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>نوع الجمهور المستهدف</label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            style={inputStyle}
            placeholder="مثال: طلاب، محترفون"
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
          <label style={labelStyle}>السعر</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={inputStyle}
            placeholder="اكتب سعر المنتج (مثال: 799 درهم)"
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

export default ProducatDes;
