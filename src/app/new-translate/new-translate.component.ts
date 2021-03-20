import {Component, OnInit} from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-translate',
  templateUrl: './new-translate.component.html',
  styleUrls: ['./new-translate.component.scss']
})
export class NewTranslateComponent implements OnInit {

  az = '';
  ru = '';
  en = '';

  constructor(private http: HttpClient) {
    // this.set();
  }

  ngOnInit(): void {

  }

  set(): void {

    // this.translate.setTranslation('en', {TITLE: 'Select date', SELECT: 'Seç'}, true);

    this.http.get('assets/i18n/en.json')
      .subscribe(res => {
        console.log(res);
        // this.translate.get('ADD')
        //   .subscribe(res => {
        //     this.add = res;
        //     console.log(res);
        //   });
        // this.translate.get('TITLE')
        //   .subscribe(res => {
        //     this.title = res;
        //     console.log(res);
        //   });
        // this.translate.get('TEST')
        //   .subscribe(res => {
        //     this.lazy = res;
        //     console.log(res);
        //   });
      });
  }
}
