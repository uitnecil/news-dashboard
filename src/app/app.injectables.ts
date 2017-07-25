


// grabbed from https://newsapi.org/sources
import { NewsService } from './news.service';
import { Injectable } from '@angular/core';
//
// export const NEWSPROVIDERS = [
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
// ];
//
//
// export const InjectableList: Array<any> = [
//   {provide: NewsService , useClass: NewsService },
//   {provide: NEWSPROVIDERS, useValue: NEWSPROVIDERS}
// ];
//

export const resourcesPath = 'assets/icons/';
export const resourcesUiPath = 'assets/ui-icons/';

export const Injectable_providers: Array<any> = [
  {provide: resourcesPath, useValue: resourcesPath},
  {provide: resourcesUiPath, useValue: resourcesUiPath},
  {provide: NewsService , useClass: NewsService }

];

