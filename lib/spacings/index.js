import md from './md';

import sm from './sm';

import xs from './xs';

export md from './md';

export sm from './sm';

export xs from './xs';

const breakpoints = {
  sm,
  md,
  xs,
};

export const generate = (bp, spacing, type) => ({
  [`${type}Top`]: breakpoints[bp][spacing].vertical,
  [`${type}Right`]: breakpoints[bp][spacing].horizontal,
  [`${type}Bottom`]: breakpoints[bp][spacing].vertical,
  [`${type}Left`]: breakpoints[bp][spacing].horizontal,
});
