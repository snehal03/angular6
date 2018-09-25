import { Component, OnInit } from "@angular/core";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";



// Range datepicker Start
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;




@Component({
  selector: "app-date-time-picker",
  templateUrl: "./date-time-picker.component.html",
  styleUrls: ["./date-time-picker.component.css"],
  styles:[
  `select.custom-select {
    margin: 0.5rem 0.5rem 0 0;
    width: auto;
  }`
]
})

export class DateTimePickerComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };


  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';


  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct
  dateSelected = '';


  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date,this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDateStruct) {
    return this.fromDate && !this.toDate && this.hoveredDate && after(date,this.fromDate) &&before( date , this.hoveredDate);
  }

  isInside(date: NgbDateStruct) {
    return after( date,this.fromDate) &&before( date,this.toDate);
  }

  isRange(date: NgbDateStruct) {
    return equals( date,this.fromDate) || equals( date,this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
