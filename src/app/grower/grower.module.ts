import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowerRoutingModule } from './grower-routing.module';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogComponent } from '../dialogs/add.dialog/add.dialog.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { EditDialogComponent } from '../dialogs/edit.dialog/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';


@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    GrowerRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class GrowerModule { }
