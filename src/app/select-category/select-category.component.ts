import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit  {
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  categorySelected: string;
  categories: Array<any>;

  constructor() { }

  ngOnInit() {
    this.categories = NewsService.CATEGORIES;
    this.categorySelected = this.categories[0].value;
  }

  processChanges(val: string) {
    this.selectedValue.emit(val);
  }

}
