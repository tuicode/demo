import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {Error404Component} from './components/shared/error404/error404.component';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {CustomerComponent} from './components/customer/customer.component';

const routes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path :'home' , component : HomeComponent},
  {path: '404', component: Error404Component},
  {path : 'product',  component : ProductComponent},
  {path : 'customer', component : CustomerComponent},
  // otherwise redirect to 404
  {path: '**', redirectTo: '/404' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
