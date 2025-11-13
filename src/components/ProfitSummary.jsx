import React, { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import { calculateProfit } from "../utils/profitCalculator";

const ProfitSummary = () => {
  const { t } = useTranslation();
  const { expenses, yields } = useContext(AppContext);

  // useMemo to optimize performance
  const { totalExpense, totalIncome, netProfit } = useMemo(
    () => calculateProfit(expenses, yields),
    [expenses, yields]
  );

  const profitColor =
    netProfit > 0
      ? "text-green-700"
      : netProfit < 0
      ? "text-red-600"
      : "text-gray-700";

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl mx-auto mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
        {t("profit_summary") || "Profit Summary"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {/* Total Expense */}
        <div className="bg-red-50 rounded-xl py-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
            {t("total_expense") || "Total Expense"}
          </h3>
          <p className="text-2xl font-bold text-red-600 mt-2">
            ₹{totalExpense.toLocaleString()}
          </p>
        </div>

        {/* Total Income */}
        <div className="bg-green-50 rounded-xl py-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
            {t("total_income") || "Total Income"}
          </h3>
          <p className="text-2xl font-bold text-green-700 mt-2">
            ₹{totalIncome.toLocaleString()}
          </p>
        </div>

        {/* Net Profit */}
        <div className="bg-yellow-50 rounded-xl py-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
            {t("net_profit") || "Net Profit"}
          </h3>
          <p className={`text-2xl font-bold mt-2 ${profitColor}`}>
            ₹{netProfit.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Summary note */}
      <p className="text-center text-gray-500 text-sm mt-6">
        {netProfit >= 0
          ? t("profit_message") || "Great job! You are earning profit 🎉"
          : t("loss_message") || "Be careful! You are running at a loss ⚠️"}
      </p>
    </div>
  );
};

export default ProfitSummary;
