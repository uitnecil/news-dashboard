import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>() ;
  languages: Array<any>;
  languageSelected: string;

  constructor() { }

  ngOnInit() {
    this.languages = NewsService.LANGUAGES;
    this.languageSelected = this.languages[0].value;
  }

  processChanges(val: string) {
      this.selectedValue.emit(val);
  }

}
