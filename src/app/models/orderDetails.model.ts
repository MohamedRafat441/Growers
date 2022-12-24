import { Order } from "./order.model";
import { Product } from "./product.model";

export class OrderDetails {
    id!: number;
    order?:Order;
    product?:Product;
    orderId?: number;
    productId?: number;
    customerId?: number;
    quantity!: number;
    price!: number;
}
