import { Link } from 'react-router-dom';
import { Path } from './constants';

const links = [
    { title: 'Unemployed', link: Path.Unemployed },
    { title: 'Employed', link: Path.Employed }
];

const Main = () => {
    return (
        <>
            {links.map(({ title, link }) => (
                <Link key={title} to={link}>{title}</Link>
            ))}
        </>
    )
};

export default Main;