import md from './md';

export md from './md';

const breakpoints = {
  md,
};

export const generate = (bp, spacing, type) => ({
  [`${type}Top`]: breakpoints[bp][spacing].vertical,
  [`${type}Right`]: breakpoints[bp][spacing].horizontal,
  [`${type}Bottom`]: breakpoints[bp][spacing].vertical,
  [`${type}Left`]: breakpoints[bp][spacing].horizontal,
});
