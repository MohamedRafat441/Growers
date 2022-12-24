import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { OrderDetails } from 'src/app/models/orderDetails.model';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/dialogs/cart.dialog/cart.dialog.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,public dialog: MatDialog) { }
  products: Product[] = [];
  orderDetails: OrderDetails[] = [];
  
  orderDetailsCount : number = 0;
  growerId:number=1;
  columnsToDisplay = ['id', 'nameEn', 'price', 'description', 'actions'];
  ngOnInit(): void {
    this.loadData();
   
  }

  public loadData() {
    debugger;
    this.productService.getProductsByGrowerId(this.growerId)
    .subscribe(  {
      next: (response) => {
        debugger;
        this.products = response;
        console.log(this.products);
      },
	   error: (error) => {
      alert('error from server');
        console.log('error getting products', error);
      },
      complete:() => console.log('Observer got a complete notification')
    });
    
  }
  public buy(productObj : Product)
  {
    debugger;
    console.log(productObj);
    let index=this.orderDetails.findIndex(s=>s.productId==productObj.id);
    if(index>-1)
    {
      this.orderDetails[index].quantity=this.orderDetails[index].quantity+1;
      this.orderDetails[index].price=this.orderDetails[index].price+productObj.price;
    }
    else
    {
      debugger;
      let orderDetial : OrderDetails = new OrderDetails();
      orderDetial.customerId=1;
      orderDetial.productId=productObj.id;
      orderDetial.product=productObj;
      orderDetial.price=productObj.price;
      orderDetial.quantity=1;
      this.orderDetails.push(orderDetial);
      this.orderDetailsCount=this.orderDetails.length;
    }
   
    // let product : Product;
    // product=<Product> JSON.parse(JSON.stringify(productObj));
    // const dialogRef = this.dialog.open(DeleteDialogComponent, {
    //   data:product
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   debugger;
    //   if (result === 1) {

    //     this.loadData();
    //   }
    // });
  }
  public showCart( )
  {
    debugger;

     let orders : OrderDetails[] ;
     orders=<OrderDetails[] > JSON.parse(JSON.stringify(this.orderDetails));
     const dialogRef = this.dialog.open(CartDialogComponent, {
       data:orders
     });

     dialogRef.afterClosed().subscribe(result => {
       debugger;
       if (result === 1) {

         this.loadData();
       }
     });
  }
  
}
