import React, { useRef } from "react";
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return (
    <div className="min md:h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-beige-100 to-beige-300 ">
      <div className="flex flex-col md:flex-row justify-between w-full px-12 mt-40 md:mt-20">
        {/* Left side with buttons */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-start">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-semibold text-gray-800 mb-4"
            style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
          >
            MAKE YOUR BODY HEALTH & FIT
          </h1>
          <h1
            className="text-md sm:text-xl my-5"
            style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
          >
            Explore our diverse range of exercises designed to sculpt and
            strengthen every muscle group.
          </h1>

          <div className="flex flex-col md:items-start items-center">
            {!isLoggedIn && (
              <>
                <Link
                  to="/register"
                  className="text-lg bg-brand text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Create an account
                </Link>
                <Link
                  to="/login"
                  className="text-lg bg-accent text-white font-medium py-3 px-6 rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Link>
              </>
            )}
            {isLoggedIn && (
              <Link
                to="/dashboard"
                className="text-lg bg-brand hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 my-5"
              >
                Get started
              </Link>
            )}
          </div>
        </div>
        {/* Right side with slideshow */}
        <div className="md:w-1/2">
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default Home;
