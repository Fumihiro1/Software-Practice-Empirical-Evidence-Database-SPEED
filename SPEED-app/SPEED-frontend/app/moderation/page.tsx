"use client";
import PageTemplate from "../page-template/page";

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
      content:
        "A detailed guide on writing effective unit tests for your applications...",
      status: "Pending",
    },
  ];

  const handleApprove = (id: number) => {
    console.log(`Article ${id} approved`);
    // API call to approve article can be added here
  };

  const handleReject = (id: number) => {
    console.log(`Article ${id} rejected`);
    // API call to reject article can be added here
  };

  return (
    <PageTemplate
      pageContent={
        <main className="h-[calc(100vh-80px)] overflow-auto max-w-5xl mx-auto p-10 bg-gradient-to-r from-purple-50 via-white to-blue-50 rounded-3xl shadow-xl mt-12">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Moderation Panel
          </h1>

          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  {article.title}
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>Author:</strong> {article.author}
                </p>
                <p className="text-md text-gray-600 mb-4">
                  <strong>Content:</strong> {article.content}
                </p>
                <p className="text-md text-gray-600 mb-4">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      article.status === "Pending"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {article.status}
                  </span>
                </p>

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => handleApprove(article.id)}
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:translate-y-[-4px] active:shadow-inner active:translate-y-1 transition-all duration-300"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(article.id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:translate-y-[-4px] active:shadow-inner active:translate-y-1 transition-all duration-300"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      }
    />
  );
};

export default Moderation;