import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { ProductsComponent } from './products/products.component';
import { CartDialogComponent } from '../dialogs/cart.dialog/cart.dialog.component';
import { OrdersComponent } from './orders/orders.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    ProductsComponent,
    CartDialogComponent,
    OrdersComponent
    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class CustomerModule { }
