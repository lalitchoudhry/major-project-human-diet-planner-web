import React, { useState, useEffect } from "react";
import mainlogo from "./Assets/logo.png";
import { Link } from "react-router-dom";
// import Wave from "react-wavify";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists

    setCurrentPage(window.location.pathname);
  }, []);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Update isLoggedIn state to false
    setIsLoggedIn(false);
    // window.location.href = "http://localhost:3000";
  };

  return (
    <nav className="fixed top-0 w-full bg-white p-5 shadow-lg z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center flex-shrink-0">
            <img src={mainlogo} alt="logo" className="w-12 h-12 mr-1" />{" "}
            {/* Logo */}
            <span className="flex flex-col">
              <span className="font-bold text-3xl underline decoration-brand">
                IronPulse
              </span>
              <span className="text-gray">Fit and Health</span>
            </span>
          </div>
          <div
            className={`${
              showMobileNav
                ? "flex flex-col items-center absolute bg-white w-full top-20 left-0 child:nav-mobile"
                : "hidden md:flex items-center child:nav-link child-hover:nav-link-hover"
            }`}
          >
            <Link to="/">Home</Link>
            {isLoggedIn ? (
              <>
                <Link to="/post">Community</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/userprofile/:username">Profile</Link>
                <button onClick={handleLogout}>Logout </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
          <div
            className="md:hidden w-6"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <div className="w-full p-0.5 m-1 bg-brand rounded"></div>
            <div className="w-full p-0.5 m-1 bg-brand rounded"></div>
            <div className="w-full p-0.5 m-1 bg-brand rounded"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
