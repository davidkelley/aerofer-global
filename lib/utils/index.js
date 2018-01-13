import { BASE_SIZE } from '../constants';

export const baseSize = BASE_SIZE;

export const toRem = val => `${Number(String(val).replace('px', '')) / BASE_SIZE}rem`;
