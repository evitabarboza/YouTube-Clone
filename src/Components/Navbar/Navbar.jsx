import React, { useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import logo_dark from '../../assets/logo_dark.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { BsMoon, BsSun } from "react-icons/bs";


const Navbar = ({ setSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

   const navigate = useNavigate();

   const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    }
  };


  return (
    <nav className={`navbar ${theme} flex-div`}>
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => (prev === false ? true : false))}
          src={menu_icon}
          alt="Menu Icon"
        />
        <Link to="/">
          <img className="logo" src={theme === 'light' ? logo : logo_dark} height={35} alt="Logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleSearch}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />

          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>


      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <img src={notification_icon} alt="Notification Icon" />

        <img className="user-icon" src={profile_icon} alt="Profile Icon" />

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
