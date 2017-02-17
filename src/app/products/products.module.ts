import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageHeaderModule } from '../page-header/page-header.module';

import { ProductsComponent } from './products.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { WideFormatComponent } from './wide-format/wide-format.component';
import { SpecialtyPrintingComponent } from './specialty-printing/specialty-printing.component';
import { BinderyComponent } from './bindery/bindery.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PageHeaderModule
  ],
  declarations: [
      ProductsComponent,
      PhotographsComponent,
      WideFormatComponent,
      SpecialtyPrintingComponent,
      BinderyComponent
  ]
})
export class ProductsModule { }
