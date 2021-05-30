import { GET_TEAM_MEMBERS } from './constants';

export type Member = {
    name: string;
    email: string;
    city: string;
    phone: string
}

export type ActionGetMembers = {
    type: typeof GET_TEAM_MEMBERS;
    payload: Member[]
}

export type ActionMembers = ActionGetMembers;

export type MembersTypes = {
    members: Member[];
}