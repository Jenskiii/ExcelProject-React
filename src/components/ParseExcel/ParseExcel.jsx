import useOrderData from "../../hooks/useOrderData";
import { useExcelSheet } from "../../hooks/useExcelSheet";
import { Button } from "../UI/Button/Button";
import styles from "./ParseExcel.module.css";

export function ParseExcel() {
  const { sheetData, setSheetData } = useOrderData();
  const { handleFileUpload, clearFileUpload, exportToExcel } =
    useExcelSheet(setSheetData);

  return (
    <div className={styles.uploader}>
      {/* if file uploaded, hide upload button */}
      <span className={sheetData.length !== 0 ? "hidden" : ""}>
        <label htmlFor="file-upload" className={styles["costum-file-upload"]}>
          Upload File
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={(e) => handleFileUpload(e)}
          id="file-upload"
        />
      </span>

      <Button theme="edit" onClick={() => exportToExcel(sheetData, "henk")}>
        export
      </Button>
      <Button
        theme="red"
        className={sheetData.length === 0 ? styles.hidden : ""}
        onClick={() => clearFileUpload()}
      >
        Clear file
      </Button>
    </div>
  );
}
