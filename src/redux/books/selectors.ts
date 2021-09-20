import { createSelector, createStructuredSelector } from "reselect";
import { Book } from "./types";
import { Cart } from "../cart/types";
import { RootState } from "../store";
import { selectCart } from "../cart/selectors";

export const selectBooks = (state: RootState): Book[] => state.books.books;

export const selectGroupCartBooks = createStructuredSelector<
  RootState,
  { cart: Cart[]; books: Book[] }
>({
  cart: selectCart,
  books: selectBooks,
});

export const selectBookFromProps = (
  _state: RootState,
  props: { id: number }
): number => props.id;

export const selectBook = createSelector(
  selectBooks,
  selectBookFromProps,
  (books, id): Book | undefined => books.find((book) => book.id === id)
);
