const base = 14
const fraction = 1.25

const small = base / fraction
const tiny = small / fraction
const medium = base * fraction
const large = medium * fraction
const xlarge = large * fraction
const xxlarge = xlarge * fraction
const huge = xxlarge * fraction

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
    trueBlack: '#000',
    black: '#2C2C2C',
    darkerGray: '#4B4B4B',
    darkGray: '#6E6E6E',
    gray: '#B3B3B3',
    lightGray: '#E1E1E1',
    lighterGray: '#F5F5F5',
    white: '#FAFAFA',
    trueWhite: '#fff',
    primaryDarker: '#095aba',
    primaryDark: '#0d66d0',
    primary: '#1473e6',
    primaryRGB06: 'rgba(20, 115, 230, 0.6)',
    primaryLight: '#2680eb',
    successDarker: '#107154',
    successDark: '#12805c',
    success: '#268e6c',
    successLight: '#2d9d78',
    dangerDarker: '#bb121a',
    dangerDark: '#c9252d',
    danger: '#d7373f',
    dangerLight: '#e34850',
  },
}
