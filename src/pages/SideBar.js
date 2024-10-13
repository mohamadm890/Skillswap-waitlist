import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { FaBars } from "react-icons/fa"; // Add hamburger icon
import Link from 'next/link';

const SideBar = ({ handlePageSelection }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`SideBar ${isOpen ? 'open' : ''}`}
        style={{
          width: isOpen ? "80px" : "0", // Conditional width based on state
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "32px",
          overflow: "auto",
          transition: "width 0.3s ease-in-out", // Smooth transition for the sidebar
        }}
      >
        {/* Logo */}
        {isOpen && (
          <div style={{ padding: "16px" }}>
            <img src='/arabicai.svg' alt='شعار' width={32} height={32} />
          </div>
        )}

        {/* Navigation Links */}
        <nav style={{ display: "flex", flexDirection: "column", width: "100%", margin: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "16px", fontWeight: "bold" }}>
            
            {/* Create New */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <MdOutlineCreateNewFolder size={20}   onClick={() => handlePageSelection('Create')} />
              {isOpen && (
                <a 
                
                onClick={() => handlePageSelection('Create')}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "8px",
                  marginTop: "4px",
                  cursor: "pointer"
                }}>إنشاء</a>
              )}
            </div>

            {/* Tools */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FiTool size={20} style={{cursor:"pointer"}} onClick={() => handlePageSelection('Tools')}
 />
              {isOpen && (
                <a
                onClick={() => handlePageSelection('Tools')}
                
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "8px",
                  marginTop: "4px",
                  cursor: "pointer"
                }}>أدوات</a>
              )}
            </div>

            {/* Settings */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="/Settings" passHref>
                <VscSettings size={20} color={router.pathname === '/Settings' ? '#101928' : '#98A2B3'} style={{ cursor: "pointer" }} />
              </Link>
              {isOpen && (
                <a 
                onClick={() => handlePageSelection('settings')}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "8px",
                  marginTop: "4px",
                  cursor: "pointer"
                }}>إعدادات</a>
              )}
            </div>

          </div>
        </nav>
      </div>

      {/* Hamburger Menu */}
      <div style={{ position: "fixed", top: "16px", left: "16px", zIndex: "1000" }}>
        <FaBars size={24} onClick={toggleSidebar} style={{ cursor: "pointer" }} />
      </div>

      {/* Media Query Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .SideBar {
            width: ${isOpen ? "80px" : "0"};
          }
        }
      `}</style>
    </>
  );
};

export default SideBar;

