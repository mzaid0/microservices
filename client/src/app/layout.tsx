import { Background } from "@/components/ui/background";
import type { Metadata } from "next";
import "./style/globals.css";

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
            <body>
                <Background />
                <div className="min-h-screen flex flex-col">
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
