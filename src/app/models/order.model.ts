import { Customer } from "./customer.model";
import { Grower } from "./grower.model";

export class Order {
    id!: number;
    orderNumber!: string;
    totalAmount!: number;
    customerId!: number;
    growerId!: number;
    customer! : Customer;
    grower! : Grower;

}
