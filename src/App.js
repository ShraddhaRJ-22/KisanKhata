import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer"; // ✅ Only if you’ve created it

// Optional: React Router import (future setup)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* 🌿 Top Navbar */}
        <Navbar />

        {/* 📱 Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Dashboard is the homepage */}
            <Route path="/" element={<Dashboard />} />

            {/* Reports page */}
            <Route path="/reports" element={<Reports />} />

            {/* Login page */}
            <Route path="/login" element={<Login />} />

            {/* Signup page */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* 🌱 Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
