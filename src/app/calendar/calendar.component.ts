import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment/moment';
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-calendar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  @Input()  bits: string;

  startDate = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
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

}
