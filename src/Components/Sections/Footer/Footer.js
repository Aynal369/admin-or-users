import React from "react";

const Footer = () => {
  return (
    <div style={{ color: "gray", textAlign: "center" }}>
      <small> &copy; Copyright {new Date().getFullYear()} Aynal Hossain. All rights reserved.</small>
    </div>
  );
};

export default Footer;
