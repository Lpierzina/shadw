import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'autheo.dev',
  description: 'Developer platform frontend — Autheo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
