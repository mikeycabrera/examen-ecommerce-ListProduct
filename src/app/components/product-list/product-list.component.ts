import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiStoreService } from 'src/app/service/api-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public starRating: any;
  
  //Variable que obtendra los datos obtenidos de la funcion que retorna la data de la api.
  public varProductList:any =[];

  //Variable que Se inicializa en 1 para mostrar los product list en el paginado
  public pageSize =1;
 
  //En el constructor se invoca  el servicio que  consume el api
  constructor(private api:ApiStoreService) { 
  }

  ngOnInit(): void {
    //Se obtienen los datos de localStorage , que ya se guardaron previamente 
    //esto con el objetivo de no peticionar n veces a la API.
   let localProduct: any = localStorage.getItem('localProduct');
   this.varProductList = JSON.parse(localProduct);

    //Se inyecta(incoca) la varible que contiene el servicio y  obtenemos la data.
     if(this.varProductList === null){
      this.api.getListProduct().subscribe(res=>{
        this.varProductList = res;
        //Se almacena la informacion en localStorage para no peticionar  a la APi.
        localStorage.setItem('localProduct',  JSON.stringify(this.varProductList));

        this.varProductList.map((res:any) =>{
              let rating:any = res.rating.rate;
              this.starRating = Math.round(rating);   
        })
      })
    }
  }
  //Metodo que almacena informacion del producto a detalle.
  addDetail(item:any): void {
    this.api.setDetailProduct(item);
  }

}
