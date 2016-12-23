import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { PageHeaderComponent } from './page-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageHeaderComponent],
  providers: [Title],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
