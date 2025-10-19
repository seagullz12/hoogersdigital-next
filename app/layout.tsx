// app/layout.tsx
import { Providers } from './providers'
import './globals.css'
import Header from '@/components/Header'
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
        </Providers>
        <GoogleTagManager gtmId="GTM-TSQMWLH3" />
      </body>
    </html>
  )
}