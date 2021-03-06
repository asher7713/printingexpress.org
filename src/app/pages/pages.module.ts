import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../page-header/page-header.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    PagesRoutingModule
  ],
  declarations: [PrivacyComponent, TermsComponent, PageNotFoundComponent]
})
export class PagesModule { }
