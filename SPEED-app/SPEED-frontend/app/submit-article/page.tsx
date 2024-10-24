"use client"; 
import { useState } from "react";

const SubmitArticle = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_date: "",
    seMethod: "", 
    claim: "", 
    description: "",
    pageRange: "",
    email: "",
  });

  // Options for SE Methods
  const seMethods = [
    'Agile',
    'Scrum',
    'Waterfall',
    'Spiral',
    'V-Model',
    'DevOps',
    'Other'
  ];

  // Options for Claims
  const claims = [
    'Improvement in productivity',
    'Better quality outcomes',
    'Increased team collaboration',
    'Cost savings',
    'Faster delivery times',
    'Other'
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Article submitted successfully!");
        // Reset the form data
        setFormData({
          title: "",
          author: "",
          published_date: "",
          seMethod: "",
          claim: "",
          pageRange: "",
          description: "",
          email: "",
        });
      } else {
        alert("Failed to submit the article. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the article.");
    }
  };

  // Page Content
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit an Article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="published_date">
            Publish Date
          </label>
          <input
            type="date"
            id="published_date"
            name="published_date"
            value={formData.published_date}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="seMethod">
            SE Method
          </label>
          <select
            id="seMethod"
            name="seMethod"
            value={formData.seMethod}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select an SE Method</option>
            {seMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="claim">
            Claim
          </label>
          <select
            id="claim"
            name="claim"
            value={formData.claim}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select a Claim</option>
            {claims.map((claim) => (
              <option key={claim} value={claim}>
                {claim}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="pageRange">
            Page Range
          </label>
          <input
            type="text"
            id="pageRange"
            name="pageRange"
            value={formData.pageRange}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Article
        </button>
      </form>
    </main>
  );
};

export default SubmitArticle;
