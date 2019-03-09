import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyConvertorModule } from './currency-convertor/currency-convertor.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyConvertorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
