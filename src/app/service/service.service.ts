import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';

@Injectable({
    providedIn: 'root',
})
export class ServiceService {
    urlAPI = 'http://localhost:4201/products';
    cart: Product[]=[];

    constructor(private http:HttpClient) {}

    getItems() {
        return this.http.get<Product[]>(this.urlAPI);
    }

    getItemFromId(id:number){
        return this.http.get<Product>(`${this.urlAPI}/${id}`).pipe(catchError(err => {
            return throwError(this.errorMessage(err.status));
          }))
        }

        errorMessage(status: number) {
        let msg = '';
        switch (status) {
            case 404:
                msg = 'Not found';
                break;
            case 500:
                msg = 'Internal server error';
                break;
            default:
                msg = 'Undefined error';
                break;
        }
        return msg;
    }

       //add to cart
   addToCart(item: Product){
    this.cart.push(item);
    console.log('sono nel carrello ',this.cart)
   }

   //delete from cart
   deleteFromCart(i:number){
       this.cart.splice(i,0);
       console.log(this.cart);
   }

}
