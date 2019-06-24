import { Component, NgZone } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private screenOrientation: ScreenOrientation,
    private ngzone: NgZone,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // let status bar overlay webview
      if(this.platform.is('ios'))
        this.statusBar.overlaysWebView(false);
      else
        this.statusBar.overlaysWebView(true);
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#be2222');
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

  info(){
    this.menuCtrl.close();
    // this.ngzone.run(() => this.router.navigate(['/info'])).then();
    this.navCtrl.navigateForward('/info');
    
  }

  home(){
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/tabs/home');

    // this.router.navigate(['/tabs/home'])
  }

  order(){
    this.menuCtrl.close();
    // this.ngzone.run(() => this.router.navigate(['/past-orders'])).then();
    // this.router.navigate(['/past-orders'])
    this.navCtrl.navigateForward('/past-orders');
  }

  about(){
    this.menuCtrl.close();
    // this.ngzone.run(() => this.router.navigate(['/about-us'])).then();
    this.navCtrl.navigateForward('/about-us');
    // this.router.navigate(['/about-us'])
  }
}
