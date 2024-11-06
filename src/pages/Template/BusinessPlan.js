import React, { useState } from 'react';

const BusinessPlan = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [objectives, setObjectives] = useState('');
    const [marketAnalysis, setMarketAnalysis] = useState('');
    const [financialProjections, setFinancialProjections] = useState('');
    const [tone, setTone] = useState('friendly');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            title,
            description,
            objectives,
            marketAnalysis,
            financialProjections,
            tone,
        });
    };

    // Shared styles for inputs
    const inputStyle = {
        padding: '4px',
        borderRadius: '40px',
        marginTop: '4px',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid #D0D5DD',
        outline: 'none',
        transition: 'border-color 0.3s',
        marginBottom: '4px',
    };

    const placeholderStyle = {
        fontSize: '10px', // Change this value to make the placeholder text smaller or larger
        color: '#A0AEC0', // Optional: change the color of the placeholder text
    };

    const labelStyle = {
        textAlign: 'right',
        display: 'block',
        color: "#0F172A",
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '24px',
        marginBottom: '4px',
        marginTop: '4px',
    };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: '4px',
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
        <div style={{ marginBottom: "12px", width: "300px" }}>
            <form onSubmit={handleSubmit}>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>عنوان خطة العمل:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="أدخل عنوان خطة العمل"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>وصف عام:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="أدخل وصفًا عامًا لخطة العمل"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={inputStyle}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الأهداف:</label>
                    <textarea
                        id="objectives"
                        name="objectives"
                        placeholder="أدخل الأهداف التي تسعى لتحقيقها"
                        value={objectives}
                        onChange={(e) => setObjectives(e.target.value)}
                        required
                        style={inputStyle}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>تحليل السوق:</label>
                    <textarea
                        id="market-analysis"
                        name="market-analysis"
                        placeholder="أدخل تحليل السوق الخاص بك"
                        value={marketAnalysis}
                        onChange={(e) => setMarketAnalysis(e.target.value)}
                        required
                        style={inputStyle}
                    ></textarea>
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>التوقعات المالية:</label>
                    <textarea
                        id="financial-projections"
                        name="financial-projections"
                        placeholder="أدخل التوقعات المالية"
                        value={financialProjections}
                        onChange={(e) => setFinancialProjections(e.target.value)}
                        required
                        style={inputStyle}
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
                    إنشاء خطة العمل
                </button>
            </form>
            <style>
                {`
                    input::placeholder, textarea::placeholder {
                        font-size: ${placeholderStyle.fontSize};
                        color: ${placeholderStyle.color};
                    }
                `}
            </style>
        </div>
    );
};

export default BusinessPlan;
