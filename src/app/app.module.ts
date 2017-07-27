import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { AllProvidersComponent } from './all-providers/all-providers.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { Injectable_providers } from './app.injectables';
import { SearchComponent } from './search/search.component';
import { FilteredResultPipe } from './filtered-result.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MD_PLACEHOLDER_GLOBAL_OPTIONS, MdButtonModule, MdCheckboxModule, MdIconModule,
  MdProgressSpinnerModule
} from '@angular/material';
import {MdToolbarModule, MdCardModule, MdInputModule, MdSelectModule, MdProgressBarModule, MdTooltipModule} from '@angular/material';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { SortByComponent } from './sort-by/sort-by.component';

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    AllProvidersComponent,
    NewsDetailComponent,
    SearchComponent,
    FilteredResultPipe,
    SelectLanguageComponent,
    SelectCategoryComponent,
    SelectCountryComponent,
    SortByComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdProgressBarModule,
    MdTooltipModule,
    MdIconModule,
    MdProgressSpinnerModule
  ],
  providers: [
    Injectable_providers,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}
    // {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' }}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
