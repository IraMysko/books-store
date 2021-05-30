import { GET_TEAM_MEMBERS } from './constants';
import { ActionMembers, MembersTypes } from './types';

const initialMembersState: MembersTypes = {
    members: [],
}

export const membersReducer = (state = initialMembersState, action: ActionMembers): MembersTypes => {
    switch (action.type) {
        case GET_TEAM_MEMBERS: {
            return { ...state, members: action.payload }
        }
        default:
            return state;
    }
}