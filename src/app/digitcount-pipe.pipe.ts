import { Pipe, PipeTransform } from '@angular/core'; @Pipe({
   name: 'digitcount'
})
export class DigitcountPipePipe implements PipeTransform {
   transform(val : number) : number {
      return val.toString().length;
   }
}