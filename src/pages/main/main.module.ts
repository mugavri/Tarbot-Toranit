import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Main } from './main';
import { Messages } from '../../providers/messages';

@NgModule({
  declarations: [
    Main,
  ],
  imports: [
    IonicPageModule.forChild(Main),
  ],
  exports: [
    Main
  ]
})
export class MainModule {}
