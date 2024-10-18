"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

  // Fetch approved articles when the component mounts
  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/books/approved`);
        setArticles(response.data);
      } catch (err) {
        setError('Failed to fetch approved articles');
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedArticles();
  }, []);

  // Handle loading and error states
  if (loading) {
    return (
      <main className="p-6 flex-1 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          View Books
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
          View Books
        </h2>
        <p className="mb-4">
          Use SPEED to search and analyse claims about various Software Engineering practices.
        </p>
        <p className="mb-4 text-red-500">An error occured while loading books</p>
      </main>
    );
  }

  // Render the page content with books
  return (
    <main className = "p-6 flex-1 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">
          View Books
      </h2>
      <p className="mb-4">
          Use SPEED to search and analyse claims about various Software Engineering practices.
      </p>
      {/* Map through books and render each one */}
      {books.map((article:any) => (
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