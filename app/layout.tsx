import Header from '@/components/header';
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Celso | Personal Portfolio',
  description: 'Celso is an aspiring full-stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body className={`${inter.className} bg-gray-100 text-gray-800 relative pt-28 sm:pt-36 dark:bg-gray-800 dark:text-gray-200`}>
      <div className="bg-[#e3f2fd] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] dark:bg-[#375a7f]"></div>
      <div className="bg-[#e8f5e9] absolute top-[-1rem] -z-10 right-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2c3e50]"></div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right'/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
