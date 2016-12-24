import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyComponent } from './privacy.component';
import { TermsComponent } from './terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
