import type { Metadata } from "next";
import localFont from '@next/font/local'
import "./assets/css/globals.css";

export const metadata: Metadata = {
  title: "Welcome to RELAIT",
  description: "Build your business from the ground up. Discover endless possibilities for offices, gyms, clinics, salons, stores, restaurants, schools, and more. Find professionals, products, and inspiration",
};

const SFpro = localFont({
  src: [
    {
      path: './fonts/SF-Pro.ttf',
      weight: '400'
    },
  ],
  variable: '--font-SFpro'
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      </head>
      <body
        className={`${SFpro.variable} font-SFpro text-sm antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
