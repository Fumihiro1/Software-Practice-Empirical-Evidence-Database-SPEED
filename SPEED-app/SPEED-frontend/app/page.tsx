import react from 'react';

const Page = () => {
  return (
    <div className = "flex h-screen">

      {/* Sidebar */}
      <aside className = "w-1/14 bg-gray-800 text-white flex flex-col">
        <div className = "p-4 text-2xl font-bold border-b border-grat-600">
          SPEED
        </div>

        <nav className="flex-1 p-4">
          <ul>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Home
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Log in
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Submit Article
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Search Articles
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Moderation
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Analysis
              </a>
            </li>
            <li className = "mb-2">
              <a href = "#" className = "text-white hover: bg-gray-600 block py-2 px-3 rounded">
                Controls
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className = "bg-gray-900 text-white p-4 flex justify-between items-center">
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

        {/* Content */}
        <main className = "p-6 flex-1 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            Get help with Software Engineering evidence claims by participating in our community!
          </h2>
          <p className="mb-4">
            Use SPEED to search and analyse claims about various Software Engineering practices.
          </p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-x1 font-semibold mb-2">Viewing Evidence:</h3>
            <p>
              Use the side bar to explore different coding practices, as well as articles that support or refute different claims.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-x1 font-semibold mb-2">Add your evidence:</h3>
            <p>
              Add your own evidence that supports or refutes claims in the "submit article" button on the sidebar
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-x1 font-semibold mb-2">Search:</h3>
            <p>
              Search for specific keywords in the searchbar on the top right
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-x1 font-semibold mb-2">Log in:</h3>
            <p>
              Log in to your account using the log in button on the side bar
            </p>
          </div>
        </main>
      </div>

    </div>
  )
}

export default Page;