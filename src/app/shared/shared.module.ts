import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DetailListComponent } from '../components/detail-list/detail-list.component';
import { DetailListModule } from '../components/detail-list/detail-list.module';
import { ProductListModule } from '../components/product-list/product-list.module';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../components/navbar/navbar.component';


@NgModule({
  declarations: [DetailListComponent, ProductListComponent,NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DetailListModule,
    ProductListModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class SharedModule { }
