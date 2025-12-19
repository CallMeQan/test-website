import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio | Terminal Core",
  description: "A modern portfolio with cyberpunk terminal aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono bg-cyber-black text-cyber-green`}>
        <div className="content-wrapper">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
