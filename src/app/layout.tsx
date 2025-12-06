import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/provider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EventEase",
  description: "Platform penjualan tiket konser termudah",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
             <div className="container mx-auto px-4 flex-1 flex flex-col">
                <main className="flex-1 py-6">
                  {children}
                </main>
             </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
