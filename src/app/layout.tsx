import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from '@/components/nextauth/SessionProvider'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Northmark Advisory - Real Estate Consultancy',
  description: 'Northmark Advisory is a Vancouver-based real estate advisory firm focused on long-term investment clarity.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#B89B5E" />
        <SessionProviderComp>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  )
}