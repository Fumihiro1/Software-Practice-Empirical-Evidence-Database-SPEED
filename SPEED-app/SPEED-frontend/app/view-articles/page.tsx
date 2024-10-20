"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating'; // Import the updated StarRating component

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle loading and error states
  if (loading) {
    return (
      <main className="p-8 flex-1 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">View Books</h2>
        <p className="mb-4 text-gray-600">
          Use SPEED to search and analyse claims about various Software Engineering practices.
        </p>
        <div className="flex justify-center items-center">
          <div className="loader" />
          <p className="mb-4 text-gray-400">Loading...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8 flex-1 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">View Books</h2>
        <p className="mb-4 text-gray-600">
          Use SPEED to search and analyse claims about various Software Engineering practices.
        </p>
        <p className="mb-4 text-red-500 font-bold">An error occurred while loading books</p>
      </main>
    );
  }

  // Render the page content with books
  return (
    <main className="p-8 flex-1 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">View Books</h2>
      <p className="mb-6 text-gray-600">
        Use SPEED to search and analyse claims about various Software Engineering practices.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
            <p className="mb-2"><strong>Author:</strong> {article.author}</p>
            <p><strong>SE Method:</strong> {article.seMethod}</p>
            <p><strong>Claim:</strong> {article.claim}</p>
            <p><strong>Page Range:</strong> {article.pageRange}</p>
            <p className="mt-4 text-gray-700">{article.description}</p>
            <p className="mt-4 text-sm text-gray-500">
              <strong>Published Date:</strong> {formatDate(article.published_date)}
            </p>
            {/* Include the StarRating component */}
          <StarRating
            initialRating={0} // You can modify this to use an existing rating if available
            onRatingChange={(newRating) => {
              console.log(`Rating for ${article.title}: ${newRating}`);
              // Here you can handle saving the rating if needed
            }}
          />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
