import React from 'react';
import {Cairo} from "@next/font/google"
import { useRouter } from 'next/router';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: "--font-cairo",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});


function Selection() {
const router = useRouter();

const route_Selection = () => {
  router.push('/Dashbroad_editor')
}

  return (
    <div style={{  textAlign: "right",
    fontFamily: `${cairo.style.fontFamily}`,
    width: "100%",
    height: "100vh",
    background: "#F7FBF8",
    padding: "12px",
    display: 'flex',
    alignContent:"center",
    justifyContent: "center",
    flexDirection:"column",
    alignItems: "center",
    direction: 'rtl',
    paddingBottom:"12px"
    
    }}>

     <h2  style={{ fontWeight: "800",
              fontSize: "28px",
              marginTop: "12px",
              textAlign: "center",
              width:"500px"
            }}>اكتب مقالك في دقائق: اختر ما بين النسخة السريعة والمفصلة</h2>
     <div style={{display:"flex", gap:"50px",marginTop:"24px"}}>
      <div style={{border:"1px solid #D0D5DD", borderRadius:"40px", width:"300px", height:"300px", backgroundColor:"white"}}>
        <div style={{padding:"12px"}}>
        <h3 style={{ fontWeight: "800",
              fontSize: "28px",
              marginTop: "16px"}}>اكتب مقالك بتفاصيلك</h3>
        <p  style={{
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "12px",
              textAlign: "right",
              color: "#98A2B3"
            }}>إذا كنت تبحث عن تفاصيل دقيقة، قدم لنا معلوماتك وسنعد لك</p>
                        <button style={{padding:"12px", backgroundColor:"#099137", fontWeight:"600", borderRadius:"40px", color:"white", marginTop:"28px", width:"100%"}}>إنشاء مقال مفصل</button>

            </div>
      </div>
      <div   style={{border:"1px solid #D0D5DD", borderRadius:"40px", width:"300px", height:"300px", backgroundColor:"white"}}>
        <div style={{padding:"16px"}}>
      <h3 style={{ fontWeight: "800",
              fontSize: "28px",
              marginTop: "12px"}}>احصل على مقال في وقت قصير</h3>
        <p  style={{
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "12px",
              textAlign: "right",
              color: "#98A2B3"
            }}>تريد إنشاء مقال بسرعة؟ فقط قدم لنا المعلومات الأساسية.</p>
            <button onClick={route_Selection}  style={{padding:"12px",width:"100%", backgroundColor:"#099137", fontWeight:"600", borderRadius:"40px", color:"white", marginTop:"28px"}}>  إنشاء مقال سريع </button>
      </div>
      </div>
     </div>
    </div>
  );
}

export default Selection;
