import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ArtworkModule } from './artwork/artwork.module';
import { PagesModule } from './pages/pages.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderModule } from './page-header/page-header.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        PageHeaderModule,
        ArtworkModule,
        ProductsModule,
        PagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
