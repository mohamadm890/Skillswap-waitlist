import React from 'react';
import TokenSpend from './TokenSpend';

const Settings = () => {
  return (
    <div style={{overflow:"auto", display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"16px", flexWrap:"wrap"}}>
      <div style={{background:"white", width:"300px", height:"auto", borderRadius:"24px", border:"1px solid #F0F2F5", 
}}>
      <div style={{padding:"32px"}}>
      <h2 style={{fontWeight:"800", fontSize:"24px"}}>معلومات حسابي</h2>
       <div style={{marginTop:"12px"}}>
     <div>
      <label style={{color:"#98A2B3", fontSize:"12px", color:"#667185",fontWeight:"600" }}>بريد إلكتروني</label>
      <input type="text" placeholder='mohamad1232@gmail.com' style={{border:"1px solid #D0D5DD", padding:"8px", borderRadius:"8px", marginTop:"4px"}}/>
      </div>
     <div style={{marginTop:"12px"}}>
      <label   style={{color:"#98A2B3", fontSize:"12px", color:"#667185", fontWeight:"600"}}>اسم كامل</label>
      <input type="text" placeholder='mohamad' style={{border:"1px solid #D0D5DD", padding:"8px", borderRadius:"8px", marginTop:"4px"}} />
     </div>
   
     <button style={{width:"150px", height:"50px", backgroundColor:"#0F973D", borderRadius:"16px", marginTop:"24px", color:"white"}}>تحديث المعلومات</button>
      </div>
      </div>
      </div>

      <TokenSpend />
    </div>
  );
};

export default Settings;
