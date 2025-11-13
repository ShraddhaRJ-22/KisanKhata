// 🧮 Utility to calculate total expense, total income, and net profit

export const calculateProfit = (expenses, yields) => {
  const totalExpense = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0
  );

  const totalIncome = yields.reduce(
    (sum, y) =>
      sum + Number(y.quantity || 0) * Number(y.pricePerUnit || 0),
    0
  );

  const netProfit = totalIncome - totalExpense;

  return {
    totalExpense,
    totalIncome,
    netProfit
  };
};
