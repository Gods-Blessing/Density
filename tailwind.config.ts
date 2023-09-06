import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue':'rgba(238,235,254,1)',
        'golden':'rgba(242,225,191,1)',
        'gray':'rgba(218,219,224,1)',
        'ball1':'rgba(99,65,239,1)',
        'ball2':'rgba(63,195,253,1)',
        'ball3':'rgba(253,179,56,1)',
        'ball4':'rgba(87,200,150,1)',
        'textgray':'rgba(77,77,82,1)',
        'darkpurple':'rgba(99,65,239,1)',
        'jobbackground':'rgba(254,251,236)',
        'productbackground':'rgba(254,251,236)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight:{
        '11':'3rem',
        '12':'3.5rem',
        '13':'4rem',
      },
      minWidth:{
        '1/2':'50%'
      },
      backgroundColor:{
        'greenish':'rgba(216,242,255,1)',
        'gray':'rgba(238,235,254, 1)',
        'purple': 'rgba(99,65,239, 1)',
        'orangish':'rgba(255,239,213, 1)',
        'light-orangish':'rgba(255,250,237,1)',
        'light-pinkish':'rgba(254,247,241,1)',
        'light-greenish':'rgba(237,248,254,1)',
        'light-grayish':'rgba(243,241,255,1)',
      },
      fontSize:{
        'xxs':'0.5rem'
      },
      height:{
        '33':'33rem',
      }
    },
  },
  plugins: [],
}
export default config
