import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {

  constructor() { }

  convertCurrency(amount,currency){

    return Observable.create(function(observer) {
      if(currency.id==1)
          observer.next(amount*0.014);
    else if(currency.id==2)
        observer.next(amount*0.75);      
    else if(currency.id==3)
        observer.next(amount*1.3);
    else
        observer.next(0);    
      observer.complete();
    });
        
  }

}
