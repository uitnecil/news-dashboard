import { Routes } from '@angular/router';
import { AllProvidersComponent } from './all-providers/all-providers.component';
import { AllNewsComponent } from './all-news/all-news.component';

export const routes: Routes = [
  {path: '', redirectTo: 'providers', pathMatch: 'full'},
  {path: 'providers', component: AllProvidersComponent},
  {path: 'news/:provider', component: AllNewsComponent},
  {path: '**', redirectTo: 'providers'}
];
