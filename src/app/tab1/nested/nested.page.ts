import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.page.html',
  styleUrls: ['./nested.page.scss'],
})
export class NestedPage implements OnInit {

  page = 'nested';

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
