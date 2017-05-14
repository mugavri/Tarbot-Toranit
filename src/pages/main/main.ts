import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { MessagesPage } from '../messages-page/messages-page';
import { AddMessage } from '../add-message/add-message';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the Main page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
  // providers: [Messages]
})
export class Main {
  // @ViewChild(Slides) slides: Slides;

  messages : any[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams ,public service: Messages , private sms: SMS,  public storage: Storage) {
     this.getAllData();
  }

  
  getAllData() {
    this.service.getAll().subscribe(
      data => this.messages = JSON.parse(data['_body']),
      err => console.log(err)
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Main');
  }

  getInfo(message) {
       this.navCtrl.push(  MessagesPage, {
      message : message 
    });
  }

  addMessage() {
          this.storage.set('run', 0);

    // var navOptions = {
    //   animate : true,
    //         animation: 'ios-transition',
    //         duration : 1
    //     };
    //  this.navCtrl.push(AddMessage,  null, navOptions);
    //     // var options = {
    //     //       replaceLineBreaks: false, // true to replace \n by a new line, false by default
    //     //       android: {
    //     //           intent: 'INTENT'  // send SMS with the native android SMS messaging
    //     //           //intent: '' // send SMS without open any other app
    //     //       }
    //     //   };
    //     // var success = function () { alert('Message sent successfully'); };
    //     // var error = function (e) { alert('Message Failed:' + e); };
    //     // this.sms.send(`972585175178`, `Hello world!`, options, success, error);
    // this.sms.send('972585175178', 'Hello world!').then(()=>{
    //   alert("הצליח");
    // }, err => {
    //   alert("שגיאה" + err);
    // });

  }

 doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getAllData();
      console.log('Async operation has ended');
      refresher.complete();
    }, 800);
  }

}
