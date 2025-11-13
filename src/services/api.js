import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ update later with your backend URL
});

// Example: Fetch all expenses
export const getExpenses = async () => {
  const res = await API.get("/expenses");
  return res.data;
};

// Example: Add a new expense
export const addExpense = async (expenseData) => {
  const res = await API.post("/expenses", expenseData);
  return res.data;
};

// Example: Fetch all yields
export const getYields = async () => {
  const res = await API.get("/yields");
  return res.data;
};

// Example: Add a new yield entry
export const addYield = async (yieldData) => {
  const res = await API.post("/yields", yieldData);
  return res.data;
};

// Example: Generate report (future use)
export const getReport = async () => {
  const res = await API.get("/report");
  return res.data;
};
