import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { peopleContext } from './context';

const Unemployed = () => {
    const context = useContext(peopleContext);

    return (
        <>
            <div>Here will be Unemployed</div>
            {context?.unemployed.map(({ name, experience }: any) => (
                <div>
                    <div>{name}</div>
                    <div>{experience}</div>
                </div>
            ))}
            <Link to='/'>Назад</Link>
        </>
    )
};

export default Unemployed;