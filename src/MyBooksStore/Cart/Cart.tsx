import React from 'react';
import CartsBook from './CartsBook';
import { useTypedSelector } from '../hooks/typeSelector'

import { Modal } from 'antd';

interface Props {
    visible: boolean;
    onOk: VoidFunction;
    onCancel: VoidFunction;
}

const Cart: React.FC<Props> = ({ visible, onOk, onCancel }) => {
    const cart = useTypedSelector(state => state.cart.cart);
    const isCartEmpty = !cart.length;

    return (
        <>
            <Modal title="Basic Modal" width={600} visible={visible} onOk={onOk} onCancel={onCancel}>
                {isCartEmpty
                    ? <div>your cart is empty</div>
                    : <div>
                        Books in cart:
                {cart.map(({ id, count }) => <CartsBook id={id} count={count} />)}
                        <div>Ваша сумма заказа</div>
                    </div>}
            </Modal>
        </>
    )
};
export default React.memo(Cart);