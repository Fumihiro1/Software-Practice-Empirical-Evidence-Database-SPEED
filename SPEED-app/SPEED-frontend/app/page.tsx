import react from 'react';
import PageTemplate from './page-template/page';

const Page = () => {
  return <PageTemplate pageContent={
    <main className = "p-6 flex-1 bg-gray-100">
     <h2 className="text-2xl font-semibold mb-4">
       Get help with Software Engineering evidence claims by participating in our community!
     </h2>
     <p className="mb-4">
       Use SPEED to search and analyse claims about various Software Engineering practices.
     </p>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Viewing Evidence:</h3>
       <p>
         Use the side bar to explore different coding practices, as well as articles that support or refute different claims.
       </p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Add your evidence:</h3>
       <p>
         Add your own evidence that supports or refutes claims in the "submit article" button on the sidebar
       </p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Search:</h3>
       <p>
         Search for specific keywords in the searchbar on the top right
       </p>
     </div>
     <div className="bg-white p-4 rounded shadow mb-4">
       <h3 className="text-x1 font-semibold mb-2">Log in:</h3>
       <p>
         Log in to your account using the log in button on the side bar
       </p>
     </div>
   </main>
  }/>;
}

export default Page;
