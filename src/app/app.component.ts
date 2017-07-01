import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {NumberUtilsService} from './number-utils.service';
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {Subject} from 'rxjs/Subject';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable()
export class AppComponent {
  bits = '';
  startDate = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  constructor(private numberUtils: NumberUtilsService) {
  }

  beforeMonthViewRender({body}: {body: CalendarMonthViewDay[]}): void {
    body.forEach((day) => {
      const date1 = moment(day.date).startOf('day');
      const date2 = moment(this.startDate).startOf('day');
      const dayDiff = date1.diff(date2, 'days');
      const char = this.bits.charAt(dayDiff);
      if (char === '1') {
        day.cssClass = 'active-cell';
      }
    });
  }

  updateBits(bits: string) {
    if (this.numberUtils.isBitsNumber(bits)) {
      this.bits = bits;
      this.refresh.next();
    }
  }

  updateHex(hex: string) {
    if (this.numberUtils.isHexNumber(hex)) {
      this.bits = this.numberUtils.hexToBits(hex);
      this.refresh.next();
    }
  }

}
