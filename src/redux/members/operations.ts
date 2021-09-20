import axios from "axios";
import { Dispatch } from "redux";

import { getTeamMembers } from "./actions";

type MembersType = {
  name: string;
  email: string;
  address: { [key: string]: string };
  phone: string;
};

const instanceAxios = axios.create({});

export const getMembersThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    const response = await instanceAxios(
      "https://jsonplaceholder.typicode.com/users"
    );
    const members = response.data.map(
      ({ name, email, address: { city }, phone }: MembersType) => ({
        name,
        email,
        city,
        phone,
      })
    );

    dispatch(getTeamMembers(members));
  };
};
