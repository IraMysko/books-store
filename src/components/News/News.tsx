// @ts-nocheck
import React, { useState } from 'react';

import { getWeather } from './getWeather';
import {
    InputField,
    Wrapper,
    NewsBlock,
    NewsText,
    ReadMoreButton,
    WeatherCity,
    City,
    Temp,
    Info,
} from './style';
import './news.css';

const News: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [weather, setWeather] = useState({});

    const handleSearch = async (event: any) => {
        if (event.key === 'Enter') {
            const data = await getWeather(query);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="news-container">
            <Wrapper>
                <NewsBlock>
                    News
                    <div>
                        <NewsText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt, nam nisi
                            accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor neque quidem
                            distinctio quia. Tempore, eos?
                        </NewsText>
                        <ReadMoreButton disabled={true}>Read more</ReadMoreButton>
                    </div>
                    <div>
                        <NewsText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt, nam nisi
                            accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor neque quidem
                            distinctio quia. Tempore, eos?
                        </NewsText>
                        <ReadMoreButton>Read more</ReadMoreButton>
                    </div>
                    <div>
                        <NewsText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti nesciunt,
                            nam nisi accusamus ipsum consectetur. Illum quo repellat qui iure accusamus blanditiis dolor
                            neque quidem distinctio quia. Tempore, eos?
                        </NewsText>
                        <ReadMoreButton>Read more</ReadMoreButton>
                    </div>
                </NewsBlock>
                <div>
                    weather in your country
                    <InputField
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleSearch}
                    />
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
                                <img className="city-icon"
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={weather.weather[0].description} />
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