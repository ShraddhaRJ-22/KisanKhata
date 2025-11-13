import React from "react";
import logo from "../assets/logo.jpg"; // ✅ same logo as login
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-gray-100">
        {/* 🌿 Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="KisanKhata Logo" className="h-16 w-16 rounded-full" />
        </div>

        {/* ✨ Title */}
        <h2 className="text-2xl font-semibold text-green-700 mb-2 text-center">
          {t("Signup") || "Create Account"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {t("") || "Join KisanKhata and start managing your farm records."}
        </p>

        {/* 🧾 Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">{t("Full Name") || "Full Name"}</label>
            <input
              type="text"
              placeholder={t("Enter your name") || "Enter your name"}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t("email") || "Email"}</label>
            <input
              type="email"
              placeholder={t("Enter your email") || "Enter your email"}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t("password") || "Password"}</label>
            <input
              type="password"
              placeholder={t("Enter your password") || "Enter your password"}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white w-full py-2 rounded-lg hover:bg-green-800 transition-all duration-200"
          >
            {t("Signup") || "Sign Up"}
          </button>
        </form>

        {/* 🔁 Footer */}
        <p className="text-center text-gray-600 text-sm mt-4">
          {t("Already have an account?") || "Already have an account?"}{" "}
          <Link to="/login" className="text-green-700 font-medium hover:underline">
            {t("login") || "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
