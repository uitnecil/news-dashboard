import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../news.service';
import { isArray } from 'util';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  sortByOptions: Array<string> = [];
  fullProvider: any;
  sortTypeSelected: string;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.fullProvider = this.news.getCurrentProvider();
    this.getSortOptions();

    // set sortBy drop-down default value to its first value
    if (isArray(this.sortByOptions)) {
      this.sortTypeSelected = this.sortByOptions[0];
    }
    // console.log(this.sortTypeSelected);
  }

  getSortOptions() {
    // this.sortByOptions = [];
    if (this.fullProvider && this.fullProvider.sortBysAvailable) {
      this.sortByOptions = this.fullProvider.sortBysAvailable;
    }
  }

  processChanges(val: string) {
    this.selectedValue.emit(val);
  }
}
