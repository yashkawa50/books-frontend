import { BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

// Book List Component
export const BookList = () => {
  const { books, loading, error, fetchBooks } = useBooks();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    console.log("Error:", error?.message || error);
    return (
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <h1 className="text-red-600 font-semibold text-xl">
          Something went wrong
        </h1>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
        <div className="text-center py-12 bg-white rounded-lg shadow-md w-[400px]">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-6">No books found!</p>
          <button
            onClick={() => navigate("/add-book")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg w-full transition"
          >
            Add Book →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-indigo-600 text-white">
          <h3 className="text-xl font-semibold">
            Book Collection ({books.length})
          </h3>
        </div>

        {/* Book List */}
        <div className="overflow-y-auto max-h-[70vh]">
          {books.map((book, index) => (
            <div
              key={book._id || index}
              className="p-6 border-b hover:bg-gray-50 last:border-none"
            >
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h4>
                  <p className="text-gray-600 mt-1">by {book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <button
            onClick={() => navigate("/add-book")}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
          >
            + Add New Book
          </button>
        </div>
      </div>
    </div>
  );
};
