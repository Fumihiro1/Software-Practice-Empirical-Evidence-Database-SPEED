import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speed App",
  description: "Software Practice Evidence Emprical Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold border-b border-gray-600">
              SPEED
            </div>
            <nav className="flex-1 p-4">
              <ul>
                <li className="mb-2">
                  <Link href="/" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/login" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Log in
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="./submit-article" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Submit Article
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/search-articles" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Search Articles
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="./moderation" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Moderation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/analysis" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Analysis
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/controls" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Controls
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
