import React from "react";
import { Menu, Search, Grid, Sun } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
      {/* Left Side - Logo & Menu */}
      <div className="d-flex align-items-center">
        <button className="btn p-2">
          <Menu size={24} className="text-white" />
        </button>
        <span className="text-success fw-bold fs-4 ms-2">DoIt</span>
      </div>

      {/* Right Side - Icons */}
      <div className="ms-auto d-flex gap-3">
        <Search size={20} className="cursor-pointer text-white" />
        <Grid size={20} className="cursor-pointer text-white" />
        <Sun size={20} className="cursor-pointer text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
