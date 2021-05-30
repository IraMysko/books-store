import { SET_SEARCH_TEXT, SET_SORT_TYPE } from './constants';

const initialFilters = {
    searchText: '',
    sortType: '',
}

export const filtersReducer = (state = initialFilters, action: any) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        case SET_SORT_TYPE:
            return {
                ...state,
                sortType: action.payload,

            }
        default:
            return state;
    }
};