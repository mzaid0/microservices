import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Micro-Services Next App",
  description: "Create to understand micro-services architecture with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
