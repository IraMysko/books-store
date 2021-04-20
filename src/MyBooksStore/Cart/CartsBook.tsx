import React, { useCallback } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { removeFromCart, setCartCount } from '../redux/cart/actions';
import Count from '../Count'

import './cart.css';
import '../Catalogue/catalogue.css';

type Books = {
    id: number;
    author: string,
    name: string,
    price: number,
    imgUrl: string

}

// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue ?: T): T;

interface Props {
    id: number;
    count: number;
}
const CartItem: React.FC<Props> = ({ id, count }) => {

    const books: Books[] = useSelector((state: RootStateOrAny) => state.books.books);
    const book = books.find(book => book.id === id);
    const dispatch = useDispatch();

    const handleDeleteBook = (id: number) => {
        dispatch(removeFromCart(id))
    };

    const handleIncreaseCount = useCallback(() => {
        dispatch(setCartCount(id, count + 1))
    }, [dispatch, id, count]);

    const handleDecreaseCount = useCallback(() => {
        dispatch(setCartCount(id, count - 1))
    }, [dispatch, id, count]);

    if (!book) {
        return null
    }
    const amount = Math.round(count * book.price)
    //воидфанкшен - когда не принимает аргументЫ и ничего не возвр

    return (
        <div className='container-cartsbook'>
            <div className='cartsbook-img'>
                <img className='books-img' src={book.imgUrl} alt="" />
            </div>
            <div className='cartsbook-info'>
                <div>{book.author}</div>
                <div> {book.name}</div>

            </div>
            <Count increaseCount={handleIncreaseCount} decreaseCount={handleDecreaseCount} count={count} />
            <div>{amount} $</div>
            <div onClick={() => handleDeleteBook(id)} className='cartsbook-delete'></div>
        </div>
    )
}

export default React.memo(CartItem);