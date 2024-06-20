import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

const COLORS = {
  BLACK: '#000000'
}

export const metadata = {
  title: 'Snapcode - Create Beautiful Code Images',
  description:
    'Easily create and share beautiful images of your source code with Snapcode.',
  keywords: 'code, images, share, create, Snapcode, source code, coding',
  verification: {
    google: 'R2cyJD5TCK0o1P_r7Nib0GT4wm325gWsCG-3jjZiQWk'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta name='google-site-verification' content='google' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='application-name' content={metadata.title} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@snapcode_app' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta
          name='twitter:image'
          content='https://snapcode.optimarko.com/static/brand/banner.png'
        />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content='/static/brand/banner.png' />
        <meta name='theme-color' content={COLORS.BLACK} />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content={COLORS.BLACK}
        />
        <title>{`${metadata.title} | Create and share beautiful images of your source code`}</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          href='/static/brand/apple-touch-icon.png'
        />
      </Head>

      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='G-7M74HR8JVE' />
    </html>
  )
}
