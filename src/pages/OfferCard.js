// OfferCard.js
import React from 'react';
import { useRouter } from 'next/router';
  

const OfferCard = ({ price, period, description, points, buttonLabel }) => {
  const Goto = useRouter();
  return (
    <div className="offer-card p-8" style={{
        Width:"300", Height:"300", backgroundColor:"white", borderRadius:"24px", border:"1px solid #F0F2F5"
    }} >
        <div style={{textAlign:"right", padding: "20px"}}>
      <p className="offer-period" style={{color:"#8D8D8D"}}>{period}</p>
      <p className="offer-price" style={{fontWeight:"900", fontSize:"28px", marginTop:"4px", marginBottom:"12px"}} >{price}</p>
      <p className="offer-description" style={{fontWeight:"300", fontSize:"12px", width:"320px", }}>{description}</p>
      <p className="offer-points" style={{fontWeight:"700", fontSize:"12px", marginTop:"4px"}} >{points}</p>
      <button className="offer-button" onClick={() => Goto.push('/Pay')} style={{padding:"12px", backgroundColor:"#0F973D", marginTop:"16px", color:"white", borderRadius:"24px"}}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default OfferCard;

