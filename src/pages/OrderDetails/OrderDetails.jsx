import { OrderDetailsList } from "../../components/OrderDetailsList/OrderDetailsList";
import styles from "./OrderDetails.module.css";
export function OrderDetails() {
  return (
    <div>
      <h1 style={{textAlign: "center" , fontSize: "3rem" , marginBottom: "2rem", fontWeight: "700"}}>Boxcooler data</h1>

      <div className={styles.grid}>
        <OrderDetailsList />
      </div>
    </div>
  );
}
