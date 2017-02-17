import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { WideFormatComponent } from './wide-format/wide-format.component';
import { SpecialtyPrintingComponent } from './specialty-printing/specialty-printing.component';
import { BinderyComponent } from './bindery/bindery.component';

const productsRoutes: Routes = [
  {
      path: 'products',
      children: [
          {path: '', component: ProductsComponent, pathMatch: 'prefix'},
          {path: 'photographs', component: PhotographsComponent},
          {path: 'wide-format', component: WideFormatComponent},
          {path: 'banners', redirectTo: 'wide-format'},
          {path: 'signs', redirectTo: 'wide-format'},
          {path: 'specialty-printing', component: SpecialtyPrintingComponent},
          {path: 'specialty', redirectTo: 'specialty-printing'},
          {path: 'bindery-and-finishing', component: BinderyComponent},
          {path: 'bindery', redirectTo: 'bindery-and-finishing'},
          {path: 'finishing', redirectTo: 'bindery-and-finishing'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ProductsRoutingModule { }
