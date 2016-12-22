import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { PageHeaderModule } from '../page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
