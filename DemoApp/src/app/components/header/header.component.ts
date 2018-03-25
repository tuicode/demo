import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: any[];
  currentLang: string;
  constructor(
    private translateService: TranslateService
  ) { 
    this.currentLang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.loadMenus();
  }

  changeLanguage(event){
    let language  = event.target.value;
    if(!language) language = 'en'
       this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  private loadMenus(): void {
    this.translateService.get(['home', 'home'], {}).subscribe((texts: any) => {
      this.menuItems = [
        {link: '/', name: texts['home']},
        {link: '/customer', name: texts['customer']},
        {link: '/product', name: texts['product']}
      ];
    });
  }

}
