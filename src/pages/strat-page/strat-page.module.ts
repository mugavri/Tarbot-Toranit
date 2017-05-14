import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StratPage } from './strat-page';

@NgModule({
  declarations: [
    StratPage,
  ],
  imports: [
    IonicPageModule.forChild(StratPage),
  ],
  exports: [
    StratPage
  ]
})
export class StratPageModule {}
