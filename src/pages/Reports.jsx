import React from "react";
import ReportExport from "../components/ReportExport";
import { useTranslation } from "react-i18next";

const Reports = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        {t("reports_title") || "Reports & Analysis"}
      </h1>
      <ReportExport />

      <p className="text-center text-gray-600 mt-8">
        {t("reports_note") ||
          "Easily download all your farm records and analyze your yearly performance."}
      </p>
    </div>
  );
};

export default Reports;
