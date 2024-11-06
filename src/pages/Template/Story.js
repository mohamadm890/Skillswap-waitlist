import React, { useState } from 'react';

const StoryWritingForm = () => {
    const [title, setTitle] = useState('');
    const [characters, setCharacters] = useState('');
    const [plot, setPlot] = useState('');
    const [setting, setSetting] = useState('');
    const [tone, setTone] = useState('friendly');
    const [customTone, setCustomTone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');

        // Validate required fields
        if (!title.trim() || !characters.trim() || !plot.trim() || !setting.trim()) {
            setErrorMessage('يرجى إدخال جميع الحقول المطلوبة.');
            return;
        }

        // Handle form submission logic here
        console.log({
            title,
            characters,
            plot,
            setting,
            tone: tone === 'custom' ? customTone : tone,
        });

        // Reset form fields
        setTitle('');
        setCharacters('');
        setPlot('');
        setSetting('');
        setTone('friendly');
        setCustomTone('');
    };

    return (
        <div style={styles.formContainer}>
           
            {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>عنوان القصة</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                        placeholder="اكتب عنوان القصة"
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>الشخصيات</label>
                    <textarea
                        value={characters}
                        onChange={(e) => setCharacters(e.target.value)}
                        style={{ ...styles.input, height: '80px' }} // Reduced height
                        placeholder="اكتب الشخصيات الرئيسية في القصة"
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>المؤامرة</label>
                    <textarea
                        value={plot}
                        onChange={(e) => setPlot(e.target.value)}
                        style={{ ...styles.input }} // Reduced height
                        placeholder="اكتب ملخصًا للمؤامرة"
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>المكان</label>
                    <textarea
                        value={setting}
                        onChange={(e) => setSetting(e.target.value)}
                        style={{ ...styles.input }} // Reduced height
                        placeholder="اكتب المكان الذي تحدث فيه القصة"
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>أسلوب الكتابة</label>
                    <select
                        value={tone}
                        onChange={(e) => {
                            setTone(e.target.value);
                            if (e.target.value !== 'custom') setCustomTone('');
                        }}
                        style={styles.select}
                    >
                        <option value="friendly">ودية</option>
                        <option value="professional">احترافية</option>
                        <option value="casual">غير رسمية</option>
                        <option value="formal">رسمية</option>
                        <option value="custom">أخرى (يرجى التحديد)</option>
                    </select>
                </div>

                {tone === 'custom' && (
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>حدد أسلوبك المخصص</label>
                        <input
                            type="text"
                            value={customTone}
                            onChange={(e) => setCustomTone(e.target.value)}
                            style={styles.input}
                            placeholder="اكتب أسلوبك المخصص"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    style={styles.submitButton}
                >
                    إنشاء القصة
                </button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        width: "300px",
       

    },
    title: {
        fontWeight: "700",
        fontSize: "24px",
        marginBottom: "4px",
        textAlign: "right",
    },
    description: {
        fontSize: "16px",
        color: "#555",
        marginBottom: "24px",
        textAlign: "right",
    },
    error: {
        color: 'red',
        textAlign: 'right',
        marginBottom: '12px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '16px',
    },
    label: {
        display: 'block',
        textAlign: 'right',
        marginBottom: '4px',
        fontWeight: '600',
        fontSize:'.9rem'
    },
    input: {
        padding: '10px',
        borderRadius: '32px',
        width: '100%',
        border: '1px solid #D0D5DD',
        fontSize: '12px',
    },
    select: {
        padding: '10px',
        borderRadius: '32px',
        width: '100%',
        border: '1px solid #D0D5DD',
        fontSize: '16px',
    },
    submitButton: {
        
        width:'100%',
        padding: '10px',
        borderRadius: '32px',
        backgroundColor: '#0F973D', 
        color: 'white',
        marginTop:"24px",
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
   
};

export default StoryWritingForm;
