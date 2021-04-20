import { useEffect, useState } from 'react';
import { Select } from 'antd';

import UkraineFlag from './img/Без названия.png';
import USAflag from './img/Без названия (1).png';
import GermanyFlag from './img/Без названия (2).png';

const { Option } = Select;

const Country = () => {

    type CityType = {
        name: string,
    }

    type CountriesType = {
        country: string,
        flag: string,
        city: CityType[],
    }

    const countries: CountriesType[] = [
        { country: 'Ukraine', flag: UkraineFlag, city: [{ name: 'Kharkiv' }, { name: 'Lviv' }] },
        { country: 'USA', flag: USAflag, city: [{ name: 'Los Angeles' }, { name: 'Chicago' }] },
        { country: 'Germany', flag: GermanyFlag, city: [{ name: 'Berlin' }, { name: 'Keln' }] }
    ]

    const [country, setCountry] = useState('Ukraine')
    const flag = countries.find((item) => item.country === country)?.flag;
    const city = countries.find((object) => object.country === country)?.city;

    const [cities, setCities] = useState('');

    useEffect(() => {
        setCities('');
    }, [country]);

    return (
        <>
            <Select
                style={{ width: 200 }}
                placeholder="Select a country"
                onChange={setCountry}
                defaultValue={'Ukraine'}
            >
                {countries.map(({ country }) => <Option key={country} value={country}>{country}</Option>)}
            </Select>

            <div>
                <span>{country}</span>
                <img width='40px' src={flag} alt="" />
            </div>

            <Select
                style={{ width: 200 }}
                placeholder="Select a city"
                onChange={setCities}
                value={cities}
            >
                {city?.map(({ name }) => <Option key={name} value={name}>{name}</Option>)}
            </Select>
            <div>
                <span>{cities}</span>
            </div>
        </>
    )
};

export default Country;