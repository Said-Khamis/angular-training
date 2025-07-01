import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { AppState, Counter } from "../model/counter";

export const initialState: Counter = {
    count: 0,
    message: ""
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({
         ...state,
         count: state.count + 1,
         message: "Incremented"
    })),
    on(decrement , (state) => ({
         ...state,
         count: state.count - 1,
         message: "Deremented"
    })),
    on(reset , (state) =>({
         ...state,
         count: 0,
         message: "Reset"
    }))
)