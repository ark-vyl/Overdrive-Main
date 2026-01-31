import type { Metadata } from 'next';
import { ReactNode } from "react";
import './globals.css'
import { UserLocationProvider } from "./context/user-location";


export const metadata = {
  title: 'Overdrive Protocol',
  description: 'Ini deskripsi webnya',
  icons: {
    icon: '/iconweb.png'
  }
}

export default function RootLayout ({children}: {children: ReactNode}) {
    return (
        <html>
            <meta name="theme-color" content="#FF3F3F" />
            <body>
                <UserLocationProvider>
                    {children}
                </UserLocationProvider>
            </body>
        </html>
    )
}