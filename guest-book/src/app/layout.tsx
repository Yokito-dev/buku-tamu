import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {AuthProvider} from "../app/context/AuthContext"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Buku Tamu",
  icons: {
    icon: "/file.svg", // Corrected path
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/file.svg" />
      </head>
      <AuthProvider>
      <body className="antialiased">{children}</body>
      </AuthProvider>
    </html>
  );
}

