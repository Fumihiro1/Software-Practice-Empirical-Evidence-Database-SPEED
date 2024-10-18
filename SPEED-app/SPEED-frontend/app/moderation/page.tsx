"use client";
import React, { useEffect, useState } from "react";
import PageTemplate from '../page-template/page';
import axios from 'axios';

const Moderation = () => {
  const [pendingArticles, setPendingArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

  // Fetch pending articles when the component mounts
  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/books/pending`);  // Fetch only pending articles
        setPendingArticles(response.data);
      } catch (err) {
        setError('Failed to fetch pending articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingArticles();
  }, []);

  // Handle approval
  const handleApprove = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: true });
      // Remove the approved article from the pending list
      setPendingArticles(pendingArticles.filter((article) => article._id !== id));
      alert("Article approved!");
    } catch (err) {
      alert("Failed to approve the article.");
    }
  };

  // Handle rejection
  const handleReject = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: false });
      // Remove the rejected article from the pending list
      setPendingArticles(pendingArticles.filter((article) => article._id !== id));
      alert("Article rejected!");
    } catch (err) {
      alert("Failed to reject the article.");
    }
  };

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageTemplate
      pageContent={
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
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(article._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      }
    />
  );
};

export default Moderation;
