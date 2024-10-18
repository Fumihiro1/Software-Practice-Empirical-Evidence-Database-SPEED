const Page = () => {
  return (
    <main className = "p-6 flex-1 bg-gray-100">
     <h2 className="text-2xl font-semibold mb-4">
       Get help with Software Engineering evidence claims by participating in our community!
     </h2>
     <p className="mb-4">
       Use SPEED to search and analyse claims about various Software Engineering practices.
     </p>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Use the App</h3>
       <p>Use the side bar to explore different coding practices, as well as articles that support or refute different claims.</p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Submit Article</h3>
       <p>Propose your own article to add to the database</p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">View Articles</h3>
       <p>View all relevant articles in the datbase</p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Moderation</h3>
       <p>Approve and Reject suggested articles</p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Manage</h3>
       <p>Manage the approval/rejection status of all the articles in the database</p>
     </div>
   </main>
  );
}

export default Page;