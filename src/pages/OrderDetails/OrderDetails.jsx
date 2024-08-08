import { OrderDetailsList } from "../../components/OrderDetailsList/OrderDetailsList";
export function OrderDetails() {
  return (
    <div>
      <h1 className="title">Order details</h1>
      <div>
        <OrderDetailsList />
      </div>
    </div>
  );
}
