"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
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
      <main className="p-6 flex-1 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          View Articles
        </h2>
        <p className="mb-4">
          Use SPEED to search and analyse claims about various Software Engineering practices.
        </p>
        <p className="mb-4 text-gray-400">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6 flex-1 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          View Articles
        </h2>
        <p className="mb-4">
          Use SPEED to search and analyse claims about various Software Engineering practices.
        </p>
        <p className="mb-4 text-red-500">An error occured while loading articles</p>
      </main>
    );
  }

  // Render the page content with articles
  return (
    <main className = "p-6 flex-1 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">
          View Articles
      </h2>
      <p className="mb-4">
          Use SPEED to search and analyse claims about various Software Engineering practices.
      </p>
      {/* Map through articles and render each one */}
      {articles.map((article:any) => (
          <div key={article.isbn} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
          <p className="mb-2"><strong>Author:</strong> {article.author}</p>
          <p>{article.description}</p>
          <p>{article.published_date}</p>
          <p>{article.publisher}</p>
          <p>{article.update_date}</p>
          </div>
        ))}
    </main>
  );
};

export default Page;
