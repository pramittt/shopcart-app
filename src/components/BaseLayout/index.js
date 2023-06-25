// Dependencies
import React from "react";
// Externals
import Navbar from "./sections/NavBar";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import "./index.css";

const className = "first-header";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <div className={className}>
        <Navbar />
        <Header />
      </div>
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
