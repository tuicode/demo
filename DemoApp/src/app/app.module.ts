import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS,HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, XHRBackend } from '@angular/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';
import {CustomHttpInterceptor} from './components/shared/interceptors/headerInterceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './configs/config.service';

import {ProductService} from './services/product.service';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component,
    HomeComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {  provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true},
    ConfigService,
    ProductService,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
