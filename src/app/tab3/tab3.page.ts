import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  page = 'page three';

  constructor() {}

  ngOnInit() {
    console.log(`${this.page} ngOnInit`);
  }

  ionViewWillEnter() {
    console.log(`${this.page} ionViewWillEnter`);
  }

  ionViewDidEnter() {
    console.log(`${this.page} ionViewDidEnter`);
  }

  ionViewWillLeave() {
    console.log(`${this.page} ionViewWillLeave`);
  }

  ionViewDidLeave() {
    console.log(`${this.page} ionViewDidLeave`);
  }

}
