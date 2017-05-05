import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {NumberUtilsService} from './number-utils.service';
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {Subject} from 'rxjs/Subject';

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
  addCssClass: (day: CalendarMonthViewDay) => void;
  refresh: Subject<any> = new Subject();

  constructor(private numberUtils: NumberUtilsService) {
    this.addCssClass = (day: CalendarMonthViewDay): void => {
      let dayDiff = (day.date.getTime() - this.startDate.getTime()) / 1000 / 60 / 60 / 24;
      let char = this.bits.charAt(dayDiff);
      if (char === '1') {
        day.cssClass = 'active-cell';
      }
    };
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
