import React, { useState } from 'react';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";

const SideBar = ({ handlePageSelection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className={`SideBar ${isOpen ? 'open' : ''}`}>
        <div className='nav'>
          <div className='container'>
            <div>
              <div style={{ padding: "16px" }}>
              <img src='/arabicai.svg' alt='شعار' width={'100%'} style={{ maxWidth: '32px', height: 'auto' }} />
              </div>
              <hr style={{ border: '0.6px solid #F0F2F5', height: '1px', width: '80%', margin: "auto" }} />
            </div>
            {/* Sidebar Links */}
            <div className='icon-container' onClick={() => handlePageSelection('Create')}>
              <MdOutlineCreateNewFolder size={24} />
              {isOpen && <span style={{ fontSize: "8px", marginTop: "4px" }}>إنشاء</span>}
            </div>
            <div className='icon-container' onClick={() => handlePageSelection('Tools')}>
              <FiTool size={24} />
              {isOpen && <span style={{ fontSize: "8px", marginTop: "4px" }}>أدوات</span>}
            </div>
            <div className='icon-container' onClick={() => handlePageSelection('settings')}>
              <VscSettings size={24} style={{ cursor: "pointer" }} />
              {isOpen && <span style={{ fontSize: "8px", marginTop: "4px" }}>إعدادات</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div style={{ position: "fixed", top: "16px", left: "16px", zIndex: "1000" }}>
        <FaBars size={24} onClick={toggleSidebar} style={{ cursor: "pointer" }} />
      </div>

      {/* Styles */}
      <style jsx>{`
      .nav {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 40px;
        max-width: 400px;
      }
      .container img {
        width: 60px; /* Fixed size */
        height: auto; /* Maintain aspect ratio */
      }
        .icon-container {
          display: flex;
          cursor: pointer;
          flex-direction: column;
          align-items: center;
          transition: color 0.3s ease, transform 0.3s ease; /* Add transition for smooth effect */
        }

        .icon-container:hover {
          color: #0070f3; /* Change color on hover */
          transform: scale(1.1); /* Slightly scale the icon on hover */
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          height: 100%;
          width: 100%;
          margin-top: 12px;
        }

        .SideBar {
          height: 100%;
          background-color: white;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .SideBar {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px; /* Ensure this is enough height for your icons */
            background-color: white;
            justify-content: space-around;
            z-index: 1000;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden; /* Prevent overflow */
          }

          .container {
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
            gap: 32px; /* Adjust gap as necessary */
            justify-content: center; /* Corrected typo */
            align-items: center;
          }

          nav {
            max-width: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default SideBar;
