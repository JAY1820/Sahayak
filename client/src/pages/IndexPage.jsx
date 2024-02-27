import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import Loader from "../components/Loader";

import index from "../assets/index.png";
import Header from "../components/Header";

import HomePage from '../components/HomePage.jsx'; 

function IndexPage() {
  const { user, setUser } = useContext(UserContext);

  if (user) {
    if (user.role === "Student") {
      console.log(user);
      return <Navigate to="/student/dashboard" />;
    } else if (user.role === "Rector") {
      return <Navigate to="/rector/home" />;
    } else if (user.role === "Accountant") {
      return <Navigate to="/accountant/dashboard" />;
    }
  }
  
  return (
    <>
      <Header />
      <HomePage /> {/* Render HomePage component */}
    </>
  );
}

export default IndexPage;
