import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Messages provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Messages {

  constructor(public http: Http) {
    console.log('Hello Messages Provider');
  }

  getAll(){
    return this.http.get('http://z-api.mugavribot.esy.es/Messages/getAll.php');
  }

  addMassage(imgUrl : string, title: string, text: string, location: string, date : string) {

      var url = 'http://z-api.mugavribot.esy.es/Messages/add.php';
      url += '?imgUrl=' + imgUrl;
      url += '&title=' + title;
      url += '&text=' + text;
      url += '&location=' + location;
      url += '&date=' + date;

      console.log(url);
      return this.http.get(url);
  }

}
