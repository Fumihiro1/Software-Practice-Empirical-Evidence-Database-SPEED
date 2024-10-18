"use client"
import { useState } from 'react';

const ManageSPEED = () => {

    // State to manage loading and error messages (optional)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const ClearDatabase = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch("http://localhost:8082/api/books", {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Database cleared successfully!");
            } else {
                throw new Error("Failed to clear the database.");
            } 
        } catch (error) {
            const typedError = error as Error;
            setError(typedError.message);
            console.error("Error:", error);
            alert("An error occurred while clearing the database.");
        } finally {
            setLoading(false);
        }
    };

    const addSamples = () => {
        
    };
    
    // Page Content
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="bg-white p-4 rounded shadow mb-4">
                <h3 className="text-x1 font-semibold mb-2">Add Samples to Database</h3>
                <p className="mb-4">
                    Add 5 sample entries to the database, 2 pre-approved, 2 approved and 1 rejected.
                </p>
                <button className="text-white py-2 px-4 rounded bg-gray-500"
                    onClick={() => addSamples()}>
                    Add Samples
                </button>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
                <h3 className="text-x1 font-semibold mb-2">Reset Database</h3>
                <p className="mb-4">
                    !! This action cannot be undone !!
                </p>
                <button className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={() => ClearDatabase()}
                    disabled={loading} // Disable the button while loading
                > 
                    {loading ? "Clearing Database..." : "Clear Database"}
                </button>
            </div>
            
        </main>
    );
}

export default ManageSPEED;
