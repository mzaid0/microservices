import { Background } from "@/components/ui/background";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Microservice App",
  description: "A microservice architecture application built with Next.js and TypeScript.",
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
        <Background />
        {children}
      </body>
    </html>
  );
}
