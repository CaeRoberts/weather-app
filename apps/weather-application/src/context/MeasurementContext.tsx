'use client'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface MeasurementContextProps {
    measurement: string | null;
    setMeasurement: Dispatch<SetStateAction<string | null>>;
}

const defaultContext: MeasurementContextProps = {
    measurement: 'C',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setMeasurement: () => {},
};

export const MeasurementContext = createContext<MeasurementContextProps>(defaultContext);

export const MeasurementProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [measurement, setMeasurement] = useState<string | null>('C');

    return (
        <MeasurementContext.Provider value={{ measurement, setMeasurement }}>
            {children}
        </MeasurementContext.Provider>
    );
}

export const useMeasurement = () => useContext(MeasurementContext);
