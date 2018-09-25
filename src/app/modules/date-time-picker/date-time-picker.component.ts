import { Component, OnInit } from "@angular/core";
import {
  NgbDateStruct,
  NgbCalendar,
  NgbTimeStruct
} from "@ng-bootstrap/ng-bootstrap";

// Range datepicker Start
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one &&
  two &&
  two.year === one.year &&
  two.month === one.month &&
  two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day < two.day
        : one.month < two.month
      : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day > two.day
        : one.month > two.month
      : one.year > two.year;

@Component({
  selector: "app-date-time-picker",
  templateUrl: "./date-time-picker.component.html",
  styleUrls: ["./date-time-picker.component.css"],
  styles: []
})
export class DateTimePickerComponent implements OnInit {
  /** Date Picker */
  model: NgbDateStruct;
  date: { year: number; month: number };
  /** Date Picker end */

  /** Multiple months Date Picker */
  displayMonths = 2;
  navigation = "select";
  showWeekNumbers = false;
  outsideDays = "visible";
  /** Multiple months Date Picker end */

  /** Range Date Picker */
  dateToggle = false;
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  dateSelected = "";
  time: NgbTimeStruct;
  meridianTime = { hour: 13, minute: 30 };
  meridian = true;
  secondsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  spinnersTime: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  spinners = true;


  /** Range Date Picker */

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    /** Set date  datepicker */
    this.model = {
      day: 15,
      month: 5,
      year: 2018
    };
    /** Set date  datepicker end */

    /** Range Picker set Date */
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(this.calendar.getToday(), "d", 10);
    this.setSelectedDate();
    /** Range Picker set Date End */

    /** Timepicker  set time*/
    this.time =  {
      hour: 13,
      minute: 30,
      second: 0
    }

    /** Timepicker */
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }


  toggleSpinners() {
      this.spinners = !this.spinners;
  }

  setSelectedDate() {
    let fMonth: any = this.fromDate.month;
    if (this.fromDate.month < 10) fMonth = "0" + this.fromDate.month;

    let tMonth: any = this.toDate.month;
    if (this.toDate.month < 10) tMonth = "0" + this.toDate.month;

    let fdate: any = this.fromDate.day;
    if (this.fromDate.day < 10) fdate = "0" + this.fromDate.day;

    let tdate: any = this.toDate.day;
    if (this.toDate.day < 10) tdate = "0" + this.toDate.day;

    this.dateSelected = fMonth + "/" + fdate + "/" + this.fromDate.year;
    this.dateSelected += " To " + tMonth + "/" + tdate + "/" + this.toDate.year;
  }

  /** Range Picker get Date */
  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if (this.fromDate && this.toDate) {
      this.setSelectedDate();
      this.dateToggle = false;
    }
  }

  isHovered(date: NgbDateStruct) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      after(date, this.fromDate) &&
      before(date, this.hoveredDate)
    );
  }

  isInside(date: NgbDateStruct) {
    return after(date, this.fromDate) && before(date, this.toDate);
  }

  isRange(date: NgbDateStruct) {
    return (
      equals(date, this.fromDate) ||
      equals(date, this.toDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
