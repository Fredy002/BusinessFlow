import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Flow",
  description: "Business Flow is a comprehensive application for registering businesses and enterprises, managing products and clients, and visualizing sales performance with detailed statistical graphs. Streamline your business operations and gain insights into your sales data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
