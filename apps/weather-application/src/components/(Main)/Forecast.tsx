'use client'
import React from 'react'
import { useWeather } from '../../context/WeatherContext'
import { useMeasurement } from '../../context/MeasurementContext'
import { convertToCelsiusFromFar } from '../../utils/tempTools'

type Props = {}

function Forecast({}: Props) {
    const { weather } = useWeather();
    const { measurement } = useMeasurement();

    const TempValue = (value) => {
            if (measurement === 'C') return `${convertToCelsiusFromFar(value)} °C`
    
            return `${value}°F`
        }

    console.log('FORECAST:', weather)

    if (!weather) return (<div>Loading...</div>)

  return (
    <div className="flex flex-col gap-4 text-white w-full max-w-screen-xl p-8">
        <h2 className="text-4xl font-bold">Day Overview</h2>
        <div className="flex flex-row flex-wrap w-full gap-4">
            {weather.days.map((day, index) => (<div key={index} className="flex flex-col gap-4 w-fit h-fit gap-y-8 bg-slate-600 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold">Tomorrow</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="weather-icon" className="w-48 h-48" />
                <p className="text-xl">{day.conditions}</p>
                <div className="flex flex-row gap-4 w-full justify-between">
                <p className="text-2xl font-bold">{TempValue(day.temp)}<span className="text-xl"></span></p>
                <p className="text-2xl font-bold text-slate-300">{TempValue(day.temp)}<span className="text-xl"></span></p>
                </div>
            </div>))}

        </div>
    </div>
  )
}

export default Forecast