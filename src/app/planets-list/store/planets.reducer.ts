import { createReducer, on } from '@ngrx/store';

import { getInitialData, loadedInitialData} from './planets.actions';

export const initialState = {
    loaded: false,
    isLoading: false,
    total: 0
}

const _planetsReducer = createReducer(initialState,
    on(getInitialData, state => {
        return {
            ...state,
        }
    }),
    // on(loadedInitialData, (state, {planets}) => {
    //     return {
    //         ...state,
    //         planets: [...state.planets, planets]
    //     }
    // })
    on(loadedInitialData, (state, planets) => {
        return {
            ...state,
            loaded: true,
            planets
        }
    })
);

export const planetsReducer = (state, action) => {
    return _planetsReducer(state, action);
}
