const base = 14;
const fraction = 1.25;

const small = base / fraction;
const tiny = small / fraction;
const medium = base * fraction;
const large = medium * fraction;
const xlarge = large * fraction;
const xxlarge = xlarge * fraction;
const huge = xxlarge * fraction;

export default {
  font: {
    tiny: `${tiny}px`,
    small: `${small}px`,
    base: `${base}px`,
    medium: `${medium}px`,
    large: `${large}px`,
    xlarge: `${xlarge}px`,
    xxlarge: `${xxlarge}px`,
    huge: `${huge}px`,
    line: 1.5,
  },
  colors: {
    black: '#000',
    darkerGray: '#444',
    darkGray: '#ddd',
    gray: '#ddd',
    lightGray: '#ddd',
    lighterGray: '#efefef',
    white: '#fff',
    primary: 'rgb(0, 102, 221)',
    primaryLight: 'rgb(198, 224, 255)',
    success: 'rgb(0, 187, 102)',
    successLight: 'rgb(175, 255, 212)',
    danger: 'rgb(221, 0, 0)',
    dangerLight: 'rgb(255, 211, 211)',
  },
};
