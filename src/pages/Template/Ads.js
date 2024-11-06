import React, { useState } from 'react';

const AdvertisementTextForm = () => {
    const [product, setProduct] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [keyFeatures, setKeyFeatures] = useState('');
    const [callToAction, setCallToAction] = useState('');
    const [benefits, setBenefits] = useState('');
    const [tone, setTone] = useState('friendly');
    const [customTone, setCustomTone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');

        // Check for required fields
        if (!product.trim() || !shortDescription.trim() || !targetAudience.trim()) {
            setErrorMessage('يرجى إدخال جميع الحقول المطلوبة.');
            return;
        }

        // Handle form submission logic here
        console.log({
            product,
            shortDescription,
            targetAudience,
            keyFeatures,
            callToAction,
            benefits,
            tone: customTone.trim() ? customTone : tone, // Use custom tone if provided
        });
    };

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
        marginTop: '16px',
        padding: '10px 20px',
        borderRadius: '20px',
        backgroundColor: '#0F973D',
        width: '100%',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <div style={{ marginBottom: "20px" , width:"300px"}}>
            <form onSubmit={handleSubmit}>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>اسم المنتج</label>
                    <input
                        type="text"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        style={inputStyle}
                        placeholder="اكتب اسم المنتج"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>وصف قصير</label>
                    <textarea
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        style={{ ...inputStyle }}
                        placeholder="اكتب وصفًا قصيرًا للإعلان"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الجمهور المستهدف</label>
                    <input
                        type="text"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        style={inputStyle}
                        placeholder="مثال: طلاب، محترفون"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>الميزات الرئيسية</label>
                    <textarea
                        value={keyFeatures}
                        onChange={(e) => setKeyFeatures(e.target.value)}
                        style={{ ...inputStyle }}
                        placeholder="اكتب الميزات الرئيسية للمنتج"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>دعوة للعمل</label>
                    <input
                        type="text"
                        value={callToAction}
                        onChange={(e) => setCallToAction(e.target.value)}
                        style={inputStyle}
                        placeholder="مثال: احصل عليه الآن!"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>فوائد المنتج</label>
                    <textarea
                        value={benefits}
                        onChange={(e) => setBenefits(e.target.value)}
                        style={{ ...inputStyle }}
                        placeholder="اكتب فوائد المنتج"
                    />
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>أسلوب الكتابة</label>
                    <select
                        value={tone}
                        onChange={(e) => {
                            setTone(e.target.value);
                            if (e.target.value !== 'custom') {
                                setCustomTone(''); // Clear custom tone if a predefined tone is selected
                            }
                        }}
                        style={inputStyle}
                    >
                        <option value="friendly">ودية</option>
                        <option value="professional">احترافية</option>
                        <option value="casual">غير رسمية</option>
                        <option value="formal">رسمية</option>
                        <option value="excited">متحمسة</option>
                        <option value="persuasive">مقنعة</option>
                        <option value="informative">معلوماتية</option>
                        <option value="enthusiastic">حماسية</option>
                        <option value="custom">أدخل أسلوبك الخاص</option> {/* Option to enter custom tone */}
                    </select>
                </div>

                {tone === 'custom' && ( // Show custom tone input only if 'custom' is selected
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>أدخل أسلوبك الخاص</label>
                        <input
                            type="text"
                            value={customTone}
                            onChange={(e) => setCustomTone(e.target.value)}
                            style={inputStyle}
                            placeholder="اكتب أسلوبك الخاص"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    إنشاء نص إعلاني
                </button>

                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
            </form>

            {/* Add CSS for placeholder styling */}
            <style jsx>{`
                input::placeholder, textarea::placeholder {
                    font-size: 10px; /* Adjust the font size as needed */
                    color: #B0B0B0; /* Change color if needed */
                }
            `}</style>
        </div>
    );
};

export default AdvertisementTextForm;
