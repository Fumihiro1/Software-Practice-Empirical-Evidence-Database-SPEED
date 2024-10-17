import react from 'react';

const Page = ({ pageContent }: { pageContent: React.JSX.Element }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-1/14 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-grat-600">
          SPEED
        </div>

        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <a href="" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="login" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Log in
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
              <a href="adminPage" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Admin
              </a>
            </li>
            <li className="mb-2">
              <a href="analysis" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Analysis
              </a>
            </li>
            <li className="mb-2">
              <a href="deletedArticles" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Deleted Articles
              </a>
            </li>

            <li className="mb-2">
              <a href="controls" className="text-white hover:bg-gray-600 block py-2 px-3 rounded">
                Controls
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div className="text-3xl font-bold">
            Welcome to the Software Practive Empirical Evidence Database!
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </header>

        <div>
          {pageContent}
        </div>
      </div>
    </div>
  )
}

export default Page;