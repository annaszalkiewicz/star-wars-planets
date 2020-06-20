import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getInitialData } from './store/planets.actions';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit {
  planets$: Observable<{}>;

  constructor(private store: Store<{ planets: {} }>) {
    this.planets$ = this.store.select(state => state.planets);
  }

  ngOnInit(): void {
    this.getPlanets();    
  }

  getPlanets() {
    this.store.dispatch(getInitialData());
  }
}
