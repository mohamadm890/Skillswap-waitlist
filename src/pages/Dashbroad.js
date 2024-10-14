import { Cairo } from "@next/font/google";
import { useRouter } from 'next/router';
import { FaRegFile } from "react-icons/fa";
import { useState } from "react"; 
import SideBar from "./SideBar";
import { v4 as uuidv4 } from 'uuid';
import useStore from './StoreZustand'
import Tools from './Tools'
import Create from './Create'

const cairo = Cairo({
    subsets: ['arabic'],
    variable: "--font-cairo",
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export default function Dashboard() {
  const [doc_id, setdoc_id] = useState();
  const {title, text, plainText, info} = useStore();
  const [selectedPage, setSelectedPage] = useState('Create');
  const route = useRouter();
  
  const handlePageSelection = (page) => {
    setSelectedPage(page);
  }


  return (
    <div style={{
      fontFamily: `${cairo.style.fontFamily}`,
      textAlign: "right",
      width: "100%",
      height: "100vh",
      background: "#F7FBF8",
      padding: "12px",
      display: 'flex',
      direction: 'rtl',
      paddingBottom:"12px", 
      overflowY: 'auto',
    }}>

  <SideBar   handlePageSelection={handlePageSelection} />

  <div style={{flexDirection:"column", marginRight:"20px", marginTop:"60px"}}> 
 
     
      {selectedPage === 'Create' && 
      <Create />}
      
      {selectedPage === 'Tools' &&  <Tools />}

      </div>
      
     
    </div>
  );
}
