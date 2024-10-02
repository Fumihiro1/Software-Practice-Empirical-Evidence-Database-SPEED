
const SubmitArticle = () => {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit an Article</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Article Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Article Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="evidence">
            Date of Publish
          </label>
          <textarea
            id="evidence"
            name="evidence"
            rows={1}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="author">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
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
}

export default SubmitArticle;
