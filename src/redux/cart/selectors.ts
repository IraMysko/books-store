import { createSelector, createStructuredSelector } from "reselect";
import { Cart } from "../cart/types";
import { RootState } from "../store";

export const selectCart = (state: RootState): Cart[] => state.cart.cart;

export const selectIsOpenCart = (state: RootState): boolean =>
  state.cart.isOpen;

export const selectCartCount = createSelector(
  selectCart,
  (cart) => cart.length
);

export const selectCartGroup = createStructuredSelector<
  RootState,
  { countCart: number; isOpen: boolean }
>({
  countCart: selectCartCount,
  isOpen: selectIsOpenCart,
});
