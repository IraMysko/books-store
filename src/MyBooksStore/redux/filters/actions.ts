import { SET_SEARCH_TEXT, SET_SORT_TYPE } from './constants';
import { filtered } from './types';


export const setSearchText = (text: string): filtered => ({
    type: SET_SEARCH_TEXT,
    payload: text,
});

export const setSortType = (value: string): filtered => ({
    type: SET_SORT_TYPE,
    payload: value,
})