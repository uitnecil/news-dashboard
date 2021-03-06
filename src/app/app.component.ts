import { Component, Inject } from '@angular/core';
import { resourcesUiPath } from './app.injectables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(resourcesUiPath) public resUiPath: string) {}
}
