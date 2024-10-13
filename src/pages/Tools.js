// components/Tools.js
import React from 'react';

const Tools = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'right', direction: 'rtl' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800' }}>الأدوات</h2>
      <p style={{ fontSize: '16px', fontWeight: '400', marginTop: '10px' }}>
        اختر الأداة التي ترغب في استخدامها أدناه:
      </p>
      
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ margin: '10px 0' }}>
          <button >أداة 1</button>
        </li>
        <li style={{ margin: '10px 0' }}>
          <button >أداة 2</button>
        </li>
        <li style={{ margin: '10px 0' }}>
          <button >أداة 3</button>
        </li>
      </ul>
    </div>
  );
};



export default Tools;
