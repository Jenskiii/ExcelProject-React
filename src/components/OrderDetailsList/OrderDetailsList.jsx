import { useParams } from "react-router-dom";
import useOrderData from "../../hooks/useOrderData";
import styles from "./OrderDetailsList.module.css";
import { OrderDetailsItem } from "../OrderDetailsItem/OrderDetailsItem";

export function OrderDetailsList() {
  const { orderId } = useParams();
  const { sheetData } = useOrderData();

  // select clicked order
  const selectedOrder = sheetData[orderId];

  function renderList() {
    const listItems = [];
    for (let i = 1; i <= Object.keys(selectedOrder).length; i++) {
      // skip specific values
      if (i >= 8 && i <= 9) continue;
      if (i >= 22) continue;
      // push all items into a array
      listItems.push(
        <OrderDetailsItem
          orderHeader={Object.keys(selectedOrder)[i].split("_").join(" ")}
          orderValue={Object.values(selectedOrder)[i]}
          className={styles[`card_${i - 1}`]}
          orderIndex={i}
          key={crypto.randomUUID()}
        />
      );
    }
    return listItems;
  }
  return <div className={styles.grid}>{renderList()}</div>;
}
