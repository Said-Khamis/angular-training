import { Component } from '@angular/core';
import { AppLayout } from "../../app-layout/app-layout";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/counter.action';
import { AsyncPipe } from '@angular/common';
import { AppState, Counter, selectNumberCounting, selectorCounting } from '../../model/counter';

@Component({
  selector: 'app-office-users',
  imports: [AppLayout, AsyncPipe],
  templateUrl: './office-users.html',
  styleUrl: './office-users.scss'
})
export class OfficeUsers {

   count$: Observable<Counter>;

   office_users: any[] = [
    { id: 1 , "name": "Said Khamis" , "email": "saidhamic@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 2 , "name": "Fredreick Abisayi" , "email": "abidayi@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 3 , "name": "Mukhusin Siraji" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
   ];

  constructor(private store: Store<Counter>) {
    //this.count$ = this.store.select('count');
    this.count$ = this.store.select(selectorCounting);
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    // TODO: Dispatch an increment action
    console.log('Clicked : Increment');
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
