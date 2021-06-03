import React from "react";
import logo from "./images.jpg";
import Button from "./Button";

const Profile = () => {
  return (
    <div className="box" style={{ backgroundColor: "#d6eae8" }}>
      <div className="pad">
        <p style={{ color: "#cecccc" }}>
          <b style={{ color: "#738365" }}>Yello</b>
          <br />
          April 2019.7 months
        </p>
        <Button text="UX & UI Design" sim_btn="true" />
        <Button text="Software Development" sim_btn="true" />
        <Button text="iOS" sim_btn="true" />
        <Button text="Social" sim_btn="true" />
        <p className="profile-text">
          A private social network that introduces a new sharing format with
          photo albums. The plateform officially launched on the App Store in
          April 2021.
        </p>
        <p style={{ color: "#30674b" }}>
          <b style={{ color: "#cecccc" }}>Organization</b> Yello Lab Inc.
        </p>
        <p style={{ color: "#30674b" }}>
          <b style={{ color: "#cecccc" }}>Role</b> Founder
        </p>
        <Button text="Case Study" sim_btn="true" />
        <img src={logo} alt="Yello" />
      </div>
    </div>
  );
};

export default Profile;
