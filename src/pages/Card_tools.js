import React from 'react';
import Link from 'next/link';
import { MdOutlineBusinessCenter } from "react-icons/md";

const CardTools = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'right', direction: 'rtl', backgroundColor:"white", marginTop:"32px", borderRadius:"40px", height: "212px",
    width: "200px",   border: "1px solid #E4E7EC", padding:"16px"
}}>
    
   <MdOutlineBusinessCenter size={60} color='#0F973D'        
  />
    <h2 style={{marginTop:"12px", fontWeight:"800", fontSize:"16px"}}>كتابة خطة عمل بالذكاء الاصطناعي</h2>

    <Link href="Template/BusinessPlan">
    <button style={{border:"1px solid red", backgroundColor:"#0F973D", marginTop:"16px", width:"80px", height:"30px", borderRadius:"12px", color:"white", border:"none"  }}>انشاء</button>
    </Link>

    </div>
  );
};




export default CardTools;
