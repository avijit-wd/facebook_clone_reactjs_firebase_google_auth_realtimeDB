import React from "react";
import "./Header.css";
import { Tooltip, Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <Tooltip title="Home">
            <HomeIcon fontSize="large" />
          </Tooltip>
        </div>

        <div className="header__option">
          <Tooltip title="watch">
            <OndemandVideoIcon fontSize="large" />
          </Tooltip>
        </div>

        <div className="header__option">
          <Tooltip title="Matket place">
            <StorefrontIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__option">
          <Tooltip title="Groups">
            <PeopleAltIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__option">
          <Tooltip title="Gaming">
            <SportsEsportsIcon fontSize="large" />
          </Tooltip>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div className="header__iconBox">
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
