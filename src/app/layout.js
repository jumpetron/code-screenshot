import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Snapcode - Create Beautiful Code Images',
  description:
    'Easily create and share beautiful images of your source code with Snapcode.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={metadata.description} />
        <meta
          property='og:title'
          content='Snapcode - Create Beautiful Code Images'
        />
        <meta
          property='og:description'
          content='Easily create and share beautiful images of your source code with Snapcode.'
        />
        <meta property='og:image' content='/path-to-your-image.jpg' />
        <meta property='og:url' content='https://your-website-url.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Snapcode - Create Beautiful Code Images'
        />
        <meta
          name='twitter:description'
          content='Easily create and share beautiful images of your source code with Snapcode.'
        />
        <meta name='twitter:image' content='/path-to-your-image.jpg' />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
