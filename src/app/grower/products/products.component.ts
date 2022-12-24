import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { AddDialogComponent } from 'src/app/dialogs/add.dialog/add.dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/dialogs/edit.dialog/edit.dialog.component';
import { DeleteDialogComponent } from 'src/app/dialogs/delete/delete.dialog.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,public dialog: MatDialog) { }

  products: Product[] = [];
  columnsToDisplay = ['id', 'nameEn', 'price', 'description', 'actions'];
  growerId: number = 1;

  ngOnInit(): void {
    this.loadData();
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {product: Product }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      let x=result;
      if (result === 1) {

        this.loadData();
      }
    });
  }

  public loadData() {
    debugger;
    this.productService.getProducts()
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

  startEdit(productObj : Product)
  {
    console.log(productObj);
    let product : Product;
    product=<Product> JSON.parse(JSON.stringify(productObj));
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data:product
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result === 1) {

        this.loadData();
      }
    });
  }

  startDelete(productObj : Product)
  {
    console.log(productObj);
    let product : Product;
    product=<Product> JSON.parse(JSON.stringify(productObj));
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data:product
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result === 1) {

        this.loadData();
      }
    });
  }
}



