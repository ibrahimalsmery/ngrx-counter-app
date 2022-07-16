import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState { counter: number }
@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent implements OnInit {

  counter$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {
  }

}
