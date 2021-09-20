import { RootState } from "../store";
import { Member } from "./types";

export const selectMembers = (state: RootState): Member[] =>
  state.members.members;
