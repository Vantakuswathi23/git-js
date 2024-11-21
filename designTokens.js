// designTokens.js
const neutrals = require('tailwindcss/colors')

const coreColors = {
  brand: '#006397', // 800 blue
  emphasis: '#c2407f', // 600 purple
  success: '#089367', // 600 green
  info: '#a739e4', // 600 violet
  alert: '#c49d0a', // 600 yellow
  warning: '#fb6b04', // 600 orange
  error: '#dd2229' // 600 red
}

const colorScales = {
  brand: {
    50: '#eff9ff',
    100: '#def2ff',
    200: '#b6e7ff',
    300: '#76d6ff',
    400: '#2dc2ff',
    500: '#02abf5',
    600: '#0088d2',
    700: '#006daa',
    // 800: coreColors.primary,
    900: '#074c73',
    950: '#04304d'
  },
  emphasis: {
    50: '#fbf4f8',
    100: '#f9eaf4',
    200: '#f5d5e8',
    300: '#eeb3d5',
    400: '#e284b9',
    500: '#d96ca6',
    // 600: coreColors.emphasis,
    700: '#a72f66',
    800: '#8b2955',
    900: '#742749',
    950: '#461128'
  },
  success: {
    50: '#ecfdf5',
    100: '#d2f9e5',
    200: '#a9f1d0',
    300: '#71e4b6',
    400: '#41d19c',
    500: '#14b57f',
    // 600: coreColors.success,
    700: '#077556',
    800: '#085d45',
    900: '#084c3a',
    950: '#032b21'
  },
  info: {
    50: '#fbf5ff',
    100: '#f5e9fe',
    200: '#eed6fe',
    300: '#e0b7fb',
    400: '#cd88f8',
    500: '#b95af2',
    600: coreColors.info,
    700: '#8d27c4',
    800: '#7926a3',
    900: '#632083',
    950: '#450a61'
  },
  alert: {
    50: '#fdfde9',
    100: '#fbfcc5',
    200: '#f9f871',
    300: '#f7ef4d',
    400: '#f3e01c',
    500: '#e3c70f',
    600: coreColors.alert,
    700: '#9c710c',
    800: '#815a12',
    900: '#6e4915',
    950: '#402608'
  },
  warning: {
    50: '#fff8ec',
    100: '#fff0d3',
    200: '#ffdea7',
    300: '#ffc56f',
    400: '#ffa035',
    500: '#ff830e',
    // 600: coreColors.warning,
    700: '#c94d05',
    800: '#9f3d0d',
    900: '#80340e',
    950: '#451805'
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e3',
    200: '#fecacc',
    300: '#fda4a7',
    400: '#f97075',
    500: '#f04349',
    // 600: coreColors.error,
    700: '#ba1b21',
    800: '#9a1a1f',
    900: '#801c20',
    950: '#450a0c'
  },
  neutrals: {
    ...neutrals.slate
  }
}

const typefaces = {
  dashboardSans: ['var(--dashboard-font)']
}

const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 800,
  extrabold: 800,
  black: 900
}

module.exports = { coreColors, colorScales, typefaces, fontWeights }
