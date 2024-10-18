"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';
import PageTemplate from '../page-template/page';
import axios from 'axios';

const Page = () => {
  const [articles, setArticles] = useState([]);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageTemplate
      pageContent={
        <main className="p-6 flex-1 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">View Articles</h2>
          <p className="mb-4">
            Use SPEED to search and analyse claims about various Software Engineering practices.
          </p>
          {/* Map through approved articles and render each one */}
          {articles.length === 0 ? (
            <p>No articles to display.</p>
          ) : (
            articles.map((article: any) => (
              <div key={article._id} className="bg-white p-4 rounded shadow mb-4">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="mb-2">
                  <strong>Author:</strong> {article.author || "Unknown"}
                </p>
                <p>{article.description || "No description available"}</p>
                <p>{article.published_date || "No publication date"}</p>
                <p>{article.publisher || "Unknown publisher"}</p>
                <p>{article.updated_date || "No update date"}</p>
              </div>
            ))
          )}
        </main>
      }
    />
  );
};

export default Page;
