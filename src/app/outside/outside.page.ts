import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.page.html',
  styleUrls: ['./outside.page.scss'],
})
export class OutsidePage implements OnInit {

  page = 'outside';

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
