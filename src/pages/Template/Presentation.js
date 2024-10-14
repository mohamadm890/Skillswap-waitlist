import React, { useState } from 'react';

const Presentation = () => {
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [keyPoints, setKeyPoints] = useState('');
    const [conclusion, setConclusion] = useState('');
    const [tone, setTone] = useState('friendly');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            title,
            introduction,
            keyPoints,
            conclusion,
            tone,
        });
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
        color: "#0F172A",
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '4px',
        marginTop: '8px',
    };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: '16px',
    };

    const buttonStyle = {
        marginTop: '20px',
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
        <div style={{ marginBottom: "20px", padding: "8px", backgroundColor: "white" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ width: "100%", margin: "auto", textAlign: "right", direction: "rtl", marginTop: "16px", marginBottom: "24px", color: "#0F172A" }}>
                    <h2 style={{ fontWeight: "800", marginTop: "12px", fontSize: "24px", marginBottom: "12px" }}>كتابة عرض تقديمي بالذكاء الاصطناعي</h2>
                    <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "12px", marginTop: "12px", fontWeight: "600" }}>يرجى ملء الحقول التالية لإنشاء عرض تقديمي.</p>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>عنوان العرض:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="أدخل عنوان العرض"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>مقدمة:</label>
                    <textarea
                        id="introduction"
                        name="introduction"
                        placeholder="أدخل مقدمة العرض"
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
                        required
                        style={{ ...inputStyle, height: '100px' }}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>النقاط الرئيسية:</label>
                    <textarea
                        id="key-points"
                        name="key-points"
                        placeholder="أدخل النقاط الرئيسية التي ستتناولها"
                        value={keyPoints}
                        onChange={(e) => setKeyPoints(e.target.value)}
                        required
                        style={{ ...inputStyle, height: '100px' }}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الخاتمة:</label>
                    <textarea
                        id="conclusion"
                        name="conclusion"
                        placeholder="أدخل الخاتمة"
                        value={conclusion}
                        onChange={(e) => setConclusion(e.target.value)}
                        required
                        style={{ ...inputStyle, height: '100px' }}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>اختر النغمة:</label>
                    <select id="tone" name="tone" value={tone} onChange={(e) => setTone(e.target.value)} style={inputStyle}>
                        <option value="friendly">ودية</option>
                        <option value="professional">احترافية</option>
                        <option value="casual">غير رسمية</option>
                        <option value="formal">رسمية</option>
                    </select>
                </div>

                <button type="submit" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
                    إنشاء العرض التقديمي
                </button>
            </form>
        </div>
    );
};

export default Presentation;
