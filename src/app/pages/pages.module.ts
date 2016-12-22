import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../page-header/page-header.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PrivacyComponent } from './privacy.component';
import { TermsComponent } from './terms.component';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    PagesRoutingModule
  ],
  declarations: [PrivacyComponent, TermsComponent]
})
export class PagesModule { }
