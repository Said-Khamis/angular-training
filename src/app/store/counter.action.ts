import { createAction, props } from "@ngrx/store";
import { Counter } from "../model/counter";

export const increment = createAction(
    '[Counter Increment] Increment',
    props<{ count: Counter}>
);
export const decrement = createAction('[Counter Decrement] Decrement');
export const reset = createAction('[Counter Rest] Reset');

