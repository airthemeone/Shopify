const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./**/*.liquid'],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [''],
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      transparent: colors.transparent,
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        100: 'var(--color-secondary-100)',
        200: 'var(--color-secondary-200)',
        300: 'var(--color-secondary-300)',
        400: 'var(--color-secondary-400)',
        500: 'var(--color-secondary-500)',
        600: 'var(--color-secondary-600)',
        700: 'var(--color-secondary-700)',
        800: 'var(--color-secondary-800)',
        900: 'var(--color-secondary-900)'
      },
      "font-color": {
        100: 'var(--color-font-color-100)',
        200: 'var(--color-font-color-200)',
        300: 'var(--color-font-color-300)',
        400: 'var(--color-font-color-400)',
        500: 'var(--color-font-color-500)',
        600: 'var(--color-font-color-600)',
        700: 'var(--color-font-color-700)',
        800: 'var(--color-font-color-800)',
        900: 'var(--color-font-color-900)'
      }
    },

    extend: {
      fontSize: {
        xxs: '0.5rem'
      },
      inset: {
        '1/2': '50%',
        'full': '100%'
      },
      height: {
        80: '20rem',
      },
      spacing: {
        '14': '3.5rem'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
}