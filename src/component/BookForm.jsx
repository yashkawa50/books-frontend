import { useState } from "react";
import { useBooks } from "../context/BookContext";
import { Plus } from "lucide-react";
import { Alert } from "./Alert";
import { useNavigate } from "react-router-dom";

export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { addBook } = useBooks();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError('');

        if (!title || !author) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            await addBook({ title, author });
            setTitle('');
            setAuthor('');
            alert('Book added successfully');
        } catch (err) {
            setError(err?.message || err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 w-full max-w-md shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
                    <Plus className="w-6 h-6 mr-2 text-white" />
                    Add New Book
                </h3>

                {error && <Alert message={error} onClose={() => setError('')} />}

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                            Book Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
                            placeholder="Enter book title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
                            placeholder="Enter author name"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Add Book'}
                    </button>

                    <button
                        onClick={() => navigate('/books')}
                        disabled={loading}
                        className="w-full bg-neutral-800 text-white font-medium py-2 rounded-lg hover:bg-neutral-700 border border-neutral-600 transition duration-200 disabled:opacity-50"
                    >
                        Book List
                    </button>
                </div>
            </div>
        </div>
    );
};
