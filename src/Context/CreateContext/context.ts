import React from 'react';
import { PeopleType } from '../AllComponents';

type ContexType = {
    employed: PeopleType[],
    unemployed: PeopleType[],
};

type TodoType = {
    id: number,
    text: string,
    isComplete: boolean;
}

type TypeAgain = {
    todoState: TodoType[],
    dispatchTODO: any
}

export const peopleContext = React.createContext<ContexType | null>(null);

export const todoContext = React.createContext<TypeAgain | null>(null);