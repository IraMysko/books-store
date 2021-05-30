import { ADD_BOOK } from './constants';
import { AddBookAction } from './types';

export const addBook = ({ author, name, price, imgUrl }: { author: string, name: string, price: number, imgUrl: string }): AddBookAction => ({
    type: ADD_BOOK,
    payload: { author, name, price, imgUrl }
});


