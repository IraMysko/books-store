
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/typeSelector';
import { getMembersThunkCreator } from '../redux/teamMembers/operations';
import photoMembers from '../../img/loreal-model-risovannye-500423.jpg';

import './contacts.css';
import '../store.css';

const Contacts = () => {
    const members = useTypedSelector(state => state.members.members)
    const dispatch = useDispatch();

    const someMembers = [...members];
    someMembers.length = 5;

    useEffect(() => {
        dispatch(getMembersThunkCreator())
    }, [dispatch])

    // const makeHandleClickName = (name: string) => () => {
    //     console.log(`Hi, ${name}`);
    // };

    // const makeHandleClickName = function (name: string) {
    //     return function handleClickName() {
    //         console.log(`Hi, ${name}`);
    //     };
    // };

    return (
        <div className='contacts-container'> Our Team
            <div className='teamblock'>
                {someMembers.map(({ name, email, city, phone }) => {
                    return (
                        <div className='team' key={name}>
                            <div
                            // onClick={makeHandleClickName(name)}
                            >{name}</div>
                            <div>{email}</div>
                            <div>{city}</div>
                            <div>{phone}</div>
                            <img className='team-photo' src={photoMembers} alt="" />
                        </div>
                    )
                }
                )}
            </div>
        </div >
    )
};

export default Contacts;