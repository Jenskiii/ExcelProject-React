import { ParseExcel } from "../../components/ParseExcel/ParseExcel";
import { SearchBar } from "../../components/UI/SearchBar/SearchBar";
import { ExcelList } from "../../components/ExcelList/ExcelList";

export function Home(){
  return (
    <>
      {/* import excel file */}
      <ParseExcel />

      {/* search bar */}
      <SearchBar />

      {/* Print excel rows */}
      <ExcelList />
    </>
  );
}