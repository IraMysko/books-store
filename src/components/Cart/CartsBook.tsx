import React from "react";
import Count from "../Count";
import "./cart.css";
import "../Catalogue/catalogue.css";
import useCartBook from "./useCartBook";

interface Props {
  id: number;
  count: number;
}

const CartItem: React.FC<Props> = ({ id, count }) => {
  const {
    book,
    makeHandleDeleteBook,
    handleDecreaseCount,
    handleIncreaseCount,
  } = useCartBook({
    id,
    count,
  });

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
