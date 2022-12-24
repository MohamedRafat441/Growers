import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { OrderDetails } from 'src/app/models/orderDetails.model';
import { OrderModel } from 'src/app/models/orderModel.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-cart.dialog',
  templateUrl: '../../dialogs/cart.dialog/cart.dialog.html',
  styleUrls: ['../../dialogs/cart.dialog/cart.dialog.css']
})
export class CartDialogComponent {

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: OrderDetails[], public dataService: OrderService) { 
                console.log(this.data);
              }
              columnsToDisplay = ['id','name', 'quantity', 'price' , 'totalPrice'];
              orderModel: OrderModel = new OrderModel;
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmBuy(orderDetails : OrderDetails[]): void {
   this.orderModel.customerId=1;
   this.orderModel.growerId=1;
   this.orderModel.orderDetails=orderDetails;
   let totalAmount : number=0;
   for (let index = 0; index < orderDetails.length; index++) {
    totalAmount = totalAmount+ orderDetails[index].price;
    
   }
   this.orderModel.totalAmount=totalAmount;
   this.dataService.Add(this.orderModel);
  }
}
