import { SearchBar } from "../../components/UI/SearchBar/SearchBar";
import { ExcelList } from "../../components/ExcelList/ExcelList";
import styles from "./Home.module.css";
import { Button } from "../../components/UI/Button/Button";
import { AddIcon } from "../../components/UI/SVG/Svg";
import { Link } from "react-router-dom";
import useOrderData from "../../hooks/useOrderData";

export function Home() {
  const { sheetData } = useOrderData();
  return (
    <>
      <h1 className={styles.title}>Orders</h1>
      <div className={`${styles["search-bar"]} | container`}>
        {/* search bar */}
        <SearchBar />
        {/* add button */}

        {sheetData.length > 0 && (
          <Button theme="add" AsComponent={Link} to="/add-order">
            <AddIcon /> Add New Order
          </Button>
        )}
      </div>

      {/* Print excel rows */}
      <ExcelList />
    </>
  );
}
