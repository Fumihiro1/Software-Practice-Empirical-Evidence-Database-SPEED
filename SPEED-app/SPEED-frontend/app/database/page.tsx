"use client"; 

import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [loading, setLoading] = useState(false); // State to track loading

  // Function to handle deleting all books
  const handleDeleteAll = async () => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.delete('http://localhost:8082/api/books');
      alert(response.data.message);
    } catch (error) {
      alert('Error deleting all books');
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  // Function to add 10 sample articles
  const handleAddSampleArticles = async () => {
    setLoading(true); // Set loading to true
    const sampleArticles = [
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        published_date: '1999-10-20',
        seMethod: 'Agile',
        claim: 'Better quality outcomes',
        description: 'A guide to help software developers understand their craft and improve their skills.',
        pageRange: '1-368',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        published_date: '2008-08-11',
        seMethod: 'Agile',
        claim: 'Better quality outcomes',
        description: 'This book emphasizes the importance of writing clean, understandable code.',
        pageRange: '1-464',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
        published_date: '1994-10-31',
        seMethod: 'Other',
        claim: 'Better quality outcomes',
        description: 'A seminal work that introduces various design patterns used in software development.',
        pageRange: '1-395',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Refactoring: Improving the Design of Existing Code',
        author: 'Martin Fowler',
        published_date: '1999-07-08',
        seMethod: 'Other',
        claim: 'Better quality outcomes',
        description: 'This book provides a detailed methodology for refactoring code safely and effectively.',
        pageRange: '1-431',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation',
        author: 'Jez Humble and David Farley',
        published_date: '2010-07-02',
        seMethod: 'V-Model',
        claim: 'Other',
        description: 'A comprehensive guide on practices and tools for continuous delivery.',
        pageRange: '1-464',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'The Mythical Man-Month: Essays on Software Engineering',
        author: 'Frederick P. Brooks Jr.',
        published_date: '1975-01-01',
        seMethod: 'Other',
        claim: 'Other',
        description: 'A collection of essays on software project management and the complexities of development.',
        pageRange: '1-322',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'You Don’t Know JS: Scope & Closures',
        author: 'Kyle Simpson',
        published_date: '2014-05-08',
        seMethod: 'Other',
        claim: 'Other',
        description: 'This book dives deep into JavaScript’s scope and closure concepts.',
        pageRange: '1-162',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
        author: 'Gene Kim, Kevin Behr, and George Spafford',
        published_date: '2013-01-15',
        seMethod: 'DevOps',
        claim: 'Improvement in productivity',
        description: 'A novel that illustrates the principles of DevOps through a fictional story.',
        pageRange: '1-432',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Extreme Programming Explained: Embrace Change',
        author: 'Kent Beck',
        published_date: '1999-08-01',
        seMethod: 'Extreme Programming',
        claim: 'Better Quality Outcomes',
        description: 'An introduction to Extreme Programming and its principles for improving software quality.',
        pageRange: '1-224',
        email: 'xhq3147@autuni.ac.nz',
      },
      {
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        published_date: '2004-08-01',
        seMethod: 'Other',
        claim: 'Other',
        description: 'This book provides insight into managing complexity in software through domain modeling.',
        pageRange: '1-560',
        email: 'xhq3147@autuni.ac.nz',
      },
    ];

    try {
      await Promise.all(
        sampleArticles.map(async (article) => {
          const response = await axios.post('http://localhost:8082/api/books', article);
          return response.data;
        })
      );
      alert('Sample articles added successfully!');
    } catch (error) {
      alert('Error adding sample articles');
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  return (
    <div>
      <h1 className ="text-3xl font-bold mb-6">Database Controls</h1>
      <p className="mb-4">Clear Database</p>
      <button 
          onClick={handleDeleteAll}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mb-4"
          disabled={loading} // Disable button if loading
      >
      Clear Database
      </button>
      <p className="mb-4">Add 10 Sample Articles to database</p>
      <button 
          onClick={handleAddSampleArticles}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          disabled={loading} // Disable button if loading
      >
        Add Sample Articles
      </button>
    </div>
  );
};

export default Admin;
