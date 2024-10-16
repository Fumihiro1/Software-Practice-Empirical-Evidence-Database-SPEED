"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from "react";
import PageTemplate from "../page-template/page";

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8082/api/books");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Handle loading and error states
  if (loading) {
    return (
      <PageTemplate
        pageContent={
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl text-gray-700">Loading articles...</p>
          </div>
        }
      />
    );
  }

  if (error) {
    return (
      <PageTemplate
        pageContent={
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl text-red-500">Error: {error}</p>
          </div>
        }
      />
    );
  }

  // Render the page content with scrollable and dynamic articles
  return (
    <PageTemplate
      pageContent={
        <main className="h-[calc(100vh-80px)] overflow-auto p-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            View Articles
          </h2>
          <p className="text-lg text-gray-800 mb-8 text-center">
            Use SPEED to search and analyze claims about various Software
            Engineering practices.
          </p>

          {/* Scrollable articles section */}
          <div className="space-y-6">
            {articles.map((article: any) => (
              <div
                key={article.isbn}
                className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  {article.title}
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Author:</strong> {article.author}
                </p>
                <p className="text-md text-gray-600 mb-4">
                  {article.description}
                </p>
                <p className="text-md text-gray-600 mb-2">
                  <strong>Published Date:</strong> {article.published_date}
                </p>
                <p className="text-md text-gray-600 mb-2">
                  <strong>Publisher:</strong> {article.publisher}
                </p>
                <p className="text-md text-gray-600">
                  <strong>Updated Date:</strong> {article.update_date}
                </p>
              </div>
            ))}
          </div>
        </main>
      }
    />
  );
};

export default Page;