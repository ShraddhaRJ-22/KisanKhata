import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">KisanKhata</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
