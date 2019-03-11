import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../model/currency.interface';

@Component({
  selector: 'convertor-widget',
  templateUrl: './converted-value.component.html',
  styleUrls: ['./converted-value.component.css']
})
export class ConvertorWidget implements OnInit {

  @Output('getConvertedAmount') getConvertedAmount = new EventEmitter();
  
  selectedCurrency:Currency;
  currencyList:Array<Currency>;  
  amount;
  status;

  constructor( private currencyService:CurrencyService) { 
    
    this.currencyList = [
      {'id':1, 'name':'INR'},
      {'id':2, 'name':'CAD'},
      {'id':3, 'name':'GBP'}
    ];
  }

  
  ngOnInit() {
  }

  convertCurrency(){

    this.getUSDRate();
    setInterval(()=>{
      this.getUSDRate();
    },10000);
    
  }

  getUSDRate(){
    
    this.currencyService.convertCurrency(this.amount,this.selectedCurrency).subscribe(response=>{
     
        if(response)
          this.getConvertedAmount.emit({'USD':response});
      },
      error =>{
        this.status="Please check Server Connection";
      });
  }
  
}