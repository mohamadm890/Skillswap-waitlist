import React,{useState} from 'react';
import { useRouter } from 'next/router';
import useStore from "./StoreZustand.js";
import { FaRegFile } from "react-icons/fa";

import { v4 as uuidv4 } from 'uuid';

const Create = () => {

    const [doc_id, setdoc_id] = useState();
    const route = useRouter();
    const {title, text, plainText, info} = useStore();
    const route_Selection = async () => {
        const newFileId = uuidv4();
    
        console.log(info)
        console.log(newFileId);
        setdoc_id(newFileId);
        await route.push(`/doc/${newFileId}`);
        console.log('After route push');
      }
  return (
    <div>
 <div style={{width:"88%"}}>
  <h1 style={{fontSize:"28px", fontWeight:"800"}}>ابدأ بإنشاء محتوى عربي الآن</h1>
 <p style={{fontSize:"12px",fontWeight:"600px", marginTop:"16px",lineHeight:"24px", width:"95%"}}>استخدم ذكاء الاصطناعي الخاص بنا لإنشاء محتوى عربي بسرعة وسهولة. كل ما تحتاجه لكتابة مقالات، تقارير، أو نصوص إبداعية في مكان واحد.</p>
</div>




    <div
    onClick={route_Selection}
    style={{
    height: "180px",
    width: "160px",
    backgroundColor: "white",
    borderRadius: "40px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: "32px",
    marginBottom: "16px",
    cursor:"pointer",
    border: "1px solid #E4E7EC",

  }}>


    <div style={{ padding: "12px", display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center" }}>
     
    <FaRegFile size={60} style={{ color: "#0F973D" }}/>
    <p style={{
      fontWeight: "600",
      fontSize: "20px",
      marginTop: "12px",
      textAlign: "right",
      color: "#667185"
    }}>مستند جديد</p>
  </div>
  </div>
  </div>

  );
};
export default Create;