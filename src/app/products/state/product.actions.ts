import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ product: Product }>()                                   // parameters, like event args
);
export const clearCurrentProduct = createAction('[Product] Clear Current Product');
export const initCurrentProduct = createAction('[Product] Initialize Current Product');

export const loadProducts = createAction('[Product] Load');
export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);