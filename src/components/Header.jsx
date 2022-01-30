import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import InfoIcon from "@material-ui/icons/Info";
import { Button } from "@material-ui/core";

import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <div className="header">
      <TwitterIcon className="headerTwitterIcon" />

      {/* Bunch of other Icons */}
      <HeaderItem active text="Home" Icon={HomeIcon} />
      <HeaderItem text="Trending" Icon={WhatshotIcon} />
      <HeaderItem text="About" Icon={InfoIcon} />
      <Button variant="outlined" className="headerTweet">
        Tweet
      </Button>
    </div>
  );
}

export default Header;
