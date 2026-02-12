import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavResponsive from "@/components/Home/Navbar/NavResponsive";
import Footer from "@/components/Home/Footer/Footer";

const default_font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Alessio Diaz Cama",
  description: "Portfolio | Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${default_font.className} antialiased bg-[#0d0d1f]`}>
        <NavResponsive />
        {children}
        <Footer />
      </body>
    </html>
  );
}
