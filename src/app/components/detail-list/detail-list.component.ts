import { Component, OnInit } from '@angular/core';
import { ApiStoreService } from 'src/app/service/api-store.service';
@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {

  products : any =[];

  constructor(private api: ApiStoreService) { }

  ngOnInit(): void {
    //Consumimos el metodo de la clase servicio(ApiStoreService), para obtener los datos
    //Que se quieren mostrar a detalle
     this.api.getProducts().subscribe(res =>{
       console.log(res);
       this.products = res;
     })
  }

}
