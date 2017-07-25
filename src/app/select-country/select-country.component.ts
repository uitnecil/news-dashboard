import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  countries: Array<any>;
  countrySelected: string;


  constructor() { }

  ngOnInit() {
    this.countries = NewsService.COUNTRIES;
    this.countrySelected = this.countries[0].value;
  }

  processChanges(val: string) {
    this.selectedValue.emit(val);
  }

}
