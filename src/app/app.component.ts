import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE0222B-progetto-settimana11';

  constructor(private countSrv:ServiceService){

  }

  //implements cart counter
  cartCounter(){
      return this.countSrv.addToCart;
  }
}
