import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";

const ExpenseForm = () => {
  const { t } = useTranslation();
  const { addExpense } = useContext(AppContext);

  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, category, amount } = formData;

    if (!date || !category || !amount) {
      setError("⚠️ Please fill all required fields.");
      return;
    }

    addExpense(formData);
    setFormData({ date: "", category: "", amount: "", notes: "" });
    setError("");
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
        {t("add_expense") || "Add Daily Expense"}
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("date") || "Date"} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("category") || "Category"} <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
          >
            <option value="">-- Select Category --</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Seeds">Seeds</option>
            <option value="Fuel">Fuel</option>
            <option value="Labor">Labor</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("amount") || "Amount (₹)"} <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount in ₹"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("notes") || "Notes"}
          </label>
          <textarea
            name="notes"
            placeholder="Optional"
            value={formData.notes}
            onChange={handleChange}
            rows="2"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-lg transition-all duration-200"
        >
          {t("save_expense") || "Save Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
