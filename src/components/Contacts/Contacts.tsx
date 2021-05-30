
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/typeSelector';
import { getMembersThunkCreator } from '../../redux/members/operations';
import photoMembers from '../../images/loreal-model-risovannye-500423.jpg';
import './contacts.css';

const Contacts: React.FC = () => {
    const members = useTypedSelector(state => state.members.members)
    const dispatch = useDispatch();

    const visibilityMembers = getVisibilityMembers(members);

    useEffect(() => {
        dispatch(getMembersThunkCreator())
    }, [dispatch])

    return (
        <div className="contacts-container">
            Our Team
            <div className='contacts-team'>
                {visibilityMembers.map(({ name, email, city, phone }) => {
                    return (
                        <div className='team' key={phone}>
                            <div>{name}</div>
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

const getVisibilityMembers = (members: any) => {
    const copiedMembers = [...members];
    copiedMembers.length = 5;

    return copiedMembers;
};

export default Contacts;