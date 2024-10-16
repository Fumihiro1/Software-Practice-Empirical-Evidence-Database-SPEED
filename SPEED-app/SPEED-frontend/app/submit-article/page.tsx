"use client";

import { useState, useEffect } from "react";
import PageTemplate from "../page-template/page";

const SubmitArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
    updated_date: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Slight delay to make the fade-in effect noticeable
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        setFormData({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          updated_date: "",
        });
      } else {
        alert("Failed to submit the article. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the article.");
    }
  };

  return (
    <PageTemplate
      pageContent={
        <main
          className={`max-w-5xl mx-auto mt-12 p-10 bg-gradient-to-r from-purple-50 via-white to-blue-50 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-12 tracking-tighter">
            Submit Your Article
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.title ? "scale-90 -translate-y-6 text-blue-500" : ""
                }`}
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the title"
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.isbn ? "scale-90 -translate-y-6 text-blue-500" : ""
                }`}
                htmlFor="isbn"
              >
                ISBN
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="Enter the ISBN number"
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.author ? "scale-90 -translate-y-6 text-blue-500" : ""
                }`}
                htmlFor="author"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter the author's name"
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.published_date
                    ? "scale-90 -translate-y-6 text-blue-500"
                    : ""
                }`}
                htmlFor="published_date"
              >
                Publish Date
              </label>
              <input
                type="date"
                id="published_date"
                name="published_date"
                value={formData.published_date}
                onChange={handleChange}
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.publisher
                    ? "scale-90 -translate-y-6 text-blue-500"
                    : ""
                }`}
                htmlFor="publisher"
              >
                Publisher
              </label>
              <input
                type="text"
                id="publisher"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                placeholder="Enter the publisher's name"
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="flex flex-col relative group">
              <label
                className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                  formData.updated_date
                    ? "scale-90 -translate-y-6 text-blue-500"
                    : ""
                }`}
                htmlFor="updated_date"
              >
                Updated Date
              </label>
              <input
                type="date"
                id="updated_date"
                name="updated_date"
                value={formData.updated_date}
                onChange={handleChange}
                className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                required
              />
            </div>

            <div className="col-span-2">
              <div className="relative flex flex-col group">
                <label
                  className={`block text-lg font-medium text-gray-700 mb-2 transition-all duration-300 ease-in-out transform group-focus-within:scale-90 group-focus-within:-translate-y-6 ${
                    formData.description
                      ? "scale-90 -translate-y-6 text-blue-500"
                      : ""
                  }`}
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Enter the article description"
                  className="block w-full p-4 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow duration-200 shadow-sm hover:shadow-lg"
                  required
                />
              </div>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-transform duration-300"
              >
                Submit Article
              </button>
            </div>
          </form>
        </main>
      }
    />
  );
};

export default SubmitArticle;