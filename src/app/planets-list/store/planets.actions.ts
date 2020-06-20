import { createAction, props } from '@ngrx/store';

export const GET_INITIAL_DATA = '[PlanetsListComponent] Get Initial Data';
export const LOADED_INITIAL_DATA = '[PlanetsListComponent] Loaded Initial Data';

export const getInitialData = createAction(GET_INITIAL_DATA);

export const loadedInitialData = createAction(
  LOADED_INITIAL_DATA,
  props<{ planets: {} }>()
);
