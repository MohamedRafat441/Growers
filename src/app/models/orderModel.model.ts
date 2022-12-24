import { OrderDetails } from "./orderDetails.model";

export class OrderModel {
    orderDetails!: OrderDetails[];
    customerId!: number;
    growerId!: number;
    totalAmount!: number;
}
