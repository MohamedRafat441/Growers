import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { OrderModel } from '../models/orderModel.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {

  }

  
  getOrders() {
 
   return this.http.get<Order[]>(`${environment.baseURL}/orders`);
 }
 getOrdersByGrowerId(growerId : number) {
 
  return this.http.get<Order[]>(`${environment.baseURL}/orders/GetByGrowerId?growerid=${growerId}`);
}
getOrdersByCustomerId(customerId : number) {
 
  return this.http.get<Order[]>(`${environment.baseURL}/orders/GetByCustomerId?customerId=${customerId}`);
}
 Add(entity: OrderModel) {
  let url=`${environment.baseURL}/OrderDetails/AddOrderDetails`;
  let res=this.http.post<OrderModel>(url, entity).subscribe(  {
    next: (response) => {
      debugger;
      let x = response;
      console.log(x);    
    },
   error: (error) => {
    alert('error from server');
      console.log('error Add products', error);
    },
    complete:() => console.log('Observer got a complete notification')
  });
  return res;
}
}
