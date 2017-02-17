import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtworkRoutingModule } from './artwork-routing.module';
import { PageHeaderModule } from '../page-header/page-header.module';

import { GuideComponent } from './guide/guide.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  imports: [
    CommonModule,
    ArtworkRoutingModule,
    PageHeaderModule
  ],
  declarations: [GuideComponent, RequirementsComponent, TemplatesComponent]
})
export class ArtworkModule { }
