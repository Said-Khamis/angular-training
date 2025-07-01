import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface Counter {
    count: number;
    message: string
}

export interface AppState {
    counting: Counter;
}

// Feature selector: selects the "counting" slice from AppState
//export const selectorCounting = (state: AppState) => state.counting;

export const selectorCounting = createFeatureSelector<Counter>('count');

// Memoized selector: selects the 'count' property from the "counting" slice
export const selectNumberCounting = createSelector(
    selectorCounting,
    (state: Counter) => state.count
);

export const selectCounterMsg = createSelector(
    selectorCounting,
    (state: Counter) => state.message
);
