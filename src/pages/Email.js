import React, { useState } from 'react';

const Email = () => {
    const [template, setTemplate] = useState('welcome'); // Default template
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [keyPoints, setKeyPoints] = useState('');
    const [tone, setTone] = useState('friendly');
    const [customTemplate, setCustomTemplate] = useState('');
    
    const handleTemplateChange = (event) => {
        setTemplate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            template: template === 'custom' ? customTemplate : template,
            recipient,
            subject,
            keyPoints,
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
                    <h2 style={{ fontWeight: "800", marginTop: "12px", fontSize: "24px", marginBottom: "12px" }}>إنشاء بريد إلكتروني مخصص</h2>
                    <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "12px", marginTop: "12px", fontWeight: "600" }}>يرجى ملء الحقول التالية لإنشاء بريد إلكتروني مخصص.</p>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>اختر نموذج البريد الإلكتروني:</label>
                    <select id="template" name="template" value={template} onChange={handleTemplateChange} style={inputStyle}>
                        <option value="welcome">بريد ترحيبي للمشتركين الجدد</option>
                        <option value="feature-update">تحديث الميزات</option>
                        <option value="feedback-request">طلب ملاحظات</option>
                        <option value="reminder">تذكير</option>
                        <option value="support">رد دعم العملاء</option>
                        <option value="follow-up">بريد متابعة</option>
                        <option value="thank-you">بريد شكر</option>
                        <option value="newsletter">بريد النشرة الإخبارية</option>
                        <option value="product-promotion">بريد ترويج المنتج/الخدمة</option>
                        <option value="apology">بريد اعتذار</option>
                        <option value="job-application">بريد طلب وظيفة</option>
                        <option value="client-proposal">بريد اقتراح عميل</option>
                        <option value="survey-invitation">دعوة للاستطلاع</option>
                        <option value="event-invitation">دعوة للحدث</option>
                        <option value="announcement">بريد إعلان</option>
                        <option value="payment-confirmation">بريد تأكيد الدفع</option>
                        <option value="order-confirmation">بريد تأكيد الطلب</option>
                        <option value="shipping-notification">إشعار الشحن</option>
                        <option value="custom">نموذج مخصص</option>
                    </select>
                </div>

                {template === 'custom' && (
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>أدخل نص البريد الإلكتروني المخصص:</label>
                        <textarea
                            id="custom-template"
                            name="custom-template"
                            placeholder="أدخل نص البريد الإلكتروني الخاص بك هنا"
                            value={customTemplate}
                            onChange={(e) => setCustomTemplate(e.target.value)}
                            style={{ ...inputStyle, height: '100px' }}
                        ></textarea>
                    </div>
                )}

                <div style={formGroupStyle}>
                    <label style={labelStyle}>اسم أو بريد المستلم:</label>
                    <input
                        type="text"
                        id="recipient"
                        name="recipient"
                        placeholder="أدخل اسم المستلم أو بريده الإلكتروني"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>سطر الموضوع:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="أدخل موضوع البريد الإلكتروني"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>النقاط الرئيسية:</label>
                    <textarea
                        id="key-points"
                        name="key-points"
                        placeholder="أدرج النقاط الرئيسية لتضمينها في البريد الإلكتروني"
                        value={keyPoints}
                        onChange={(e) => setKeyPoints(e.target.value)}
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
                    إنشاء البريد الإلكتروني
                </button>
            </form>
        </div>
    );
};

export default Email;
