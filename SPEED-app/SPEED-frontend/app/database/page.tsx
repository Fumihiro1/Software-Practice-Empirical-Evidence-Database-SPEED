"use client"; 

import React from 'react';
import axios from 'axios';

const Admin = () => {
  
  const handleDeleteAll = async () => {
    try {
      const response = await axios.delete('http://localhost:8082/api/books');
      alert(response.data.message);
    } catch (error) {
      alert('Error deleting all books');
    }
  };

  return (
    <div>
        <h1 className ="text-3xl font-bold mb-6">Database Controls</h1>

        <button 
            onClick={() => handleDeleteAll()}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
            Clear Database
        </button>
    </div>
  );
};

export default Admin;
