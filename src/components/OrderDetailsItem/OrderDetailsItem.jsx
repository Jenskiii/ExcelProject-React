import { useState } from "react";
import { useParams } from "react-router-dom";
import useOrderData from "../../hooks/useOrderData";
import styles from "./OrderDetailsItem.module.css";
import { Button } from "../UI/Button/Button";

export function OrderDetailsItem({
  orderHeader,
  orderValue,
  className,
  index,
}) {
  const { orderId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(orderValue);
  const { setSheetData } = useOrderData();

  // update order value
  function updateValue() {
    setSheetData((currentData) => {
      return currentData.map((data) => {
        let selectedKey = Object.keys(currentData[orderId])[index];
        if (data.ID === currentData[orderId].ID) {
          return { ...data, [selectedKey]: Number(newValue) };
        }
        return data;
      });
    });

    setIsEditing(false);
  }

  return (
    <div className={`${className} | ${styles.card}`}>
      <h3>{orderHeader}</h3>

      {isEditing ? (
        <span
          className={`${styles.item} ${isEditing === true && styles.active}`}
        >
          <input
            autoFocus
            type="text"
            defaultValue={orderValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <div className={styles.edit}>
            <Button
              theme="cancel"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              cancel
            </Button>

            <Button theme="edit" onClick={() => updateValue(orderValue)}>
              save
            </Button>
          </div>
        </span>
      ) : (
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
