import { SortedType } from "../../constants";
import { SET_SEARCH_TEXT, SET_SORT_TYPE } from "./constants";
import { FiltersType } from "./types";

const initialFilters: FiltersType = {
  searchText: "",
  sortType: SortedType.ByName,
};

export const filtersReducer = (
  state = initialFilters,
  action: any
): FiltersType => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
