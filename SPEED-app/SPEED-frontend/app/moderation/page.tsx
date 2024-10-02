"use client";
import PageTemplate from '../page-template/page';

const Moderation = () => {
    const articles = [
      {
        id: 1,
        title: "Code Review Best Practices",
        author: "John Doe",
        content: "An article about best practices for reviewing code in teams...",
        status: "Pending",
      },
      {
        id: 2,
        title: "Unit Testing Tips",
        author: "Jane Smith",
        content: "A detailed guide on writing effective unit tests for your applications...",
        status: "Pending",
      },
    ];
  
    // Handlers for approving and rejecting articles
    const handleApprove = (id: number) => {
      console.log(`Article ${id} approved`);
      // You can add API call here to approve the article
    };
  
    const handleReject = (id: number) => {
      console.log(`Article ${id} rejected`);
      // You can add API call here to reject the article
    };

    return <PageTemplate pageContent={ 
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Moderation Panel</h1>
  
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="mb-4 text-gray-700">
                <strong>Author:</strong> {article.author}
              </p>
              <p className="mb-4 text-gray-700">
                <strong>Content:</strong> {article.content}
              </p>
              <p className="mb-4 text-gray-700">
                <strong>Status:</strong> {article.status}
              </p>
  
              <div className="flex space-x-4">
                <button
                  onClick={() => handleApprove(article.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(article.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    }/>;
  };
  
  export default Moderation;
  