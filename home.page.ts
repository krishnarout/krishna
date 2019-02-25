import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  platform: any;
  toastCtrl: any;
  constructor(private sms: SMS) { 

  }


send(){
  this.sms.send("8249921275", "hi")
  // console.log("hi");
  .then(()=>{
    let toast = this.toastCtrl.create({
      message: 'Message send successfully',
      duration: 3000        });
    toast.present();
  },()=>{
    let toast = this.toastCtrl.create({
      message: 'Failure',
      duration: 3000        });
    toast.present();
  });
}


}


