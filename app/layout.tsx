import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'



export const metadata: Metadata = {
  title: 'Loom.ai',
  description: 'Elevate your conversations across languages effortlessly. Seamlessly connect and communicate in real-time, transcending linguistic boundaries with the simplicity of Loom.ai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClientProviders>
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  </ClientProviders>
  )
}
