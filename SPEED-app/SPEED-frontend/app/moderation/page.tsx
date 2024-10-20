"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Book } from "../books"; 

const Moderation = () => {
  const [pendingArticles, setPendingArticles] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingArticleIds, setLoadingArticleIds] = useState<string[]>([]); // Track loading states for individual articles

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

  // Fetch pending articles when the component mounts
  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/books/pending`);  // Fetch only pending articles
        setPendingArticles(response.data);
      } catch (error) {
        setError('Error fetching pending articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingArticles();
  }, []);

  // Handle approval
  const handleApprove = async (id: string) => {
    setLoadingArticleIds((prev) => [...prev, id]); // Add article ID to loading states
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: true });
      setPendingArticles(pendingArticles.filter((article) => article._id !== id));
      alert("Article approved!");
    } catch (err) {
      alert("Failed to approve the article.");
    } finally {
      setLoadingArticleIds((prev) => prev.filter((articleId) => articleId !== id)); // Remove from loading states
    }
  };

  // Handle rejection
  const handleReject = async (id: string) => {
    setLoadingArticleIds((prev) => [...prev, id]); // Add article ID to loading states
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: false });
      setPendingArticles(pendingArticles.filter((article) => article._id !== id));
      alert("Article rejected!");
    } catch (err) {
      alert("Failed to reject the article.");
    } finally {
      setLoadingArticleIds((prev) => prev.filter((articleId) => articleId !== id)); // Remove from loading states
    }
  };

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Moderation Panel</h1>

      {pendingArticles.length === 0 ? (
        <p>No articles to moderate.</p>
      ) : (
        pendingArticles.map((article) => (
          <div key={article._id} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p><strong>Author:</strong> {article.author}</p>
            <p>{article.description}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleApprove(article._id)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                disabled={loadingArticleIds.includes(article._id)} // Disable button during loading
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(article._id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                disabled={loadingArticleIds.includes(article._id)} // Disable button during loading
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
};

export default Moderation;
