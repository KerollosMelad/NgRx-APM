import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from './../../state/app.state'

export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: 5,
    products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) =>
        state.products.find(p => p.id === currentProductId)
);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
        console.log("original state", JSON.stringify(state))
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
);