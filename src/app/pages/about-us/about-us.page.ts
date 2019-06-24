import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private callNumber: CallNumber, private navCtrl: NavController ) { }

  ngOnInit() {
  }

  call(number){
    this.callNumber.callNumber(number, true);
  }

  terms(){
    this.navCtrl.navigateForward('/terms');
  }

  data(){
    this.navCtrl.navigateForward('/impressum');

  }

  imprint(){
    this.navCtrl.navigateForward('/datenschutz');

  }


}
