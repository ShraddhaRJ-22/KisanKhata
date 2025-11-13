import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [yields, setYields] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const addYield = (yieldData) => {
    setYields((prev) => [...prev, yieldData]);
  };

  return (
    <AppContext.Provider value={{ expenses, yields, addExpense, addYield }}>
      {children}
    </AppContext.Provider>
  );
};
