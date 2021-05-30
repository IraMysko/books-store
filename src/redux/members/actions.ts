import { GET_TEAM_MEMBERS } from './constants';
import { ActionGetMembers, Member } from './types';

export const getTeamMembers = (members: Member[]): ActionGetMembers => ({
    type: GET_TEAM_MEMBERS,
    payload: members
});
