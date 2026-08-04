
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathima Misna | Flutter Full-Stack Developer",
  description:
    "Portfolio of Fathima Misna showcasing Flutter applications, responsive UI development, Riverpod state management, and REST API integration.",
};




export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {

 return (

   <html lang="en" suppressHydrationWarning>

     <body>

       <ThemeProvider>

         {children}

       </ThemeProvider>

     </body>

   </html>

 );

}
