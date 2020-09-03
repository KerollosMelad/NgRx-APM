import { createReducer, createAction, on } from '@ngrx/store';

export const userReducer = createReducer(
    { maskUserName: true },
    on(createAction('[User] Mask User Name'), state => {
        console.log("original state", JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);