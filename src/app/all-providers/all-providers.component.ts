import { Component, Inject, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { resourcesPath } from '../app.injectables';

@Component({
  selector: 'app-all-providers',
  templateUrl: './all-providers.component.html',
  styleUrls: ['./all-providers.component.css']
})
export class AllProvidersComponent implements OnInit {
  iconsSize: Object = { width: 120, height: 120 };
  selectedLanguage: string;
  selectedCountry: string;
  selectedCategory: string;
  searchStr: string;
  loading: boolean; // TODO: make loading work ??

  constructor(@Inject(resourcesPath) private resPath: string,
              public news: NewsService) {
    // console.log(`constructor = this.loading: ${this.loading}`);

    // this.loading = false;
  }

  ngOnInit() {
    this.retrieveProviders();
    // this.loading = false;
    // console.log(`on init = this.loading: ${this.loading}`);
  }

  public retrieveProviders() {
    // this.loading = true;
    // console.log(`retrieveProviders START - this.loading: ${this.loading}`);
    const params: Array<any> = [];
    // if there is a selected language use it
    if (!(this.selectedLanguage === 'all' || !this.selectedLanguage)) {
      params.push(`language=${this.selectedLanguage}`);
    }
    // if there is a selected country use it
    if (!(this.selectedCountry === 'all' || !this.selectedCountry)) {
      params.push(`country=${this.selectedCountry}`);
    }
    // if there is a selected category use it
    if (!(this.selectedCategory === 'all' || !this.selectedCategory)) {
      params.push(`category=${this.selectedCategory}`);
    }
    this.news.getProviders(params);

    // this.loading = false;
    // console.log(`retrieveProviders END - this.loading: ${this.loading}`);
  }


}
