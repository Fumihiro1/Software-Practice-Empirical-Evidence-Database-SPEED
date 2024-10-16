import React from "react";

const PageTemplate = ({ pageContent }: { pageContent: React.JSX.Element }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          SPEED
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },

              { label: "Submit Article", href: "/submit-article" },
              { label: "View Articles", href: "/view-articles" },
              { label: "Moderation", href: "/moderation" },
              { label: "Analysis", href: "/analysis" },
              { label: "Controls", href: "/controls" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-3 rounded-md text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
          <div className="text-2xl font-bold">
            Welcome to the Software Practice Empirical Evidence Database!
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black p-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 flex-grow">{pageContent}</main>
      </div>
    </div>
  );
};

export default PageTemplate;