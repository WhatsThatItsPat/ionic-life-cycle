import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  page = 'page one';

  counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.counterSubject;

  constructor() {}

  ngOnInit() {
    console.log(`${this.page} ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${this.page} ngOnDestroy`);
  }

  ionViewWillEnter() {
    this.counterSubject.next(this.counterSubject.value + 1);
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
