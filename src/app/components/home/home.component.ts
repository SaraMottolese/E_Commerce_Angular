import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    items: Product[] = [
        {
            name: '',
            description: '',
            price: 0,
            id: 0,
        },
    ];

    sub!: Subscription;

    constructor(private itemsSrv: ServiceService, private router: Router) {}

    ngOnInit(): void {
        //start application do the call
        this.getItems();
    }

    //call to the server
    getItems() {
        this.itemsSrv.getItems().subscribe((ris: Product[]) => {
            this.items = ris;
            console.log(ris);
        });
    }

    //go to items detail page
    itemDetail(id: number) {
        this.router.navigate([`/products/${id}`]);
    }

    //select an item
    selectedItem(id: number) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
        return null;
    }

    //add to cart the item by id
    addToCart(id: number) {
        let addCart: Product | null = this.selectedItem(id);
        if (addCart != null) {
            this.itemsSrv.addToCart(addCart);
        }
    }
}
