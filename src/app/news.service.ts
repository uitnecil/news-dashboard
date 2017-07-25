import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { isArray } from 'util';
import { Router } from '@angular/router';


@Injectable()
export class NewsService {

  // API LINK: https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=82a27151fcf94d3dbc4f9a88077ea526

  // static newsProviders = [
  //   { provider: 'abc-news-au', image: 'abc-news-au.png' },
  //   { provider: 'ars-technica', image: 'ars-technica.png' },
  //   { provider: 'al-jazeera-english', image: 'al-jazeera-english.png' },
  //   { provider: 'associated-press', image: 'associated-press.png' },
  //   { provider: 'bbc-news', image: 'bbc-news.png' },
  //   { provider: 'bbc-sport', image: 'bbc-sport.png' },
  //   { provider: 'bild', image: 'bild.png' },
  //   { provider: 'bloomberg', image: 'bloomberg.png' },
  //   { provider: 'breitbart-news', image: 'breitbart-news.png' },
  //   { provider: 'business-insider-uk', image: 'business-insider-uk.png' },
  //   { provider: 'business-insider', image: 'business-insider.png' },
  //   { provider: 'buzzfeed', image: 'buzzfeed.png' },
  //   { provider: 'cnbc', image: 'cnbc.png' },
  //   { provider: 'cnn', image: 'cnn.png' },
  //   { provider: 'daily-mail', image: 'daily-mail.png' },
  //   { provider: 'der-tagesspiegel', image: 'der-tagesspiegel.png' },
  //   { provider: 'die-zeit', image: 'die-zeit.png' },
  //   { provider: 'engadget', image: 'engadget.png' },
  //   { provider: 'entertainment-weekly', image: 'entertainment-weekly.png' },
  //   { provider: 'espn', image: 'espn.png' },
  //   { provider: 'espn-cric-info', image: 'espn-cric-info.png' },
  //   { provider: 'financial-times', image: 'financial-times.png' },
  //   { provider: 'focus', image: 'focus.png' },
  //   { provider: 'footbal-italia', image: 'footbal-italia.png' },
  //   { provider: 'fortune', image: 'fortune.png' },
  //   { provider: 'four-four-two', image: 'four-four-two.png' },
  //   { provider: 'fox-sports', image: 'fox-sports.png' },
  //   { provider: 'google-news', image: 'google-news.png' },
  //   { provider: 'gruenderszene', image: 'gruenderszene.png' },
  //   { provider: 'hackernews', image: 'hackernews.ico' },
  //   { provider: 'handelsblatt', params: [], image: 'handelsblatt.png' },
  //   { provider: 'ign', image: 'ign.png' },
  //   { provider: 'independent', image: 'independent.png' },
  //   { provider: 'mashable', image: 'mashable.png' },
  //   { provider: 'metro', image: 'metro.png' },
  //   { provider: 'mirror', image: 'mirror.png' },
  //   { provider: 'mtv-news', image: 'mtv-news.png' },
  //   { provider: 'mtv-news-uk', image: 'mtv-news-uk.png' },
  //   { provider: 'national-geographic', image: 'national-geographic.png' },
  //   { provider: 'new-scientist', image: 'new-scientist.png' },
  //   { provider: 'newsweek', image: 'newsweek.png' },
  //   { provider: 'new-york-magazine', image: 'new-york-magazine.png' },
  //   { provider: 'nfl-news', image: 'nfl-news.png' },
  //   { provider: 'polygon', image: 'polygon.png' },
  //   { provider: 'recode', image: 'recode.png' },
  //   { provider: 'reddit-r-all', image: 'reddit-r-all.png' },
  //   { provider: 'reuters', image: 'reuters.png' },
  //   { provider: 'spiegel-online', image: 'spiegel-online.png' },
  //   { provider: 't3n', image: 't3n.png' },
  //   { provider: 'talksport', image: 'talksport.png' },
  //   { provider: 'techcrunch', image: 'techcrunch.png' },
  //   { provider: 'techradar', image: 'techradar.png' },
  //   { provider: 'the-economist', image: 'the-economist.png' },
  //   { provider: 'the-guardian-au', image: 'the-guardian-au.png' },
  //   { provider: 'the-guardian-uk', image: 'the-guardian-uk.png' },
  //   { provider: 'the-hindu', image: 'the-hindu.png' },
  //   { provider: 'the-huffington-post', image: 'the-huffington-post.png' },
  //   { provider: 'the-lad-bible', image: 'the-lad-bible.png' },
  //   { provider: 'the-new-york-times', image: 'the-new-york-times.png' },
  //   { provider: 'the-next-web', image: 'the-next-web.png' },
  //   { provider: 'the-sport-bible', image: 'the-sport-bible.png' },
  //   { provider: 'the-telegraph', image: 'the-telegraph.png' },
  //   { provider: 'the-times-of-india', image: 'the-times-of-india.png' },
  //   { provider: 'the-verge', image: 'the-verge.png' },
  //   { provider: 'the-wall-street-jurnal', image: 'the-wall-street-jurnal.png' },
  //   { provider: 'the-washington-post', image: 'the-washington-post.ico' },
  //   { provider: 'time', image: 'time.png' },
  //   { provider: 'usa-today', image: 'usa-today.png' },
  //   { provider: 'wired-de', image: 'wired-de.png' },
  //   { provider: 'wirtschafts-woche', image: 'wirtschafts-woche.ico' }
  //   // grabbed from https://newsapi.org/sources
  // ];
  // static NEWSPROVIDERS = [
  //   { provider: 'abc-news-au', image: 'abc-news-au.png' },
  //   { provider: 'ars-technica', image: 'ars-technica.png' },
  //   { provider: 'al-jazeera-english', image: 'al-jazeera-english.png' },
  //   { provider: 'associated-press', image: 'associated-press.png' },
  //   { provider: 'bbc-news', image: 'bbc-news.png' },
  //   { provider: 'bbc-sport', image: 'bbc-sport.png' },
  //   { provider: 'bild', image: 'bild.png' },
  //   { provider: 'bloomberg', image: 'bloomberg.png' },
  //   { provider: 'breitbart-news', image: 'breitbart-news.png' },
  //   { provider: 'business-insider-uk', image: 'business-insider-uk.png' },
  //   { provider: 'business-insider', image: 'business-insider.png' },
  //   { provider: 'buzzfeed', image: 'buzzfeed.png' },
  //   { provider: 'cnbc', image: 'cnbc.png' },
  //   { provider: 'cnn', image: 'cnn.png' },
  //   { provider: 'daily-mail', image: 'daily-mail.png' },
  //   { provider: 'der-tagesspiegel', params: ['sortBy=latest'] , image: 'der-tagesspiegel.png' },
  //   { provider: 'die-zeit', params: ['sortBy=latest'], image: 'die-zeit.png' },
  //   { provider: 'engadget', image: 'engadget.png' },
  //   { provider: 'entertainment-weekly', image: 'entertainment-weekly.png' },
  //   { provider: 'espn', image: 'espn.png' },
  //   { provider: 'espn-cric-info', image: 'espn-cric-info.png' },
  //   { provider: 'financial-times', image: 'financial-times.png' },
  //   { provider: 'focus', image: 'focus.png' },
  //   { provider: 'football-italia', image: 'football-italia.png' },
  //   { provider: 'fortune', image: 'fortune.png' },
  //   { provider: 'four-four-two', image: 'four-four-two.png' },
  //   { provider: 'fox-sports', image: 'fox-sports.png' },
  //   { provider: 'google-news', image: 'google-news.png' },
  //   { provider: 'gruenderszene', image: 'gruenderszene.png' },
  //   { provider: 'hacker-news', image: 'hackernews.ico' },
  //   { provider: 'handelsblatt', params: [], image: 'handelsblatt.png' },
  //   { provider: 'ign', image: 'ign.png' },
  //   { provider: 'independent', image: 'independent.png' },
  //   { provider: 'mashable', image: 'mashable.png' },
  //   { provider: 'metro', image: 'metro.png' },
  //   { provider: 'mirror', image: 'mirror.png' },
  //   { provider: 'mtv-news', image: 'mtv-news.png' },
  //   { provider: 'mtv-news-uk', image: 'mtv-news-uk.png' },
  //   { provider: 'national-geographic', image: 'national-geographic.png' },
  //   { provider: 'new-scientist', image: 'new-scientist.png' },
  //   { provider: 'newsweek', image: 'newsweek.png' },
  //   { provider: 'new-york-magazine', image: 'new-york-magazine.png' },
  //   { provider: 'nfl-news', image: 'nfl-news.png' },
  //   { provider: 'polygon', image: 'polygon.png' },
  //   { provider: 'recode', image: 'recode.png' },
  //   { provider: 'reddit-r-all', image: 'reddit-r-all.png' },
  //   { provider: 'reuters', image: 'reuters.png' },
  //   { provider: 'spiegel-online', image: 'spiegel-online.png' },
  //   { provider: 't3n', image: 't3n.png' },
  //   { provider: 'talksport', image: 'talksport.png' },
  //   { provider: 'techcrunch', image: 'techcrunch.png' },
  //   { provider: 'techradar', image: 'techradar.png' },
  //   { provider: 'the-economist', image: 'the-economist.png' },
  //   { provider: 'the-guardian-au', image: 'the-guardian-au.png' },
  //   { provider: 'the-guardian-uk', image: 'the-guardian-uk.png' },
  //   { provider: 'the-hindu', image: 'the-hindu.png' },
  //   { provider: 'the-huffington-post', image: 'the-huffington-post.png' },
  //   { provider: 'the-lad-bible', image: 'the-lad-bible.png' },
  //   { provider: 'the-new-york-times', image: 'the-new-york-times.png' },
  //   { provider: 'the-next-web', params:['sortBy=latest'], image: 'the-next-web.png' },
  //   { provider: 'the-sport-bible', image: 'the-sport-bible.png' },
  //   { provider: 'the-telegraph', image: 'the-telegraph.png' },
  //   { provider: 'the-times-of-india', image: 'the-times-of-india.png' },
  //   { provider: 'the-verge', image: 'the-verge.png' },
  //   { provider: 'the-wall-street-journal', image: 'the-wall-street-journal.png' },
  //   { provider: 'the-washington-post', image: 'the-washington-post.ico' },
  //   { provider: 'time', image: 'time.png' },
  //   { provider: 'usa-today', image: 'usa-today.png' },
  //   { provider: 'wired-de', image: 'wired-de.png' },
  //   { provider: 'wirtschafts-woche', params:['sortBy=latest'], image: 'wirtschafts-woche.ico' }
  // ];
  static NEWSPROVIDERS = [
    ['abc-news-au', 'abc-news-au.png'],
    ['ars-technica', 'ars-technica.png'],
    ['al-jazeera-english', 'al-jazeera-english.png'],
    ['associated-press', 'associated-press.png'],
    ['bbc-news', 'bbc-news.png'],
    ['bbc-sport', 'bbc-sport.png'],
    ['bild', 'bild.png'],
    ['bloomberg', 'bloomberg.png'],
    ['breitbart-news', 'breitbart-news.png'],
    ['business-insider-uk', 'business-insider-uk.png'],
    ['business-insider', 'business-insider.png'],
    ['buzzfeed', 'buzzfeed.png'],
    ['cnbc', 'cnbc.png'],
    ['cnn', 'cnn.png'],
    ['daily-mail', 'daily-mail.png'],
    ['der-tagesspiegel', 'der-tagesspiegel.png'],
    ['die-zeit', 'die-zeit.png'],
    ['engadget', 'engadget.png'],
    ['entertainment-weekly', 'entertainment-weekly.png'],
    ['espn', 'espn.png'],
    ['espn-cric-info', 'espn-cric-info.png'],
    ['financial-times', 'financial-times.png'],
    ['focus', 'focus.png'],
    ['football-italia', 'football-italia.png'],
    ['fortune', 'fortune.png'],
    ['four-four-two', 'four-four-two.png'],
    ['fox-sports', 'fox-sports.png'],
    ['google-news', 'google-news.png'],
    ['gruenderszene', 'gruenderszene.png'],
    ['hacker-news', 'hackernews.ico'],
    ['handelsblatt', 'handelsblatt.png'],
    ['ign', 'ign.png'],
    ['independent', 'independent.png'],
    ['mashable', 'mashable.png'],
    ['metro', 'metro.png'],
    ['mirror', 'mirror.png'],
    ['mtv-news', 'mtv-news.png'],
    ['mtv-news-uk', 'mtv-news-uk.png'],
    ['national-geographic', 'national-geographic.png'],
    ['new-scientist', 'new-scientist.png'],
    ['newsweek', 'newsweek.png'],
    ['new-york-magazine', 'new-york-magazine.png'],
    ['nfl-news', 'nfl-news.png'],
    ['polygon', 'polygon.png'],
    ['recode', 'recode.png'],
    ['reddit-r-all', 'reddit-r-all.png'],
    ['reuters', 'reuters.png'],
    ['spiegel-online', 'spiegel-online.png'],
    ['t3n', 't3n.png'],
    ['talksport', 'talksport.png'],
    ['techcrunch', 'techcrunch.png'],
    ['techradar', 'techradar.png'],
    ['the-economist', 'the-economist.png'],
    ['the-guardian-au', 'the-guardian-au.png'],
    ['the-guardian-uk', 'the-guardian-uk.png'],
    ['the-hindu', 'the-hindu.png'],
    ['the-huffington-post', 'the-huffington-post.png'],
    ['the-lad-bible', 'the-lad-bible.png'],
    ['the-new-york-times', 'the-new-york-times.png'],
    ['the-next-web', 'the-next-web.png'],
    ['the-sport-bible', 'the-sport-bible.png'],
    ['the-telegraph', 'the-telegraph.png'],
    ['the-times-of-india', 'the-times-of-india.png'],
    ['the-verge', 'the-verge.png'],
    ['the-wall-street-journal', 'the-wall-street-journal.png'],
    ['the-washington-post', 'the-washington-post.ico'],
    ['time', 'time.png'],
    ['usa-today', 'usa-today.png'],
    ['wired-de', 'wired-de.png'],
    ['wirtschafts-woche', 'wirtschafts-woche.ico']
  ];
  static LANGUAGES = [
    { value: 'all', viewValue: 'All' },
    { value: 'en', viewValue: 'English' },
    { value: 'de', viewValue: 'German' },
    { value: 'fr', viewValue: 'French' }
  ];

  static CATEGORIES = [
    { value: 'all', viewValue: 'All' },
    { value: 'business', viewValue: 'Business' },
    { value: 'entertainment', viewValue: 'Entertainment' },
    { value: 'gaming', viewValue: 'Gaming' },
    { value: 'general', viewValue: 'General' },
    { value: 'music', viewValue: 'Music' },
    { value: 'politics', viewValue: 'Politics' },
    { value: 'science-and-nature', viewValue: 'Science and nature' },
    { value: 'sport', viewValue: 'Sport' },
    { value: 'technology', viewValue: 'Technology' }];

  static COUNTRIES = [
    { value: 'all', viewValue: 'All' },
    { value: 'us', viewValue: 'United States' },
    { value: 'au', viewValue: 'Australia' },
    { value: 'de', viewValue: 'Germany' },
    { value: 'gb', viewValue: 'Great Britain' },
    { value: 'in', viewValue: 'India' },
    { value: 'it', viewValue: 'Italy' }
  ];

  static apiToken = '82a27151fcf94d3dbc4f9a88077ea526';
  static apiLink = 'https://newsapi.org/v1';

  currentProvider: any = null;
  providers: Array<any>;
  providTemp: Array<any> = NewsService.NEWSPROVIDERS;
  defaultProviders: Map<{}, {}> = new Map(this.providTemp);


  constructor(private http: Http, private router: Router) {
  }

  query(selectedProvider: any, sortByIncomingValue: string | null): Observable<any> {
    const params_array = [
      `source=${selectedProvider}`,
      `apiKey=${NewsService.apiToken}`
    ];

    const temp = this.findProvider(selectedProvider);
    this.currentProvider = isArray(temp) ? temp[0] : temp;

    let sortBy: string | null;
    if (!sortByIncomingValue) {
      // if the sortByIncomingValue is not mentioned try to retrieve the default one from the possible sort types
      sortBy = this.grabDefaultSortByType();
    } else {
      sortBy = `sortBy=${sortByIncomingValue}`;
    }
    if (sortBy) {
      params_array.splice(1, 0, sortBy);
    }
    const params = params_array.join('&');
    const queryApi = `${NewsService.apiLink}/articles?${params}`;
    return this.http.request(queryApi)
      .map((res: any) => res.json());
  }

  getProviders(params: Array<any>) {
    // console.log(params);
    const parameters: string = (params.length) ? `?${params.join('&')}` : '';
    const providersEndpointDiff = '/sources';
    const queryApiLink = `${NewsService.apiLink}${providersEndpointDiff}${parameters}`;
    // console.log(queryApiLink);

    return this.http.request(queryApiLink)
      .map((res: any) => res.json())
      .subscribe((res: any) => this.parseProviders(res));
  }

  parseProviders(res: any) {
    if (res && (res.status === 'ok')) {
      this.providers = res.sources;
    }
    this.providers.map((prov: any) => {
      if (this.defaultProviders.has(prov.id) && (prov.urlsToLogos !== '') && (this.defaultProviders.get(prov.id) !== '')) {
        prov.image = this.defaultProviders.get(prov.id);
      }
      return prov;
    });

    // store the providers to local storage in case the page is refreshed
    try {
      localStorage.setItem('providers', JSON.stringify(this.providers));
    } catch (err) {
      console.log(`Error storing into local storage...`);
    }
  }

  findProvider(providerName: string) {
    if (!this.providers) {

      // retrieve it from local storage.
      this.providers = JSON.parse(localStorage.getItem('providers'));

      // If still empty navigate to root app
      if (!this.providers) {
        this.router.navigate(['/']);
        return [];
      }

    }
    return this.providers.filter((prov: any) => prov.id === providerName)
      .map((prov: any) => {
        if (this.defaultProviders.has(prov.id) && (prov.urlsToLogos !== '') && (this.defaultProviders.get(prov.id) !== '')) {
          prov.image = this.defaultProviders.get(prov.id);
        }
        return prov;
      });
  }

  getCurrentProvider(): Object {
    return this.currentProvider;
  }

  grabDefaultSortByType(): any {
    let sortBy: any;
    sortBy = null;
    if (this.currentProvider && this.currentProvider.sortBysAvailable && this.currentProvider.sortBysAvailable.length > 0) {
      sortBy = `sortBy=${this.currentProvider.sortBysAvailable[0]}`;
    }
    return sortBy;
  }
}

