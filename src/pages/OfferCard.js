// OfferCard.js
import React from 'react';

  

const OfferCard = ({ price, period, description, points, buttonLabel }) => {
  return (
    <div className="offer-card p-8" style={{
        width:"300", height:"300", backgroundColor:"white", borderRadius:"24px", border:"1px solid #F0F2F5"
    }} >
        <div style={{textAlign:"right"}}>
      <p className="offer-period" style={{color:"#8D8D8D"}}>{period}</p>
      <p className="offer-price" style={{fontWeight:"900", fontSize:"28px", marginTop:"4px", marginBottom:"12px"}} >{price}</p>
      <p className="offer-description" style={{fontWeight:"300", fontSize:"12px", width:"320px", }}>{description}</p>
      <p className="offer-points" style={{fontWeight:"700", fontSize:"12px", marginTop:"4px"}} >{points}</p>
      <button className="offer-button" style={{padding:"12px", backgroundColor:"#0F973D", marginTop:"16px", color:"white", borderRadius:"24px"}}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default OfferCard;

