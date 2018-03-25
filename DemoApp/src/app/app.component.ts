import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Angular 5';
  constructor(private translateService: TranslateService)
  {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
