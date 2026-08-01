import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'DevHub — Developer infrastructure',
  description: 'The programmable infrastructure platform for modern applications.',
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
