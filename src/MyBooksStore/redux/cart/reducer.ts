import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, SET_CART_OPEN } from './constants';
import { CartReducer, ActionCartTypes } from './types';

const initialStateCart: CartReducer = {
    cart: [],
    // cart: [{ id: 1, count: 1 }, { id: 2, count: 1 }],
    isOpen: false,
}

export const cartReducer = (state = initialStateCart, action: ActionCartTypes): CartReducer => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { id: action.payload, count: 1 }],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(({ id }) => id !== action.payload)
            }
        case ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, count: action.payload.count };
                    } else {
                        return item;
                    }
                })
            }
        case SET_CART_OPEN:
            return {
                ...state,
                isOpen: action.payload,
            }
        default:
            return state;
    }
}