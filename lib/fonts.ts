import localFont from 'next/font/local';
export const justSans = localFont({
  src: [
    {
      path: '../public/fonts/JUST Sans ExLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/JUST Sans ExBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-justsans',
  display: 'swap',
  preload: true,
});