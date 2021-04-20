import axios from 'axios';

import { getTeamMembers } from './actions';

const instanceAxios = axios.create({

});

export const getMembersThunkCreator = () => {
    return async (dispatch: any) => {
        const response = await instanceAxios('https://jsonplaceholder.typicode.com/users');
        const members = response.data.map(({ name, email, address: { city }, phone }: any) => ({
            name,
            email,
            city,
            phone,
        }));
        dispatch(getTeamMembers(members));


    }
}