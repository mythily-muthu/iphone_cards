import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-2xl bg-black text-white  items-center flex gap-3 p-4 ">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <Link to="/about">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default Header;
