// app/layout.tsx
import { Providers } from './providers'
import './globals.css'
import Header from '@/components/Header'

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
      </body>
    </html>
  )
}