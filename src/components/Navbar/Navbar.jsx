import React from "react";

//* Style *//
import "./navbar.scss";

//* Icons *//
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";

//* Images *//
import avatar from "../../images/avatar.jfif";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search here" />
          <SearchOutlinedIcon className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            <span>English</span>
          </div>

          <div className="item">
            <DarkModeOutlinedIcon />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon />
          </div>

          <div className="item">
            <NotificationsActiveOutlinedIcon />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <FeaturedPlayListOutlinedIcon />
          </div>

          <div className="item">
            <img src={avatar} alt="User avatar" className="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
