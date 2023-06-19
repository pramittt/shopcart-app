// Dependencies
import React from "react";
// Externals
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
