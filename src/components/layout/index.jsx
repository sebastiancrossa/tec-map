// Libraries
import React from "react";

// Component Imports
import Navbar from "../../components/layout/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
