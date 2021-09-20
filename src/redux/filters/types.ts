import { SortedType } from "../../constants";

export type FiltersType = {
  searchText: string;
  sortType: SortedType;
};
export interface Filtered {
  type: string;
  payload?: string;
}
