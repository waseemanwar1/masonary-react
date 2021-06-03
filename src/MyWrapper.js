import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "./Header";
import SocialLink from "./SocialLink";
import Profile from "./Profile";

// The number of columns change by resizing the window
const MyWrapper = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
      <Masonry>
        <Header
          text="is a full stack  product designer from Germany working in Tech with a master of science degree in industrial design from TUDelft. He has first hand industry experience and recently founded his own startup Yello."
          header="true"
        />
        <SocialLink />
        <Profile />
        <Header
          text="Portfolio made with in New York. Copyright 2021 Dennis Gecaj. All rights reserved."
          header="false"
        />
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MyWrapper;
