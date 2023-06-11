import { Pipe } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe  {

  purchaseDate: number = Date.now();

}
