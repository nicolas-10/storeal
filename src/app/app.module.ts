import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryApiService } from './services/in-memory-api.service';
import { ProductService } from './services/product.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({apiKey:'AIzaSyC8UqvV1W1NSc_4Vf2ciKrItEMRXYPJkeQ'}),
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService,{dataEncapsulation:false})
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
