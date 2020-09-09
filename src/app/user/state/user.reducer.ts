import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as userActions from './user.actions'

export interface UserState {
    maskUserName: boolean;
}

const initialState: UserState = {
    maskUserName: true,
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const userReducer = createReducer(
    initialState,
    on(userActions.maskUserName, state => {
        console.log("original state", JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);