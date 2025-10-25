
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
}