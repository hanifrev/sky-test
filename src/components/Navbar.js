import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#16ABF8] " data-cy="header-background">
      <div
        className="px-5 py-[18px] xmd:px-[220px] xmd:py-[38px] w-full max-w-screen-xl mx-auto
      "
      >
        <span
          className="font-bold text-lg xmd:text-2xl text-white"
          data-cy="header-title"
        >
          TO DO LIST APP
        </span>
      </div>
    </div>
  );
};

export default Navbar;
