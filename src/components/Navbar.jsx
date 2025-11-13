import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* 🌿 Logo + Brand Name */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="KisanKhata Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-2xl font-bold text-green-700">{t("brand") || "KisanKhata"}</h1>
      </div>

      {/* 🔗 Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-green-700 font-medium transition-all duration-200"
        >
          {t("home") || "Home"}
        </Link>

        <Link
          to="/reports"
          className="text-gray-700 hover:text-green-700 font-medium transition-all duration-200"
        >
          {t("reports_title") || "Reports"}
        </Link>
      </div>

      {/* 🌍 Language + Auth Buttons */}
      <div className="flex items-center space-x-3">
        {/* Language dropdown */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>

        {/* Auth buttons */}
        <div className="flex space-x-2">
          <Link
            to="/login"
            className="px-3 py-1 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-200"
          >
            {t("login") || "Login"}
          </Link>

          <Link
            to="/signup"
            className="px-3 py-1 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all duration-200"
          >
            {t("signup") || "Sign Up"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
