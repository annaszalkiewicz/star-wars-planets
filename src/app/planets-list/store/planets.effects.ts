import { Injectable } from '@angular/core';
import {
  map,
  switchMap,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlanetsService } from '../planets.service';
import * as PlanetsActions from './planets.actions';

@Injectable()
export class PlanetsEffects {
  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService
  ) {}

  getPlanets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanetsActions.getInitialData),
      switchMap(() => {
        return this.planetsService
          .init()
          .pipe(
            map(
              (planets) =>              
                PlanetsActions.loadedInitialData({ planets: planets.results })
            )
          );
      })
    )
  );
}
