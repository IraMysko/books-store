import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  SET_CART_OPEN,
} from "./constants";

export type Cart = {
  id: number;
  count: number;
};

export type CartReducer = {
  cart: Cart[];
  isOpen: boolean;
};

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: number;
};

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: number;
};

export type QTY = {
  type: typeof ADJUST_QUANTITY;
  payload: {
    id: number;
    count: any;
  };
};

export type VisibleCart = {
  type: typeof SET_CART_OPEN;
  payload: boolean;
};

export type ActionCartTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | QTY
  | VisibleCart;
