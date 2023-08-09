import Head from 'next/head'
import './globals.css'
export const metadata = {
  title: 'MeetPlanr',
  description: 'Generated by create next app',
}
import { poppins } from '@/components/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h2>siam</h2>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  ) 
}
