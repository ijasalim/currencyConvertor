import { Component } from '@angular/core';
import { CurrencyService } from './currency-convertor/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  result;
  constructor(private currencyService:CurrencyService){}

  convertCurrency($event){

    this.getRate($event);
    
    setInterval(()=>{
      this.getRate($event);
    },10000);
        
  }

  getRate($event){
    this.currencyService.convertCurrency($event['amount'],$event['currency']).subscribe(response=>{ 
      this.result =  response;
    });
  }

}
