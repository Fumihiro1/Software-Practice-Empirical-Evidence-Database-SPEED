import React from "react";
import PageTemplate from "./page-template/page";
import { FaSearch, FaRegFileAlt, FaSignInAlt, FaPenAlt } from "react-icons/fa"; // Adding icons

const Page = () => {
  return (
    <PageTemplate
      pageContent={
        <main className="max-w-7xl mx-auto p-12 bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-3xl shadow-2xl mt-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-10 tracking-tight text-center">
            Get Help with Software Engineering Evidence Claims
          </h2>
          <p className="text-2xl text-gray-800 mb-12 text-center">
            Participate in our community and use SPEED to search and analyze
            claims about various Software Engineering practices.
          </p>

          {/* Advanced Grid Layout */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Viewing Evidence Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl transition-transform hover:shadow-2xl hover:scale-105">
              <FaRegFileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Viewing Evidence
              </h3>
              <p className="text-lg text-gray-700">
                Use the sidebar to explore different coding practices, as well
                as articles that support or refute various claims.
              </p>
            </div>

            {/* Add Your Evidence Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl transition-transform hover:shadow-2xl hover:scale-105">
              <FaPenAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Add Your Evidence
              </h3>
              <p className="text-lg text-gray-700">
                Add your own evidence that supports or refutes claims by using
                the "Submit Article" button on the sidebar.
              </p>
            </div>

            {/* Search Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl transition-transform hover:shadow-2xl hover:scale-105">
              <FaSearch className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Search
              </h3>
              <p className="text-lg text-gray-700">
                Search for specific keywords using the search bar at the top
                right of the page.
              </p>
            </div>
          </div>
        </main>
      }
    />
  );
};

export default Page;