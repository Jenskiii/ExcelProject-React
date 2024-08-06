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
    for (let i = 0; i <= 28; i++) {
      // skip specific values
      if (i >= 7 && i <= 8) continue;
      if (i >= 21 && i <= 29) continue;
      // push all items into a array
      listItems.push(
        <OrderDetailsItem
          orderHeader={Object.keys(selectedOrder)[i]}
          orderValue={Object.values(selectedOrder)[i]}
          className={styles[`card_${i}`]}
          orderIndex={i}
          key={crypto.randomUUID()}
        />
      );
    }
    return listItems;
  }
  return <div className={styles.grid}>{renderList()}</div>;
}
