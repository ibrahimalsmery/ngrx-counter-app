import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState {
  counter: number,
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  counter$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {

  }
  increment() {
    this.store.dispatch({ type: "increment" });
  }
  decrement() {
    this.store.dispatch({ type: "decrement" });
  }

}
