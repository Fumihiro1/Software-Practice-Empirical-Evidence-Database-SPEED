"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';
import PageTemplate from '../page-template/page';

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Render the page content with articles
  return (
    <PageTemplate
      pageContent={
        <div>
          <h1>Articles</h1>
          <ul>
            {articles.map((article:any) => (
              <li key={article.isbn}>
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <p>{article.published_date}</p>
                <p>{article.publisher}</p>
                <p>{article.update_date}</p>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
};

export default Page;
