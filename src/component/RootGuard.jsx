import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RouteGuard = ({ children, isPrivate = false }) => {
    const { isAuthenticated } = useAuth();

    // private route + not authenticated -> login
    if (isPrivate && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //  If route is public and user try login or register -> home
    if (!isPrivate && isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Otherwise, allow access
    return children;
};

export default RouteGuard;
