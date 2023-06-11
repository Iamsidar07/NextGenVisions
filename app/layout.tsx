import { Navbar } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: 'NexGenVisions',
  description: 'NexGenVisions: Ignite creativity, redefine limits, create wonders. Fuel innovation, explore possibilities, illuminate with your creations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='custom-scroll-bar'>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main>
          <Navbar />
          <div className='app'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
