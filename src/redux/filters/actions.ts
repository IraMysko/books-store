import { SET_SEARCH_TEXT, SET_SORT_TYPE } from './constants';
import { Filtered } from './types';

export const setSearchText = (text: string): Filtered => ({
    type: SET_SEARCH_TEXT,
    payload: text,
});

export const setSortType = (value: string): Filtered => ({
    type: SET_SORT_TYPE,
    payload: value,
})