import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrderService,public dialog: MatDialog) { };

  orders: Order[] = [];
  columnsToDisplay = ['id', 'orderNumber', 'totalAmount', 'customerName', 'growerName'];
  growerId: number = 1;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    debugger;
    this.orderService.getOrdersByCustomerId(1)
    .subscribe(  {
      next: (response) => {
        debugger;
        this.orders = response;
        console.log(this.orders);
      },
	   error: (error) => {
      alert('error from server');
        console.log('error getting products', error);
      },
      complete:() => console.log('Observer got a complete notification')
    });
    
  }

}
