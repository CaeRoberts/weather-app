'use client'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type Weather = {
    name: string;
    temp: number;
    date: string;
    icon: string;
    description: string;
}

interface WeatherContextProps {
    weather: Weather | null;
    setWeather: Dispatch<SetStateAction<Weather | null>>;
}

const defaultContext: WeatherContextProps = {
    weather: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setWeather: () => {},
};

export const WeatherContext = createContext<WeatherContextProps>(defaultContext);

export const WeatherProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [weather, setWeather] = useState<Weather | null>(null);

    return (
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeather = () => useContext(WeatherContext);
