import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
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
  )
}
