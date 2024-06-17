import React from 'react'
import { convertToCelsiusFromFar } from '../../utils/tempTools'

type Props = {
    weather: any
}

function WeatherStats({weather}: Props) {

    console.log('Weather:', weather)

    
    if (!weather) return (
        <div className="p-8 text-white h-full flex flex-col justify-center gap-6 text-center">
            <h1 className="text-6xl font-bold">Brighton</h1>
            <p className="text-4xl font-semibold">Fri, 26 May</p>
            <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="weather-icon" className="w-64 h-64" />
            <p className="text-8xl font-bold">20<span className="text-4xl py-4">°C</span></p>
            <p className="text-2xl">Sunny</p>
        </div>
    )

    const data = weather.days[0]

  return (
    <div className="p-8 text-white h-full flex flex-col justify-center gap-6 text-center">
        <h1 className="text-6xl font-bold">{weather.address}</h1>
        <p className="text-4xl font-semibold">Fri, 26 May</p>
        <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="weather-icon" className="w-64 h-64" />
        <p className="text-8xl font-bold">{convertToCelsiusFromFar(data.temp)}<span className="text-4xl py-4">°C</span></p>
        <p className="text-2xl">{data.conditions}</p>
    </div>
  )
}

export default WeatherStats