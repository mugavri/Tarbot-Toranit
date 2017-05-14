import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DateTime pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'dateTime',
})
export class DateTime implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    var data = new Date(Number(value));
    return data.toLocaleDateString() + ". בשעה: " + data.toLocaleTimeString().toString();
  }
}
