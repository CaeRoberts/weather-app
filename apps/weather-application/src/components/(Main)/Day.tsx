'use client'
import React from 'react'
import { useWeather } from '../../context/WeatherContext'
import { useMeasurement } from '../../context/MeasurementContext'
import { convertToCelsiusFromFar } from '../../utils/tempTools'

type Props = {}

function Day({}: Props) {
    const { weather } = useWeather();
    const { measurement, setMeasurement } = useMeasurement();

    const TempValue = (value) => {
        if (measurement === 'C') return `${convertToCelsiusFromFar(value)} °C`

        return `${value}°F`
    }

    console.log('Weather DAY:', weather)

    if (!weather) return (<div>Loading...</div>);
  return (
    <div className="max-w-screen-xl w-full flex flex-col gap-8 p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
            <h2 className="text-4xl font-bold">Day Overview</h2>
            <div className="flex flex-row gap-4">
                <button onClick={() => setMeasurement('C')} className={`${measurement=== "C" ? 'bg-white text-slate-600': 'bg-slate-600 text-white'} p-4 rounded-md lg:rounded-full w-full lg:w-fit`}>C</button>
                <button onClick={() => setMeasurement('F')} className={`${measurement=== "F" ? 'bg-white text-slate-600': 'bg-slate-600 text-white'} p-4 rounded-md lg:rounded-full w-full lg:w-fit`}>F</button>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8 text-center">
            <div className="flex flex-col gap-8 w-full">
                <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                    <h3 className="text-2xl font-bold">Humidity</h3>
                    <p className="text-2xl font-semibold">{weather.days[0].humidity}%</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                        <h3 className="text-lg font-bold">Min Temp</h3>
                        <p className="text-2xl font-semibold">{TempValue(weather.days[0].tempmin)}</p>
                    </div>
                    <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                        <h3 className="text-lg font-bold">Max Temp</h3>
                        <p className="text-2xl font-semibold">{TempValue(weather.days[0].tempmax)}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full">
                <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                    <h3 className="text-2xl font-bold">Cloud Cover</h3>
                    <p className="text-2xl font-semibold">{weather.days[0].cloudcover}%</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                        <h3 className="text-lg font-bold">Sunrise</h3>
                        <p className="text-2xl font-semibold">{weather.days[0].sunrise}</p>
                    </div>
                    <div id="humidity" className="p-8 bg-slate-600 rounded-lg w-full">
                        <h3 className="text-lg font-bold">Sunset</h3>
                        <p className="text-2xl font-semibold">{weather.days[0].sunset}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Day