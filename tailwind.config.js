const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/*.liquid'],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['h1', 'h2', 'h3', 'p', 'strong'],
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
      "button": {
        "primary": 'var(--color-button-primary)',
        "primary-hover": 'var(--color-button-primary-hover)',
        "primary-text": 'var(--color-button-primary-text)',
        "secondary": 'var(--color-button-secondary)',
        "secondary-hover": 'var(--color-button-secondary-hover)',
        "secondary-text": 'var(--color-button-secondary-text)',
      },
      "font-color": {
        "light": 'var(--color-font-color-light)',
        "dark": 'var(--color-font-color-dark)',
        "darkest": 'var(--color-font-color-darkest)'
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
      spacing: {
        '14': '3.5rem',
        '80': '20rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-font-color-dark)',
            a: {
              color: 'var(--color-font-color-dark)',
              '&:hover': {
                color: 'var(--color-font-color-darkest)',
              },
            },
            h1: {
              color: 'var(--color-font-color-darkest)',
            },
            h2: {
              color: 'var(--color-font-color-darkest)',
            },
            h3: {
              color: 'var(--color-font-color-darkest)',
            },
            h4: {
              color: 'var(--color-font-color-darkest)',
            },
          },
        },
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}