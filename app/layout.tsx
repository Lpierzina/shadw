import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Autheo DevHub — Build what’s next',
  description: 'The sovereign foundation for connected, intelligent applications.',
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
