import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Welcome to to RELAIT",
  description: "Build your business from the ground up. Discover endless possibilities for offices, gyms, clinics, salons, stores, restaurants, schools, and more. Find professionals, products, and inspiration",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return( 
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}
