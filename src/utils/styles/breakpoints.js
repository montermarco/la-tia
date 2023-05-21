import { css } from 'styled-components';

const size = {
    xlg: 1920,
    lg: 1280,
    md: 768,
    sm: 360
};

export const below = Object.keys(size).reduce( (acc, label) => {
  acc[label] = (...args) => css`
    @media ( max-width: ${size[label]}px ) {
      ${css(...args)}
    }
  `;
  return acc;
},{});