import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
