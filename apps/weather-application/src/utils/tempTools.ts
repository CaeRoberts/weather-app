export const convertToCelsiusFromFar = (temp: number) => {
    const calculation = ((temp - 32) * 5) / 9;
    return calculation.toFixed(0);
    }