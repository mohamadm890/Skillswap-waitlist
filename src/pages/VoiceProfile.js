import React, { useState } from 'react';

// Modal component for user input
const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [guidelines, setGuidelines] = useState('');
  const [audience, setAudience] = useState('');
  const [writingSample, setWritingSample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      name,
      style,
      guidelines,
      audience,
      writingSample,
    };
    onSubmit(profileData); // Pass the profile data to the parent
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // Do not render if the modal is not open

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3 style={{ fontWeight: "800", fontSize: "20px", marginBottom: "16px" }}>إدخال معلومات الملف الصوتي</h3>
        <form onSubmit={handleSubmit}>
          <label style={{ marginBottom: "4px" }}>
            الاسم:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={{ marginBottom: "4px" }}>
            النمط:
            <textarea
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={{ marginBottom: "4px" }}>
            الإرشادات:
            <textarea
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={{ marginBottom: "4px" }}>
            الجمهور المستهدف:
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={{ marginBottom: "4px" }}>
            عينة الكتابة:
            <textarea
              value={writingSample}
              onChange={(e) => setWritingSample(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          
          {/* Container for buttons */}
          <div style={buttonContainerStyle}>
            <button type="submit" style={submitButtonStyle}>إرسال</button>
            <button type="button" onClick={onClose} style={closeButtonStyle}>إغلاق</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main VoiceProfile component
const VoiceProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleProfileSubmit = (data) => {
    setProfile(data); // Save profile data
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', borderRadius: '8px', marginTop: "16px", marginBottom:"60px" }}>
      <h2 style={{ fontWeight: "800", fontSize: "20px" }}>اجعل المحتوى يعكس أسلوبك</h2>
      <p style={{ fontWeight: "600", fontSize: "12px", maxWidth: "500px", marginTop: "12px", lineHeight: "2" }}>
        يجب أن يكون المحتوى المولد بواسطة الذكاء الاصطناعي متوافقًا مع صوتك، ولهذا أنشأنا ميزة "صوتي". تتيح لك تخصيص ملفات تعريف النغمة، مما يساعد على إنتاج محتوى يعكس أسلوبك الفريد أو أسلوب فريقك أو العميل.
      </p>
      <button onClick={() => setShowModal(true)} style={{ backgroundColor: "#0F973D", height: "46px", width: "100px", color: "white", borderRadius: "24px", marginTop: "20px" }}>
        جربه الآن
      </button>

      {/* Modal for user input */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={handleProfileSubmit} />

      {/* Display submitted profile information */}
      {profile && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3 style={{ color: '#333' }}>ملف الصوت الخاص بك</h3>
          <p><strong>الاسم:</strong> {profile.name}</p>
          <p><strong>النمط:</strong> {profile.style}</p>
          <p><strong>الإرشادات:</strong> {profile.guidelines}</p>
          <p><strong>الجمهور المستهدف:</strong> {profile.audience}</p>
          <p><strong>عينة الكتابة:</strong> {profile.writingSample}</p>
        </div>
      )}
    </div>
  );
};

// Styles for the modal and its contents
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: "32px"
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '500px',
  maxHeight: '80%', // Set a max height for scrolling
  overflowY: 'auto', // Enable vertical scrolling
  width: '100%',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

const submitButtonStyle = {
  padding: '10px 15px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
  marginLeft: '10px', // Add some space between buttons
};

const closeButtonStyle = {
  padding: '10px 15px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#dc3545',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Align buttons to the right
  marginTop: '20px', // Add some space above the buttons
};

export default VoiceProfile;
