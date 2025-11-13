import { createContext, useContext, useState } from "react";
import api from "../api/axios";

// Books Context
const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/books");
            setBooks(response?.data?.books || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addBook = async (bookData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post("/books", bookData);
            const { newBook } = response?.data
            setBooks(prev => [...prev, newBook]);
            return newBook;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <BooksContext.Provider value={{ books, loading, error, fetchBooks, addBook }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => {
    const context = useContext(BooksContext);
    if (context) {
        return context;
    }
    console.log("Something with wrong with useBooks hook");
};