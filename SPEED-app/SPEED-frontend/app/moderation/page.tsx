"use client"; // Declare this file as a Client Component

import React, { useEffect, useState } from 'react';
import PageTemplate from '../page-template/page';
import axios from 'axios';

const Moderation = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082';

  // Fetch pending and rejected articles when the component mounts
  useEffect(() => {
    const fetchPendingAndRejectedArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/books/pending`);
        setArticles(response.data);
      } catch (err) {
        setError('Failed to fetch pending and rejected articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingAndRejectedArticles();
  }, []);

  // Approve article
  const handleApprove = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: true });
      setArticles(prev => prev.filter(article => article._id !== id)); // Remove from list
    } catch (err) {
      setError('Failed to approve article');
    }
  };

  // Reject article
  const handleReject = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/moderate/${id}`, { approve: false });
      setArticles(prev => prev.filter(article => article._id !== id)); // Remove from list
    } catch (err) {
      setError('Failed to reject article');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageTemplate
      pageContent={
        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Moderation Panel</h1>
          <div className="space-y-6">
            {articles.length === 0 ? (
              <p>No articles pending for moderation.</p>
            ) : (
              articles.map((article: any) => (
                <div key={article._id} className="bg-white p-4 rounded shadow">
                  <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                  <p className="mb-4 text-gray-700"><strong>Author:</strong> {article.author}</p>
                  <p className="mb-4 text-gray-700"><strong>Content:</strong> {article.content}</p>
                  <div className="flex space-x-4">
                    <button onClick={() => handleApprove(article._id)} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Approve</button>
                    <button onClick={() => handleReject(article._id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Reject</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      }
    />
  );
};

export default Moderation;
