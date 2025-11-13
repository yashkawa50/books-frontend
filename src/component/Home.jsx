import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[100vh] bg-black flex flex-col items-center justify-center">
            <h1 className="text-center text-white text-[50px] mb-5">
                Welcome to our book store
            </h1>
            <img
                src="/bg.png"
                alt="Book Store"
                className="w-[500px] h-auto shadow-lg mb-6"
            />

            <div className="flex gap-4">
                <button
                    onClick={() => navigate("/books")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                >
                    Book List 
                </button>
                <button
                    onClick={() => navigate("/add-book")}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
                >
                    Book Form
                </button>
            </div>
        </div>
    );
};

export default Home;
