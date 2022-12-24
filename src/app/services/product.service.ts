import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

   }

   
   getProducts() {
  debugger;
    return this.http.get<Product[]>(`${environment.baseURL}/products`);
  }
  getProductsByGrowerId(growerId:number) {
  debugger;
  var url=`${environment.baseURL}/products/GetByGrowerId?growerId=${growerId}`;
    return this.http.get<Product[]>(url);
  }
  update(entity: Product) {
    debugger;
    return this.http.put<Product>(`${environment.baseURL}/products`, entity).subscribe(  {
      next: (response) => {
        debugger;
        let x = response;
        console.log(x);    
      },
	   error: (error) => {
      alert('error from server');
        console.log('error Edit products', error);
      },
      complete:() => console.log('Observer got a complete notification')
    });
  }

  Add(entity: Product) {
    entity.growerId=1;
    let url=`${environment.baseURL}/products`;
    let res=this.http.post<Product>(url, entity).subscribe(  {
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

  Delete(entity: Product) {
    return this.http.get<boolean>(`${environment.baseURL}/products/Delete?id=${entity.id}`).subscribe(  {
      next: (response) => {
        debugger;
        let x = response;
        console.log(x);    
      },
	   error: (error) => {
      alert('error from server');
        console.log('error delete products', error);
      },
      complete:() => console.log('Observer got a complete notification')
    });
  }
}
