import { colors } from '@mui/material';

const colorValues = Object.values(colors);

// @ts-ignore
export const getRandomColor = () => colorValues[Math.floor(Math.random() * colorValues.length)][700];
