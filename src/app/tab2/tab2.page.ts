import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  page = 'page two';

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
