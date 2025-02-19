// Importing custom fonts from Google using next/font
import { Geist, Geist_Mono } from "next/font/google";

// Importing global styles
import "./globals.css";

// Initializing Geist Sans font and setting a CSS variable
const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"], 
});

// Initializing Geist Mono font and setting a CSS variable
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"], 
});

// Metadata for the application (used for SEO)
export const metadata = {
  title: "Single Tier NextJS App", 
  description: "This project is a simple NextJS single-tier application designed as a learning exercise for Docker containerization.",
};

// Root Layout component that wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} 
      </body>
    </html>
  );
};