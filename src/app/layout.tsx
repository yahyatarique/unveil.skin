import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Provider from "./provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ordyn Soap - unveil.skin",
  description: "Ordyn. From ordinary to extraordinary. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
