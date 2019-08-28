import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat'
})
export class JsonFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.info(value)
    console.info(args)
    return JSON.stringify(value);
  }

}
