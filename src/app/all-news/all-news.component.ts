import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { resourcesPath } from '../app.injectables';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  newsProvider: string;
  allNews: Array<any>;
  loading = false;
  fullProvider: any;
  selectedSortBy: any = null;

  constructor(private location: Location,
              private news: NewsService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(resourcesPath) private resPath: string) {
    this.route.params.subscribe((params: any) => {
      this.newsProvider = params['provider'];
      if (!this.isKnownProvider(this.newsProvider)) {
        this.router.navigate(['/']);
      }
    });
  }

  isKnownProvider(provider: string): number {
    const foundProviders = this.news.findProvider(provider);
    return foundProviders.length;
  }

  ngOnInit() {
    this.loading = true;
    this.getNews();
    this.fullProvider = this.news.getCurrentProvider();
  }

  getNews(): void {
    this.news.query(this.newsProvider, this.selectedSortBy)
      // .do(() => this.loading = true })
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.parseResults(res);

        },
        // error case
        (err: any) => {
          console.log(err);
          this.loading = false;
        },
        // completion case
        () => this.loading = false
      );
  }

  parseResults(nws: any): void {
    this.allNews = null;
    if (nws && nws.status === 'ok') {
      this.allNews = nws.articles;
    }
  }

  doLoading(val: boolean) {
    this.loading = val;
  }

  goBack() {
    this.location.back();
  }
}
