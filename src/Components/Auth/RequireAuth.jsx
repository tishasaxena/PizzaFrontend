import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import axiosInstance from "../../Helpers/axiosInstance";
import { login as loginAction } from "../../Redux/Slices/AuthSlice";

// Pass requiredRole as a prop for admin routes
function RequireAuth({ requiredRole }) {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await axiosInstance.get("/auth/check", {
                    withCredentials: true
                });
                dispatch(loginAction({ 
                    data: response.data.data.user 
                }));
            } catch (error) {
                console.error("Auth check failed:", error);
            } finally {
                setLoading(false);
            }
        };

        checkLogin();
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;

    // If requiredRole is set, check user role
    if (!isLoggedIn) return <Navigate to="/auth/login" />;
    if (requiredRole && user?.role !== requiredRole) return <Navigate to="/denied" />;

    return <Outlet />;
}

export default RequireAuth;
