import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom"; // Import Link
import DietCalendar from "./DietCalendar";
import "./Dashstyle.css";
import cvrImage from "./Assets/2.jpg";

const Dashboard = () => {
  const dashboardRef = useRef(null);

  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserProfile(user);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center h-screen">
        User not found
      </div>
    );
  }

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
    //   <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Hello, {userProfile.name}!</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <Link to="/mealplan" className="link-button">Meal Plan Generator</Link>
    //     <Link to="/diet-calendar" className="link-button">Diet Calendar</Link>
    //     <Link to="/workreco" className="link-button">Workout Recommendations</Link>
    //     <button className="action-button">Calorie Counter</button>
    //     <Link to="/showbmi" className="link-button">Show BMI</Link>
    //     <Link to="/notifications" className="link-button">Notifications</Lnk>
    //   </div>
    // </div>
    <div className="flex flex-col p-5 md:p-20 bg-secondary">
      {/* <div className="w-auto relative h-[100vh] bg-black  text-white"> */}
      <div
        id="dashboard"
        ref={dashboardRef}
        className="flex flex-col items-center justify-center mt-20"
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center my-5 child-hover:scale-105 child:m-5">
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center ">
            <Link to="/mealplan" className="flex flex-col items-center justify-between">
            <i className="bi bi-journal-check text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5">Meal Planner</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center">
            <Link to="/workreco" className="flex flex-col items-center justify-between">
            <i className="bi bi-bicycle text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5 text-center">Workout Recommendations</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center">
            <Link to="/caloriecounter" className="flex flex-col items-center justify-between">
            <i className="bi bi-calculator text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5">Calorie Counter</p>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center my-5 child-hover:scale-105 child:m-5">
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center">
            <Link to="/showbmi" className="flex flex-col items-center justify-between">
            <i className="bi bi-person-arms-up text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5">Show BMI</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center">
            <Link to="/workoutvideo" className="flex flex-col items-center justify-between">
            <i className="bi bi-play-btn text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5">Workout Videos</p>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 w-56 h-56 flex flex-col items-center justify-center">
            <Link to="/diet-calendar" className="flex flex-col items-center justify-between">
            <i className="bi bi-calendar3 text-7xl text-accent"></i>
              <p className="font-bold text-2xl mt-5">Diet Calendar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
