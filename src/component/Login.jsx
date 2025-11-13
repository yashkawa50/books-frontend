import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // Simple validation
            if (!email || !password) {
                setError("Please enter email and password");
                return;
            }

            const response = await api.post("/login", { email, password });
            const { accessToken, refreshToken, user } = response.data
            login(user, accessToken, refreshToken);
            navigate("/"); // redirect to home after login
        } catch (error) {
            console.log("err", error?.message || error);
            setError(error?.message || error);
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-black mb-6">
                    Login
                </h2>

                {error && (
                    <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                    <span
                        onClick={() => navigate("/register")}
                        className="text-black text-center font-semibold cursor-pointer hover:underline"
                    >
                        Register
                    </span>
                </form>

            </div>
        </div>
    );
};

export default Login;
