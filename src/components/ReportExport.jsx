import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ReportExport = () => {
  const { t } = useTranslation();
  const { expenses, yields } = useContext(AppContext);

  // Export to Excel
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const expenseSheet = XLSX.utils.json_to_sheet(expenses);
    const yieldSheet = XLSX.utils.json_to_sheet(yields);

    XLSX.utils.book_append_sheet(wb, expenseSheet, "Expenses");
    XLSX.utils.book_append_sheet(wb, yieldSheet, "Yields");

    XLSX.writeFile(wb, "KisanKhata_Report.xlsx");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("KisanKhata Farm Report", 14, 15);

    // Expenses Table
    doc.setFontSize(12);
    doc.text("Expenses", 14, 30);
    doc.autoTable({
      startY: 35,
      head: [["Date", "Category", "Amount (₹)", "Notes"]],
      body: expenses.map((e) => [e.date, e.category, e.amount, e.notes || "-"]),
      theme: "grid",
      headStyles: { fillColor: [22, 101, 52] },
      alternateRowStyles: { fillColor: [240, 253, 244] },
    });

    // Yields Table
    let finalY = doc.lastAutoTable.finalY + 10;
    doc.text("Yields", 14, finalY);
    doc.autoTable({
      startY: finalY + 5,
      head: [["Crop", "Date", "Yield (kg)", "Price/Unit (₹)"]],
      body: yields.map((y) => [y.crop, y.date, y.yield, y.pricePerUnit]),
      theme: "grid",
      headStyles: { fillColor: [22, 101, 52] },
      alternateRowStyles: { fillColor: [240, 253, 244] },
    });

    doc.save("KisanKhata_Report.pdf");
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-10 w-full max-w-3xl mx-auto border border-gray-100 text-center">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        {t("report_export") || "Export Reports"}
      </h2>

      <p className="text-gray-600 mb-6">
        {t("report_export_desc") ||
          "Download your farm expense and yield data for record keeping."}
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={exportToPDF}
          className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          📄 {t("export_pdf") || "Export PDF"}
        </button>

        <button
          onClick={exportToExcel}
          className="border border-green-700 text-green-700 px-5 py-2 rounded-lg hover:bg-green-50 transition"
        >
          📊 {t("export_excel") || "Export Excel"}
        </button>
      </div>
    </div>
  );
};

export default ReportExport;
