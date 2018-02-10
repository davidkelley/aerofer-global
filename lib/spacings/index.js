import { BASE_SPACING } from '../constants';

import { toRem } from '../utils';

export const unit = BASE_SPACING;

export const generate = (type, { horizontal, vertical, ...props }) => {
  const {
    top = vertical, right = horizontal, bottom = vertical, left = horizontal,
  } = props;
  const points = {
    top, right, bottom, left,
  };
  return Object.keys(points).reduce((memo, point) => {
    const obj = memo;
    const val = points[point];
    if (val) {
      const suffix = point.charAt(0).toUpperCase() + point.slice(1);
      return { [`${type}${suffix}`]: toRem(unit * val), ...obj };
    }
    return obj;
  }, {});
};
