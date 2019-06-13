
import {NgModule} from '@angular/core';
import {CurrencyFormatPipe} from './pipe/currency-format.pipe';

@NgModule({
  declarations: [
    CurrencyFormatPipe
  ],

  exports: [
    CurrencyFormatPipe
  ]

})
export class PipeModule {
}
