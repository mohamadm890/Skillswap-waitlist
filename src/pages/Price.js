import React from 'react';
import OfferCard from './OfferCard';

import { Cairo } from "@next/font/google";

const cairo = Cairo({
    subsets: ['arabic'],
    variable: "--font-cairo",
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
  });
  


const Price = () => {
  const offers = [
    {
      price: '$40',
      period: 'شهرياً',
      description: 'وصول محدود لمدة 7 أيام، بدون الحاجة إلى بطاقة ائتمان',
      points: '100,000 نقطة / شهر',
      buttonLabel: 'ترقية الآن',
    },
    {
      price: '$15',
      period: 'شهرياً',
      description: 'وصول محدود لمدة 7 أيام، بدون الحاجة إلى بطاقة ائتمان',
      points: '20,000 نقطة / شهر',
      buttonLabel: 'ترقية الآن',
    },
    {
      price: 'مجاني',
      period: 'شهرياً',
      description: 'وصول محدود لمدة 7 أيام، بدون الحاجة إلى بطاقة ائتمان',
      points: '1,000 نقطة / شهر',
      buttonLabel: 'ابدأ مجانًا',
    },
  ];

  return (
    <div className="offers-container p-8" style={{fontFamily:`${cairo.style.fontFamily}`, backgroundColor:"#F3FBF5", padding:"24px"}} >
        <div style={{textAlign:"center", marginBottom:"40px"}}>
                 <h2 className="offers-heading" style={{fontWeight:"800", fontSize:"24px"}}>تجربة مجانية لمدة 14 يومًا</h2>
      <p style={{marginTop:"4px", fontSize:"12px", color:"#8D8D8D"}}>ابدأ خطتك الآن بدون الحاجة إلى بطاقة ائتمان</p> 
        </div>

      <div className="offers-grid" style={{display:"flex", justifyContent:"space-between",flexDirection:"column" ,alignItems:"center", gap:"24px", margin:"auto"}}>
        {offers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default Price;
