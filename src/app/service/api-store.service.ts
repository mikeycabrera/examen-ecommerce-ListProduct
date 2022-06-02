import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import {Products} from '../interfaces/products'
@Injectable({
  providedIn: 'root'
})
export class ApiStoreService {
  //Se declara la variable que contiene el modelo de datos(interface)
  public products!: Products;

  public productList : any =[];

  public productDetail = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

   
  //Metodo que consume la APi.
  getListProduct(): Observable<Products>{
    return this.http.get<Products>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  setDetailProduct(product:any){
      this.productList.push(product);
      this.productList = [... new Set(this.productList)];
  }

  getProducts(): Observable<any>{
    const result = new Observable(obs=>{
      obs.next(this.productList);
    })
    return result;
  }
}
