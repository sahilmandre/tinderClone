import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://cdn-bpdmo.nitrocdn.com/huOmQuvgltnrozmRiXkCfbikGAKKNLBZ/assets/static/optimized/rev-d2b0b16/wp-content/uploads/2020/09/Tinder-Emblem-700x394.png"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
