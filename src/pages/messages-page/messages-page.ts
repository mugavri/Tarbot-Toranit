import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DateTime } from '../../pipes/date-time';
/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages-page',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {
  message : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.message = navParams.get('message');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
