import * as XLSX from "xlsx";
import { LOCAL_STORAGE_KEY } from "../context/OrderProvider";
import { saveAs } from "file-saver";

export function useExcelSheet(saveDataToVariable) {
  // upload excel file
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.readFile(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // convert excel file to json
      const parsedData = XLSX.utils.sheet_to_json(sheet, {
        defval: "",
      });

      // save data to provided variable
      saveDataToVariable(parsedData);
    };
  };

  function clearFileUpload() {
    // clear uploaded file
    if (window.confirm("Weet je zeker dat je de file wil verwijderen?")) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      return;
    }
  }

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    if (window.confirm("Weet je zeker dat je de file wil opslaan?")) {
      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      saveAs(blob, `${fileName}.xlsx`);
    } else {
      return;
    }
  };

  return { handleFileUpload, clearFileUpload, exportToExcel };
}
