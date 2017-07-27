import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit, AfterViewInit {
  @Input() article: any;
  @ViewChild('theimg') private theimg: ElementRef;
  isImageLoading = true;

  constructor() {
  }

  ngOnInit() {
    // this.isImageLoading = true;
  }

  stopLoad(): void {
    this.isImageLoading = false;
  }

  ngAfterViewInit() {

    // this replaces the (load) event on the img from the template
/*    Observable.fromEvent(this.theimg.nativeElement, 'load')
      .subscribe(_ => {
          this.stopLoad();
        },
        (err: any) => {
          this.stopLoad();
          console.log(err);
        },
        () => {
          this.stopLoad();
        });*/
  }
}
