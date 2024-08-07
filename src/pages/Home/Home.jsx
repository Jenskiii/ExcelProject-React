import { SearchBar } from "../../components/UI/SearchBar/SearchBar";
import { ExcelList } from "../../components/ExcelList/ExcelList";
import styles from "./Home.module.css";
import { Button } from "../../components/UI/Button/Button";
import { AddIcon } from "../../components/UI/SVG/Svg";

export function Home() {
  return (
    <>
      <h1>Orders</h1>
      <div className={`${styles["search-bar"]} | container`}>
        {/* search bar */}
        <SearchBar />
        {/* add button */}
        <Button theme="add">
          <AddIcon /> Add Order
        </Button>
      </div>

      {/* Print excel rows */}
      <ExcelList />
    </>
  );
}
