import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';


const routes: Route[]=[
    {
       path:'',
       component: HomeComponent
    },
    {
       path:'products/:id',
       component: ProductsComponent
    },
    {
       path:'cart',
       component: CartComponent
    }
 ]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
