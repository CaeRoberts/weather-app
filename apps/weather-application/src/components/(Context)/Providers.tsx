import React from 'react'
import { WeatherProvider } from '../../context/WeatherContext'
import { MeasurementProvider } from '../../context/MeasurementContext'
type Props = {
    children: React.ReactNode
}

function Providers({children}: Props) {
  return (
    <MeasurementProvider>
        <WeatherProvider>
            {children}
        </WeatherProvider>
    </MeasurementProvider>
  )
}

export default Providers