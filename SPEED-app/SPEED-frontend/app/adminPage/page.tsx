"use client";
import React, { useEffect, useState } from "react";
import PageTemplate from "../page-template/page";
import axios from "axios";

const AdminPage = () => {
  const [approvedArticles, setApprovedArticles] = useState([]);
  const [rejectedArticles, setRejectedArticles] = useState([]);
  const [deletedArticles, setDeletedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8082";

  // Fetch all necessary articles for the admin view
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch approved articles
        const approvedResponse = await axios.get(`${apiUrl}/api/books/approved`);
        setApprovedArticles(approvedResponse.data);

        // Fetch rejected articles
        const rejectedResponse = await axios.get(`${apiUrl}/api/books/rejected`);
        setRejectedArticles(rejectedResponse.data);

        // Fetch deleted articles
        const deletedResponse = await axios.get(`${apiUrl}/api/books/deleted`);
        setDeletedArticles(deletedResponse.data);
      } catch (err) {
        setError("Failed to fetch articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Handle delete article
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}/api/books/${id}`);
      // Remove the deleted article from the approved articles list
      setApprovedArticles(approvedArticles.filter((article) => article._id !== id));
      // Refetch the deleted articles to update the deleted list
      const updatedDeletedArticles = await axios.get(`${apiUrl}/api/books/deleted`);
      setDeletedArticles(updatedDeletedArticles.data);
      alert("Article deleted successfully!");
    } catch (err) {
      alert("Failed to delete the article.");
    }
  };

  // Handle accept rejected article
  const handleAcceptRejected = async (id: string) => {
    try {
      await axios.post(`${apiUrl}/api/books/accept/${id}`);
      // Remove the accepted article from the rejected articles list
      setRejectedArticles(rejectedArticles.filter((article) => article._id !== id));
      alert("Article accepted successfully!");
    } catch (err) {
      alert("Failed to accept the rejected article.");
    }
  };

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageTemplate
      pageContent={
        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

          {/* Flexbox container to display columns side by side */}
          <div className="flex flex-wrap space-x-4">

            {/* Approved Articles Section */}
            <section className="flex-1 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Approved Articles</h2>
              {approvedArticles.length === 0 ? (
                <p>No approved articles found.</p>
              ) : (
                approvedArticles.map((article: any) => (
                  <div key={article._id} className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="mb-2"><strong>Author:</strong> {article.author || "Unknown"}</p>
                    <p>{article.description || "No description available"}</p>
                    <p>{article.published_date || "No publication date"}</p>
                    <p>{article.publisher || "Unknown publisher"}</p>
                    <p>{article.updated_date || "No update date"}</p>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </section>

            {/* Rejected Articles Section */}
            <section className="flex-1 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Rejected Articles</h2>
              {rejectedArticles.length === 0 ? (
                <p>No rejected articles found.</p>
              ) : (
                rejectedArticles.map((article: any) => (
                  <div key={article._id} className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="mb-2"><strong>Author:</strong> {article.author || "Unknown"}</p>
                    <button
                      onClick={() => handleAcceptRejected(article._id)}
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                  </div>
                ))
              )}
            </section>

            {/* Deleted Articles Section */}
            <section className="flex-1 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Deleted Articles</h2>
              {deletedArticles.length === 0 ? (
                <p>No deleted articles found.</p>
              ) : (
                deletedArticles.map((article: any) => (
                  <div key={article._id} className="bg-gray-200 p-4 rounded shadow mb-4">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="mb-2"><strong>Author:</strong> {article.author || "Unknown"}</p>
                    <p>This article has been deleted by the admin.</p>
                  </div>
                ))
              )}
            </section>
          </div>
        </main>
      }
    />
  );
};

export default AdminPage;
