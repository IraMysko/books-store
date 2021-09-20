import React from "react";
import { Modal } from "antd";

import CartsBook from "./CartsBook";
import { useTypedSelector } from "../../hooks/typeSelector";
import { selectGroupCartBooks } from "../../redux/books/selectors";

interface Props {
  visible: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
}

const Cart: React.FC<Props> = ({ visible, onOk, onCancel }) => {
  const { cart, books } = useTypedSelector(selectGroupCartBooks);

  const isCartEmpty = !cart.length;

  const allSum = cart.reduce((acc, cartItem) => {
    const book = books.find((book) => book.id === cartItem.id);
    const price = book?.price || 0;
    const sum = Math.round(price * cartItem.count);

    return acc + sum;
  }, 0);

  return (
    <Modal
      title="Basic Modal"
      width={600}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      {isCartEmpty ? (
        <div>your cart is empty</div>
      ) : (
        <div>
          Books in cart:
          {cart.map(({ id, count }) => (
            <CartsBook key={id} id={id} count={count} />
          ))}
          <div>Ваша сумма заказа: {allSum}$</div>
        </div>
      )}
    </Modal>
  );
};

export default React.memo(Cart);
