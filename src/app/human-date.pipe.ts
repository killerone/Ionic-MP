import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'humanDate'
})
export class HumanDatePipe implements PipeTransform {

  transform(value: Date, args?: any): String {
    if (moment(value).diff(moment(new Date()), 'days') < 2) {
      return moment(value).fromNow();
    } else {
      return moment(value).format('MMM Do, YYYY');
    }
  }

}
