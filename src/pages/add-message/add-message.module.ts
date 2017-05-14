import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMessage } from './add-message';

@NgModule({
  declarations: [
    AddMessage,
  ],
  imports: [
    IonicPageModule.forChild(AddMessage),
  ],
  exports: [
    AddMessage
  ]
})
export class AddMessageModule {}
