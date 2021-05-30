import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { booksReducer } from './books/reducer';
import { cartReducer } from './cart/reducer';
import { filtersReducer } from './filters/reducer';
import { membersReducer } from './members/reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
    filters: filtersReducer,
    members: membersReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )

);

export type RootState = ReturnType<typeof rootReducer>