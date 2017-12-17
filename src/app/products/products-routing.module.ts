import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { WideFormatComponent } from './wide-format/wide-format.component';
import { SpecialtyPrintingComponent } from './specialty-printing/specialty-printing.component';
import { BinderyComponent } from './bindery/bindery.component';

const productsRoutes: Routes = [{
    path: 'products',
    children: [
        { path: '', redirectTo: 'index', pathMatch: 'prefix' },
        { path: 'index', component: ProductsComponent },
        { path: 'photographs', component: PhotographsComponent },
        { path: 'wide-format', component: WideFormatComponent },
        { path: 'specialty-printing', component: SpecialtyPrintingComponent },
        { path: 'bindery-and-finishing', component: BinderyComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }
