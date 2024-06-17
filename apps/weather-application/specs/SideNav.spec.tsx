// src/components/SideNav.spec.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherProvider } from '../src/context/WeatherContext'
import SideNav from '../src/components/(Navbar)/SideNav'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            name: 'Brighton',
            temp: 22,
            date: '2024-06-17',
            icon: 'sunny',
            description: 'Clear sky'
        }),
    })
) as jest.Mock;

describe('SideNav Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and displays weather data', async () => {
        render(
            <WeatherProvider>
                <SideNav />
            </WeatherProvider>
        );

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

        const weatherInfo = screen.getByText(/Brighton/i);
        expect(weatherInfo).toBeInTheDocument();
    });
});
