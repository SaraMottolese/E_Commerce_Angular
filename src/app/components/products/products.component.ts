import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    items: Product[] | any = [];
    id!: number;
    sub!: Subscription;

    constructor(
        private router: ActivatedRoute,
        private itemsSrv: ServiceService
    ) {}

    ngOnInit(): void {
       this.showDetails();
    }

    showDetails(){
        this.sub = this.router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(this.id)
           this.itemsSrv.getItemFromId(this.id).subscribe((product) => {
                this.items = product;
            });
        });
    }

    addToCart(id:number){
        this.itemsSrv.getItemFromId(id).subscribe((product) => {
            this.itemsSrv.addToCart(product);
            this.items.push(product)
        });
    }


}
