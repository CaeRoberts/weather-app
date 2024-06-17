'use client'
import React, { useCallback, useState } from 'react'
import Searchbar from './Searchbar'
import WeatherStats from './WeatherStats'
import { useWeather } from '../../context/WeatherContext'
import useDebounce from '../../hooks/useDebounce'

function SideNav() {
  const { weather, setWeather } = useWeather();
  const [location, setLocation] = useState('Brighton')
  const debouncedLocation = useDebounce(location, 500); // Adjust the debounce delay as needed

    // const KEY = process.env.WEATHER_KEY
    const KEY = false

    const getWeather = useCallback(async () => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${debouncedLocation}/2024-06-17/2024-06-21?key=${KEY ||'KHPNTD2P6MYEZTH6PJE9LPXZT'}`)
        const data = await response.json()
        setWeather(data)
        console.log('Weather:', data)
    }, [setWeather, debouncedLocation]);

    React.useEffect(() => {
        getWeather()
    }, [getWeather]);

  return (
    <div className="bg-slate-700 w-full max-w-[640px] flex flex-col justify-start items-center p-8">
        <Searchbar location={location} setLocation={setLocation} />
        <WeatherStats weather={weather} />
    </div>
  )
}

export default SideNav