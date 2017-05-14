import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StratPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-strat-page',
  templateUrl: 'strat-page.html',
})
export class StratPage {
 slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/j.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/d.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/m.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    storage.ready().then(() => {

       // set a key/value
      //  storage.set('run', '0');
       // Or to get a key/value pair
    storage.get('run').then((val) => {
        // storage.set('run', 0);

       if (val > 0) {
          // alert(val);

        var navOptions = {
              animate : true,
              animation: 'ios-transition',
              duration : 1
        };
        navCtrl.push(TabsPage, null, navOptions);
        }
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StratPage');
  }

  nextPage() {
    this.navCtrl.push(TabsPage);
  }

  do() {
    this.storage.get('a').then((val) => {
          alert(val);
       })
  }

  doo () {
      this.storage.set('run', 1);
      this.nextPage();
  }
}
