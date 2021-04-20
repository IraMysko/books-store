import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { peopleContext } from './context';

const Employed = () => {
    const context = useContext(peopleContext);

    return (
        <>
            <div>Here will be Employed</div>
            {context?.employed.map(({ name, experience }) => (
                <div>
                    <div>{name}</div>
                    <div>{experience}</div>
                </div>
            ))}
            <Link to='/'>Назад</Link>
        </>
    )
};

export default Employed;