import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ApiStoreService } from 'src/app/service/api-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ProductListRoutingModule,
    HttpClientModule,
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
  providers: [ApiStoreService]
})
export class ProductListModule { }
