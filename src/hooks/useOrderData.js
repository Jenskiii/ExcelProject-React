import { useContext } from "react";
import { OrderContext } from "../context/OrderProvider";

export default function useOrderData() {
  const value = useContext(OrderContext);

  if (value == null) {
    throw new Error("data has to be within <OrderProvider>");
  }

  return value;
}
