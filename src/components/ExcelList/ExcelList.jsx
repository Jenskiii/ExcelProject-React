import styles from "./ExcelList.module.css";
import { Button } from "../UI/Button/Button";
import { Link } from "react-router-dom";
import useOrderData from "../../hooks/useOrderData";

export function ExcelList() {
  const { filteredData, sheetData } = useOrderData();
  return (
    <>
      {filteredData.length > 0 && (
        <div className={styles.grid}>
          {filteredData.slice(0, 3).map((row) => {
            return (
              <div key={crypto.randomUUID()} className={styles.card}>
                <ExcelListCard title="Order no" row={row["Order no"]} />
                <ExcelListCard title="Vessel name" row={row["Vessel name"]} />
                <ExcelListCard title="IMO no" row={row["IMO number"]} />
                <Button
                  AsComponent={Link}
                  theme="purple"
                  to={`/orderdetails/${sheetData.findIndex(
                    (item) => item["Order no"] === row["Order no"]
                  )}`}
                >
                  Details
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

function ExcelListCard({ title, row }) {
  return (
    <div className={styles.row}>
      <h3>{title}: </h3>
      <p>{row}</p>
    </div>
  );
}
