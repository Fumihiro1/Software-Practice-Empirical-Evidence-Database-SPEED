"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


interface Article {
  _id: string;
  title: string;
  author: string;
}

const DeletedArticlesPage = () => {
  
  const [deletedArticles, setDeletedArticles] = useState<Article[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8082";

  // Fetch deleted articles for admin view
  useEffect(() => {
    const fetchDeletedArticles = async () => {
      try {
        const response = await axios.get<Article[]>(`${apiUrl}/api/books/deleted`); // Explicitly specify the type of the response
        setDeletedArticles(response.data);
      } catch (err) {
        setError("Failed to fetch deleted articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeletedArticles();
  }, [apiUrl]);

  // Handle restore article
  const handleRestore = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/restore/${id}`);
      setDeletedArticles(deletedArticles.filter(article => article._id !== id));  // Remove the restored article from the deleted list
      alert("Article restored successfully!");
    } catch (err) {
      alert("Failed to restore the article.");
    }
  };

  if (loading) return <p>Loading deleted articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Deleted Articles</h1>
      {deletedArticles.length === 0 ? (
        <p>No deleted articles found.</p>
      ) : (
        deletedArticles.map((article) => (
          <div key={article._id} className="bg-gray-200 p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="mb-2"><strong>Author:</strong> {article.author}</p>
            <p>This article has been deleted by the admin.</p>
            <button
              onClick={() => handleRestore(article._id)}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Restore
            </button>
          </div>
        ))
      )}
    </main>
  );
};

export default DeletedArticlesPage;
