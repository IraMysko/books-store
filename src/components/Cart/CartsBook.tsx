import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeFromCart, setCartCount } from "../../redux/cart/actions";
import { useTypedSelector } from "../../hooks/typeSelector";
import Count from "../Count";
import "./cart.css";
import "../Catalogue/catalogue.css";
import { selectBook } from "../../redux/books/selectors";

interface Props {
  id: number;
  count: number;
}

const CartItem: React.FC<Props> = ({ id, count }) => {
  const dispatch = useDispatch();

  const book = useTypedSelector((state) => selectBook(state, { id }));

  const makeHandleDeleteBook = (id: number) => () => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseCount = useCallback(() => {
    dispatch(setCartCount(id, count + 1));
  }, [dispatch, id, count]);

  const handleDecreaseCount = useCallback(() => {
    dispatch(setCartCount(id, count - 1));
    if (count <= 1) {
      dispatch(removeFromCart(id));
    }
  }, [dispatch, id, count]);

  if (!book) {
    return null;
  }

  const amount = Math.round(count * book.price);

  return (
    <div className="cartsbook-container">
      <div>
        <img className="cartsbook-img" src={book.imgUrl} alt="" />
      </div>
      <div className="cartsbook-info">
        <div>{book.author}</div>
        <div> {book.name}</div>
      </div>
      <Count
        increaseCount={handleIncreaseCount}
        decreaseCount={handleDecreaseCount}
        count={count}
      />
      <div>{amount} $</div>
      <div onClick={makeHandleDeleteBook(id)} className="cartsbook-delete" />
    </div>
  );
};

export default React.memo(CartItem);
