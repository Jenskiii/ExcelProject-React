import useOrderData from "../../hooks/useOrderData";
import { useExcelSheet } from "../../hooks/useExcelSheet";
import { Button } from "../UI/Button/Button";
import styles from "./HandleExcelFile.module.css";
import { DeleteIcon, DownloadIcon, UploadIcon } from "../UI/SVG/Svg";
import { Link } from "react-router-dom";

export function HandleExcelFile() {
  const { sheetData, setSheetData } = useOrderData();
  const { handleFileUpload, clearFileUpload, exportToExcel } =
    useExcelSheet(setSheetData);

  return (
    <>
      {/* if file uploaded, hide upload button */}
      {/* upload file */}
      <span className={sheetData.length !== 0 ? "hidden" : ""}>
        <label htmlFor="file-upload" className={styles["costum-file-upload"]}>
          <UploadIcon /> Upload File
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={(e) => handleFileUpload(e)}
          id="file-upload"
        />
      </span>

      {/* export excel file */}
      <Button
        className={sheetData.length === 0 ? styles.hidden : ""}
        theme="upload"
        onClick={() => exportToExcel(sheetData, "Boxcooler References")}>
        <DownloadIcon /> export file
      </Button>

      {/* clear uploaded file */}
      <Button
        AsComponent={Link}
        to="./home"
        reloadDocument
        theme="clear"
        className={sheetData.length === 0 ? styles.hidden : ""}
        onClick={() => clearFileUpload()}>
        <DeleteIcon /> Clear file
      </Button>
    </>
  );
}
