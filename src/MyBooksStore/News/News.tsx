// @ts-nocheck
import React, { useState } from 'react';
import '../store.css';
import { getWeatherInfo } from './getWeather';

import './news.css';
import { InputField, Wrapper, NewsBlock, NewsText, ReadMoreButton, WeatherCity, City, Temp, Info } from './style';
import '../store.css';


const News = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e: any) => {
        if (e.key === 'Enter') {
            const data = await getWeatherInfo(query);

            setWeather(data);
            setQuery('');
        }
    }

    // const [isDisabled, setDisabled] = useState(false);

    // <button
    //     onClick={() => setDisabled(prev => !prev)}
    //     className={cn('button', {
    //         'active': !isDisabled,
    //         'disabled': isDisabled,
    //     })}
    // >
    //     click me
    //         </button>

    return (
        <div className="main-container">
            <Wrapper>
                <NewsBlock> news
                    <div>
                        <NewsText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt, nam nisi
                        accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor neque quidem
                        distinctio quia. Tempore, eos?
                    </NewsText>
                        <ReadMoreButton disabled={true} onClick={() => console.log('hello')}
                        >Read more</ReadMoreButton>
                    </div>
                    <div>
                        <NewsText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt, nam nisi
                        accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor neque quidem
                        distinctio quia. Tempore, eos?
                    </NewsText>
                        <ReadMoreButton>Read more</ReadMoreButton>
                    </div>
                    <div>
                        <NewsText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt,
                        nam nisi accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor
                        neque quidem distinctio quia. Tempore, eos?
                    </NewsText>
                        <ReadMoreButton>Read more</ReadMoreButton>
                    </div>
                </NewsBlock>
                <div> weather in your country
                    <InputField type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}></InputField>
                    {weather.main && (
                        <WeatherCity>
                            <City>
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </City>
                            <Temp>
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                            </Temp>
                            <Info>
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                <p>{weather.weather[0].description}</p>
                            </Info>
                        </WeatherCity>
                    )}
                </div>
            </Wrapper>
        </div >
    )
}

export default News;