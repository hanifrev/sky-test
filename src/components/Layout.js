import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-5 xmd:px-[220px] pt-7 xmd:pt-12 max-w-screen-xl mx-auto">
        {children}
      </div>
    </>
  );
};

export default Layout;
