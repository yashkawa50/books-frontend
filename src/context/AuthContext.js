import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState({
        access_token: localStorage.getItem("access_token"),
        refresh_token: localStorage.getItem("refresh_token"),
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAccess = localStorage.getItem("access_token");
        const storedRefresh = localStorage.getItem("refresh_token");
        const storedUser = localStorage.getItem("user");

        if (storedAccess && storedUser) {
            setTokens({
                access_token: storedAccess,
                refresh_token: storedRefresh,
            });
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    //  Login 
    const login = (userData, accessToken, refreshToken) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData));

        setTokens({
            access_token: accessToken,
            refresh_token: refreshToken,
        });
        setUser(userData);
    };

    //  Logout 
    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");

        setTokens({
            access_token: null,
            refresh_token: null,
        });
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                tokens,
                login,
                logout,
                loading,
                isAuthenticated: !!tokens.access_token && !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

//  Custom Hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context) {
        return context;
    }
    console.log("Somethin went wrong with useAuth");
};
