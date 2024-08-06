import { useState } from "react";
import { useParams } from "react-router-dom";
import useOrderData from "../../hooks/useOrderData";
import styles from "./OrderDetailsItem.module.css";
import { Button } from "../UI/Button/Button";

export function OrderDetailsItem({
  orderHeader,
  orderValue,
  className,
  orderIndex,
}) {
  const { orderId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(orderValue);
  const { updateSheetData } = useOrderData();

  return (
    <div className={`${className} | ${styles.card}`}>
      <h3>{orderHeader}</h3>

      {/* card when editing */}
      {isEditing ? (
        <span
          className={`${styles.item} ${isEditing === true && styles.active}`}>
          <input
            autoFocus
            type="text"
            defaultValue={orderValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          {/* buttons */}
          <div className={styles.edit}>
            <Button
              theme="cancel"
              onClick={() => setIsEditing((prev) => !prev)}>
              cancel
            </Button>

            <Button
              theme="edit"
              onClick={() =>
                updateSheetData(newValue, orderId, orderIndex) &&
                setIsEditing(false)
              }>
              save
            </Button>
          </div>
        </span>
      ) : (
        // card when not editing
        <span className={`${styles.item} ${orderValue === "" && styles.empty}`}>
          <p>{orderValue !== "" ? orderValue : "NO INFO"}</p>
          <Button theme="edit" onClick={() => setIsEditing((prev) => !prev)}>
            edit
          </Button>
        </span>
      )}
    </div>
  );
}
