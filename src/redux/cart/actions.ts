import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, SET_CART_OPEN } from './constants';
import { AddToCartAction, RemoveFromCartAction, QTY, VisibleCart } from './types';

export const addToCart = (id: number): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: id,
});

export const removeFromCart = (id: number): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const setCartCount = (id: number, count: number): QTY => ({
    type: ADJUST_QUANTITY,
    payload: {
        id: id,
        count: count,
    }
});

export const setCartVisibility = (isOpen: boolean): VisibleCart => ({
    type: SET_CART_OPEN,
    payload: isOpen,
})
