import { ADD_BOOK } from './constants';

export type Book = {
    id: number;
    author: string;
    name: string;
    price: number;
    imgUrl: string;
};

export type BookType = { books: Book[] }

export type AddBookAction = {
    type: typeof ADD_BOOK;
    payload: {
        author: string;
        name: string;
        price: number;
        imgUrl: string;
    };
}

export type ActionBooksTypes = AddBookAction;
