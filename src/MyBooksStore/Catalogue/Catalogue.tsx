import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalNewBook from './ModalNewBook';
import { addToCart } from '../redux/cart/actions';
import { setSortType } from '../redux/filters/actions';
import { useTypedSelector } from '../hooks/typeSelector';
import { SortedType } from '../../constants';

import '../store.css';
import './catalogue.css';
import { Select, Button } from 'antd';


const { Option } = Select;

const Catalogue = () => {
    const books = useTypedSelector(state => state.books.books);
    const cart = useTypedSelector(state => state.cart.cart);
    const searchText = useTypedSelector(state => state.filters.searchText);
    const sortType = useTypedSelector(state => state.filters.sortType)

    const dispatch = useDispatch();

    const handleAddBookToCart = (id: number) => {
        dispatch((addToCart(id)))
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddBook = () => {
        setIsModalVisible(true);
    };
    const handleOk = useCallback((): void => {
        setIsModalVisible(false);
    }, []);
    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    const getSortedBooks = (sortType: SortedType, books: any) => {
        switch (sortType) {
            case SortedType.Cheaper: {
                return books.sort((a: any, b: any) => {
                    return a.price - b.price
                });
            }

            case SortedType.Expensive: {
                return books.sort((a: any, b: any) => {
                    return b.price - a.price
                });
            }
            case SortedType.ByName: {
                return books.sort((a: any, b: any) => {
                    if (a.author < b.author)
                        return -1;
                    if (a.author > b.author)
                        return 1;
                    return 0;
                })

            }
            default:
                return books;
        }
    };

    const sortedBooks = getSortedBooks(sortType, books);

    const visibleBooks = searchText
        ? sortedBooks.filter(({ author, name }: any) => {
            return author.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                || name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
        : sortedBooks;

    function handleChange(value: string) {
        dispatch(setSortType(value))
    };

    return (
        <>
            <div className='catalogue-container'>
                {/* <textarea ref={textareaRef} placeholder='put smth'></textarea>
                <button onClick={send}>Send</button>
                <div>{title}</div> */}
                <div className='catalogue-btn'>
                    <Button className='btn-add' onClick={handleAddBook} block>add</Button>
                    <Select
                        className='btn-sort'
                        defaultValue="sort" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="cheaper">cheaper</Option>
                        <Option value="expensive">expensive</Option>
                        <Option value="byname">by name</Option>
                    </Select>
                </div>

                <ModalNewBook visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} />

                <div className='catalogue-books' >
                    {visibleBooks.length ?
                        visibleBooks.map(({ id, author, name, price, imgUrl }: any) => {
                            const isDisabled = cart.includes(id);
                            return (
                                <>
                                    <div className='book'>
                                        <img className='books-img' src={imgUrl} alt="" />
                                        <div>{author}</div>
                                        <div>{name}</div>
                                        <div>{price} $</div>
                                        <button disabled={isDisabled} onClick={() => handleAddBookToCart(id)} className='books-Buy'>
                                            {isDisabled ? 'In Cart' : 'Buy'}
                                        </button>
                                    </div>
                                </>
                            )
                        })
                        : <div>do not find</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Catalogue;