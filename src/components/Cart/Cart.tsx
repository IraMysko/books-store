import React from "react";
import { Modal } from "antd";

import CartsBook from "./CartsBook";
import useCart from "./useCart";

interface Props {
  visible: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
}

const Cart: React.FC<Props> = ({ visible, onOk, onCancel }) => {
  const { isCartEmpty, cart, allSum } = useCart();
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
