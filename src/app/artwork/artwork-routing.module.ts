import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideComponent } from './guide/guide.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TemplatesComponent } from './templates/templates.component';

const artworkRoutes: Routes = [
    {
        path: 'artwork',
        children: [
            {path: '', redirectTo: 'requirements', pathMatch: 'prefix'},
            {path: 'guide', component: GuideComponent},
            {path: 'requirements', component: RequirementsComponent},
            {path: 'templates', component: TemplatesComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(artworkRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ArtworkRoutingModule { }
