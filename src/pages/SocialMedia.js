import React, { useState } from 'react';

const SocialMediaContent = () => {
    const [platform, setPlatform] = useState('Facebook');
    const [contentType, setContentType] = useState('Post');
    const [content, setContent] = useState('');
    const [tone, setTone] = useState('friendly');
    const [hashtags, setHashtags] = useState('');
    const [cta, setCta] = useState('');
    const [contentLength, setContentLength] = useState('Medium');
    const [targetAudience, setTargetAudience] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            platform,
            contentType,
            content,
            tone,
            hashtags,
            cta,
            contentLength,
            targetAudience,
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
                    <h2 style={{ fontWeight: "800", marginTop: "12px", fontSize: "24px", marginBottom: "12px" }}>كتابة محتوى سوشيال ميديا بالذكاء الاصطناعي</h2>
                    <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "12px", marginTop: "12px", fontWeight: "600" }}>يرجى ملء الحقول التالية لإنشاء محتوى سوشيال ميديا.</p>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>اختر المنصة:</label>
                    <select id="platform" name="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} style={inputStyle}>
                        <option value="Facebook">فيسبوك</option>
                        <option value="Instagram">إنستغرام</option>
                        <option value="Twitter">تويتر</option>
                        <option value="LinkedIn">لينكد إن</option>
                    </select>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>نوع المحتوى:</label>
                    <select id="content-type" name="content-type" value={contentType} onChange={(e) => setContentType(e.target.value)} style={inputStyle}>
                        <option value="Post">منشور</option>
                        <option value="Story">قصة</option>
                        <option value="Ad">إعلان</option>
                    </select>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>محتوى الرسالة:</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="أدخل محتوى الرسالة"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        style={{ ...inputStyle, height: '100px' }}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الهاشتاجات (اختياري):</label>
                    <input
                        type="text"
                        id="hashtags"
                        name="hashtags"
                        placeholder="أدخل الهاشتاجات، مفصولة بفواصل"
                        value={hashtags}
                        onChange={(e) => setHashtags(e.target.value)}
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>دعوة للعمل :</label>
                    <input
                        type="text"
                        id="cta"
                        name="cta"
                        placeholder=" مثل 'اشترك الآن!'"
                        value={cta}
                        onChange={(e) => setCta(e.target.value)}
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>طول المحتوى:</label>
                    <select id="content-length" name="content-length" value={contentLength} onChange={(e) => setContentLength(e.target.value)} style={inputStyle}>
                        <option value="Short">قصير</option>
                        <option value="Medium">متوسط</option>
                        <option value="Long">طويل</option>
                    </select>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الجمهور المستهدف:</label>
                    <input
                        type="text"
                        id="target-audience"
                        name="target-audience"
                        placeholder="أدخل الجمهور المستهدف"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        style={inputStyle}
                    />
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
                    إنشاء محتوى سوشيال ميديا
                </button>
            </form>
        </div>
    );
};

export default SocialMediaContent;
