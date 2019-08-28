
import {NgModule} from '@angular/core';
import {CurrencyFormatPipe} from './pipe/currency-format.pipe';
import { JsonFormatPipe } from './pipe/json-format.pipe';

@NgModule({
  declarations: [
    CurrencyFormatPipe,
    JsonFormatPipe
  ],

  exports: [
    CurrencyFormatPipe,
    JsonFormatPipe
  ]

})
export class PipeModule {
}
