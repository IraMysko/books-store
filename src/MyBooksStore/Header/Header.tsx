import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cart from '../Cart';



import Discount from '../images/tag.svg';
import CartImg from '../images/9261782281585492958.svg';
import { Tooltip } from 'antd';
import './header.css';
import '../store.css';
import Sale from './Sale';
import { setCartVisibility } from '../redux/cart/actions';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/typeSelector';

const Header = () => {
    const dispatch = useDispatch();
    const { setSearchText } = useActions()
    const isOpen = useTypedSelector(state => state.cart.isOpen)
    const cart = useTypedSelector(state => state.cart.cart);
    const countCart = cart.length;

    const handleFindBook = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    };

    const handleOpenCart = useCallback((): void => {
        dispatch(setCartVisibility(true))
    }, [dispatch]);

    const handleCloseCart = useCallback((): void => {
        dispatch(setCartVisibility(false))
    }, [dispatch])


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = useCallback((): void => {
        setIsModalVisible(false);
    }, []);

    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);


    return (
        <>

            <div className='header-container'>
                <div className='header-search-box'>
                    <div>
                        <h3 className='header-title'>Books Store</h3>
                    </div>

                    <div>
                        <input onChange={handleFindBook}
                            className='header-input' type="text" />
                        <span className='header-button'>Find</span>
                    </div>
                    <div>
                        <Tooltip placement="left" title="Discount">
                            <img onClick={showModal} className='header-img-discount' src={Discount} alt="" />
                        </Tooltip>
                        <Sale visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />

                        <img onClick={handleOpenCart} className='header-img-cart' src={CartImg} alt="" />
                        {!countCart ? null : <span className='cart-count'>{countCart}</span>}
                        <Cart visible={isOpen} onOk={handleCloseCart} onCancel={handleCloseCart} />
                    </div>

                </div>
            </div>
        </>
    )
}



export default Header;