import GetUsers from "./CreateContext/GetUsers"
import CreateTodo from "./UseContext/CreateTodo";
import { peopleContext, todoContext } from './CreateContext/context';
import { todoReducer } from './UseContext/reduce';
import { useReducer } from "react";

export type PeopleType = {
    name: string,
    hasJob: boolean,
    experience: number
};

const AllComponents = () => {
    const [todoState, dispatchTODO] = useReducer(todoReducer, [
        { id: 1, text: 'Read book', isComplete: false }
    ]);

    const people: PeopleType[] = [
        { name: 'Ira', hasJob: false, experience: 5 },
        { name: 'Vlad', hasJob: true, experience: 3 },
        { name: 'Sonik', hasJob: false, experience: 0 },
        { name: 'Olia', hasJob: true, experience: 2 },
        { name: 'Koshechka', hasJob: false, experience: 0 },
        { name: 'Masha', hasJob: false, experience: 7 },
    ];

    const unemployed = people.filter(({ hasJob }) => hasJob === false);
    const employed = people.filter(({ hasJob }) => hasJob === true);

    return (
        <>
            <peopleContext.Provider value={{ employed, unemployed }}>
                <GetUsers />
            </peopleContext.Provider>
            <todoContext.Provider value={{ todoState, dispatchTODO }}>
                <CreateTodo />
            </todoContext.Provider>
        </>
    )
};

export default AllComponents;