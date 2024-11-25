import React, { useState } from 'react';
import CardTools from './Card_tools';
import { MdOutlineBusinessCenter, MdEmail, MdPostAdd, MdDescription, MdOutlineSocialDistance, MdArticle, MdOutlinePresentToAll, MdShortText } from "react-icons/md";
import { Cairo } from "@next/font/google";
import VoiceProfile from './VoiceProfile';

const cairo = Cairo({
    subsets: ['arabic'],
    variable: "--font-cairo",
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

const Tools = () => {
    const [activeHeader, setActiveHeader] = useState(0);

    const toolsData = [
        { id: 1, icon: <MdOutlineBusinessCenter size={40} color='#0F973D' />, title: "كتابة خطة عمل بالذكاء الاصطناعي", link: "Template/BusinessPlan" },
        { id: 2, icon: <MdEmail size={40} color='#0F973D' />, title: "كتابة إيميل بالذكاء الاصطناعي", link: "Template/Email" },
        { id: 3, icon: <MdPostAdd size={40} color='#0F973D' />, title: "كتابة نص اعلاني بالذكاء الاصطناعي", link: "Template/Ads" },
        { id: 4, icon: <MdDescription size={40} color='#0F973D' />, title: "كتابة وصف منتج بالذكاء الاصطناعي", link: "Template/ProductDes" },
        { id: 5, icon: <MdOutlineSocialDistance size={40} color='#0F973D' />, title: "كتابة محتوى سوشيال ميديا بالذكاء الاصطناعي", link: "Template/SocialMedia" },
        { id: 6, icon: <MdArticle size={40} color='#0F973D' />, title: "كتابة مقال بالذكاء الاصطناعي", link: "Template/QuestionPromot" },
        { id: 7, icon: <MdOutlinePresentToAll size={40} color='#0F973D' />, title: "كتابة عرض تقديمي بالذكاء الاصطناعي", link: "Template/Presentation" },
        { id: 8, icon: <MdShortText size={40} color='#0F973D' />, title: "كتابة قصة قصيرة بالذكاء الاصطناعي", link: "Template/Story" },
    ];

    const handleHeaderClick = (headerIndex) => {
        setActiveHeader(headerIndex);
    };

    const headerStyle = (index) => ({
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: activeHeader === index ? "#EBF8EF" : "white",
        padding: "8px",
        borderRadius: "12px",
        color: "#101928",
        border: "1px solid #D0D5DD",
        cursor: "pointer",
    });

    return (
        <div style={{ padding: '20px', textAlign: 'right', fontFamily: `${cairo.style.fontFamily}` }}>
            <div style={{ marginRight: "8px", display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                <h2 style={headerStyle(1)} onClick={() => handleHeaderClick(1)}>صوتي الخاص</h2>
            </div>

                <div>
                    <VoiceProfile />
                </div>


            <style jsx>{`
                .tools-container {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-bottom: 100px;
                    justify-content: flex-start;
                    max-width: 1062px;
                }

                @media (max-width: 768px) {
                    .tools-container {
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default Tools;

