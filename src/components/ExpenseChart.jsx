import React, { useContext, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";

const ExpenseChart = () => {
  const { t } = useTranslation();
  const { expenses } = useContext(AppContext);

  // Prepare data for chart
  const chartData = useMemo(() => {
    // Group expenses by date
    const grouped = {};
    expenses.forEach((exp) => {
      const date = new Date(exp.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      });
      grouped[date] = (grouped[date] || 0) + Number(exp.amount);
    });

    return Object.keys(grouped).map((date) => ({
      date,
      expense: grouped[date],
    }));
  }, [expenses]);

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-10 w-full max-w-3xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
        {t("expense_chart") || "Expense Chart"}
      </h2>

      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#4b5563" />
            <YAxis stroke="#4b5563" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#166534"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: "#16a34a" }}
              name={t("daily_expense") || "Daily Expense (₹)"}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">
          {t("no_expense_data") || "No expense data available to display 📊"}
        </p>
      )}
    </div>
  );
};

export default ExpenseChart;
