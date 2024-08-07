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
                <ExcelListItem title="Order no" row={row["Order_no"]} />
                <ExcelListItem title="Vessel name" row={row["Vessel_name"]} />
                <ExcelListItem title="IMO no" row={row["IMO_number"]} />
                <Button
                  AsComponent={Link}
                  theme="details"
                  to={`/orderdetails/${sheetData.findIndex(
                    (item) => item["Order_no"] === row["Order_no"]
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

function ExcelListItem({ title, row }) {
  return (
    <div className={styles.row}>
      <h3>{title}</h3>
      <p>{row}</p>
    </div>
  );
}
