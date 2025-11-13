import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const YieldForm = () => {
  const { t } = useTranslation();
  const { addYield } = useContext(AppContext);

  const [form, setForm] = useState({
    crop: "",
    date: "",
    yield: "",
    pricePerUnit: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addYield(form);
    setForm({ crop: "", date: "", yield: "", pricePerUnit: "" });
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {t("add_yield") || "Add Crop Yield"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="crop"
          value={form.crop}
          onChange={handleChange}
          placeholder={t("crop_name") || "Crop Name"}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="number"
          name="yield"
          value={form.yield}
          onChange={handleChange}
          placeholder={t("quantity") || "Quantity (kg)"}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="number"
          name="pricePerUnit"
          value={form.pricePerUnit}
          onChange={handleChange}
          placeholder={t("price_per_unit") || "Price per Unit (₹)"}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-all duration-200"
        >
          {t("save_yield") || "Save Yield"}
        </button>
      </form>
    </div>
  );
};

export default YieldForm;
