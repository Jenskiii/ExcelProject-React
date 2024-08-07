import { OrderDetailsList } from "../../components/OrderDetailsList/OrderDetailsList";
import styles from "./OrderDetails.module.css";
export function OrderDetails() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Order details</h1>
      <div className={styles.grid}>
        <OrderDetailsList />
      </div>
    </div>
  );
}
