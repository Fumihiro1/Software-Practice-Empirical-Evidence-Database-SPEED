import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speed App",
  description: "Software Practice Evidence Empirical Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex h-full bg-gray-100">

          {/* Sidebar */}
          <aside className="bg-gray-800 text-white flex flex-col h-full">
            <div className="p-4 text-2xl font-bold border-b border-gray-600">
              SPEED
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
              <ul>
                <li className="mb-2">
                  <a href="/" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="submit-article" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Submit Article
                  </a>
                </li>
                <li className="mb-2">
                  <a href="view-articles" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    View Articles
                  </a>
                </li>
                <li className="mb-2">
                  <a href="moderation" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Moderation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="manage" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                    Manage
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-y-auto">

            {/* Header */}
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <div className="text-3xl font-bold">
                Welcome to the Software Practice Empirical Evidence Database!
              </div>
            </header>
            <div className="flex-1 p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
