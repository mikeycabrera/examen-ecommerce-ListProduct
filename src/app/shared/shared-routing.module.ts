import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailListComponent } from '../components/detail-list/detail-list.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {path:'product', component:ProductListComponent},
  {path:'detailProduct', component:DetailListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
