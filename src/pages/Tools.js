// components/Tools.js
import React from 'react';
import CardTools from './Card_tools'
const Tools = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'right', direction: 'rtl', overflowY: 'auto' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '800' }}>الأدوات</h2>
      <p style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px', color:"#94A3B8" }}>
        اختر الأداة التي ترغب في استخدامها أدناه:
      </p>
      <div style={{display:"flex", gap:12, flexWrap:"wrap" }}>
     <CardTools/>
     <CardTools/>
     <CardTools/>
     <CardTools/>
     <CardTools/>

      </div>
    </div>
  );
};



export default Tools;
