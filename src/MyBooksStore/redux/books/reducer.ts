import { ADD_BOOK } from './constants';
import { BookType, ActionBooksTypes } from './types';

const initialBookState: BookType = {
    books: [
        { id: 0, author: 'Stiven King', name: 'Carrie', price: 3.4, imgUrl: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/3/0/305700_26061007.jpg' },
        { id: 1, author: 'Ben Elton', name: 'Two brothers', price: 7.5, imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345148674l/13573400.jpg' },
        { id: 2, author: 'Franz Kafka', name: 'The Meowmorphosis', price: 4.2, imgUrl: 'https://m.media-amazon.com/images/I/410J3gT9XUL._SL350_.jpg' },
        { id: 3, author: 'J.R.R. Tolkien', name: 'The Hobbit: or There and Back Again', price: 6.1, imgUrl: 'https://m.media-amazon.com/images/I/51S4R4KDYPL._SL350_.jpg' },
        { id: 4, author: 'Dan Brown', name: 'Angels & Demons (Robert Langdon) ', price: 7, imgUrl: 'https://www.booklya.ua/content/upload/product/194k/194987/800x800/600168/angels-and-demons.jpg' },
        { id: 5, author: 'Naima Coster', name: `What's Mine and Yours`, price: 2.5, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcd2-14h8rBE-327zh6fuwGIGfnInroDg8VRG8Nb8uH99GVHE' },
        { id: 6, author: 'Stiven King', name: 'It', price: 4.5, imgUrl: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/s/isbn978147366694.jpg' },
        { id: 7, author: 'Stiven King', name: 'Carrie', price: 3.4, imgUrl: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/3/0/305700_26061007.jpg' },
        { id: 8, author: 'Ben Elton', name: 'Two brothers', price: 7.5, imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345148674l/13573400.jpg' },
        { id: 9, author: 'Franz Kafka', name: 'The Meowmorphosis', price: 4.2, imgUrl: 'https://m.media-amazon.com/images/I/410J3gT9XUL._SL350_.jpg' },
        { id: 10, author: 'J.R.R. Tolkien', name: 'The Hobbit: or There and Back Again', price: 6.1, imgUrl: 'https://m.media-amazon.com/images/I/51S4R4KDYPL._SL350_.jpg' },
        { id: 11, author: 'Dan Brown', name: 'Angels & Demons (Robert Langdon) ', price: 7, imgUrl: 'https://www.booklya.ua/content/upload/product/194k/194987/800x800/600168/angels-and-demons.jpg' },
        { id: 12, author: 'Naima Coster', name: `What's Mine and Yours`, price: 2.5, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcd2-14h8rBE-327zh6fuwGIGfnInroDg8VRG8Nb8uH99GVHE' },
        { id: 13, author: 'Stiven King', name: 'It', price: 4.5, imgUrl: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/s/isbn978147366694.jpg' },
    ],
}

export const booksReducer = (state = initialBookState, action: ActionBooksTypes): BookType => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, { id: state.books.length + 1, ...action.payload }],
            }
        default:
            return state;
    }
}