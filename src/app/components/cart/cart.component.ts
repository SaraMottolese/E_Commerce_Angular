import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Product } from 'src/app/interface/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    constructor(private cartSrv: ServiceService) {}
    cartItems!: Product[];


    ngOnInit(): void {
        this.getCartItems();
    }

    getCartItems() {
        this.cartItems = this.cartSrv.cart;
        console.log(this.cartItems);
    }

    selectedItem(id: number) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id == id) {
                return this.cartItems[i];
            }
        }
        return null;
    }

    deleteFromCart(i:number){
        this.cartItems.splice(i,1);
        this.cartSrv.deleteFromCart
        console.log(this.cartItems);
        this.getCartItems
    }

    total(){
        let total=0;
        this.cartItems.forEach((elements)=>{
            total+= elements.price
        });
        return total;
    }

    submit(){
        this.cartItems=[];
        alert('Il tuo ordine è stato completato con successo')
    }
}
