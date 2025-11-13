
import ExpenseForm from "../components/ExpenseForm";
import YieldForm from "../components/YieldForm";
import ProfitSummary from "../components/ProfitSummary";
import ExpenseChart from "../components/ExpenseChart";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        {t("dashboard_title") || "Farm Dashboard"}
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <ExpenseForm />
        <YieldForm />
      </div>

      <div className="mt-10">
        <ProfitSummary />
      </div>

      <div className="mt-10">
        <ExpenseChart />
      </div>
    </div>
  );
};

export default Dashboard;
