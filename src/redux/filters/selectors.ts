import { createSelector, createStructuredSelector } from "reselect";
import { RootState } from "../store";
import { SortedType } from "../../constants";
import { FiltersType } from "./types";

export const selectFilters = (state: RootState): FiltersType => state.filters;

export const selectFilteredText = createSelector(
  selectFilters,
  (filters) => filters.searchText
);

export const selectSortType = createSelector(
  selectFilters,
  (filters) => filters.sortType
);

export const selectGroup = createStructuredSelector<
  RootState,
  { searchText: string; sortType: SortedType }
>({
  searchText: selectFilteredText,
  sortType: selectSortType,
});
