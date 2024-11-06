import React from 'react';
import Link from 'next/link';

const CardTools = ({icon, title, link}) => {
  return (
    <div  style={{ padding: '28px', textAlign: 'right', direction: 'rtl', backgroundColor:"white", marginTop:"32px", borderRadius:"40px", height: "212px",
    width: "230px",   border: "1px solid #E4E7EC", padding:"16px"
}}>
    
   {icon}
    <h2 style={{marginTop:"12px", fontWeight:"800", fontSize:"16px"}}>{title}</h2>

    <Link href={link}>
    <button style={{border:"1px solid red", backgroundColor:"#0F973D", marginTop:"40px", width:"80px", height:"30px", borderRadius:"12px", color:"white", border:"none"  }}>انشاء</button>
    </Link>

    </div>
  );
};




export default CardTools;
