import { Component } from '@angular/core';
import { CurrencyService } from './common/services/currency.service';
import { Currency } from './common/model/currency.interface';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  
  result;
  
  constructor(){}

  getResult($event){
      this.result=$event.USD;        
  }

 


}
