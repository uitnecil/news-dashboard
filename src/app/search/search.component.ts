import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';


@Component({
  selector: 'app-search',
  template: `
    <md-input-container class="set-width">
      <input #inputValue mdInput color="accent" placeholder="Search for Provider" style="width: 100%;">
      <md-hint align="start" style="color: gray"><strong>case insensitive</strong></md-hint>
    </md-input-container>

  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchString: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((ev: any) => ev.target.value)
      // .filter( (query: string) => query.length > 1 )
      .debounceTime(250)
      .subscribe(v => {
        this.searchString.emit(v);
      });
  }
}
