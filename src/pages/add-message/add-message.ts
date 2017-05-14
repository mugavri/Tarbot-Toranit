import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Messages } from '../../providers/messages';

/**
 * Generated class for the AddMessage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-message',
  templateUrl: 'add-message.html',
})
export class AddMessage {

  message : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Messages) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMessage');
  }

  addMessage() {
    alert("ההודעה נוספה בהצלחה");
    this.service.addMassage('http://www.tvnetil.net/thumb/small_c326beba39f4727255cc4d362c8c5d7b.jpg', 'בדיקה', 'בדיקה של הוספה חדשה ', 'בקפה גו אור יהודה', '1493915838482').subscribe(
      data => this.message = JSON.parse(data['_body']),
      err => console.log(err)
    )
  }
}
