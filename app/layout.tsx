import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Autheo DevHub — Developer infrastructure',
  description: 'Autheo’s programmable infrastructure platform for modern applications.',
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
