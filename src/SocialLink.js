import React from "react";
import { SocialIcon } from "react-social-icons";
import Button from "./Button";

// The number of columns change by resizing the window
const SocialLink = () => {
  return (
    <div className="box">
      <div className="pad">
        <Button text="Say Hello" sim_btn="false" />
        <SocialIcon className="socialLink" url="https://github.com" />
        <SocialIcon className="socialLink" url="https://www.instagram.com" />
        <SocialIcon className="socialLink" url="https://twitter.com" />
      </div>
    </div>
  );
};

export default SocialLink;
