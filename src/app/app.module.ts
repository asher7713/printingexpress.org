import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ArtworkModule } from './artwork/artwork.module';
import { PagesModule } from './pages/pages.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderModule } from './page-header/page-header.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const WINDOW_PROVIDER: ValueProvider = {
    provide: 'Window',
    useValue: window
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TopBarComponent
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
    providers: [
        WINDOW_PROVIDER
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
