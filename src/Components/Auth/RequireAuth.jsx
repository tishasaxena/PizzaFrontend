import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import axiosInstance from "../../Helpers/axiosInstance"; // adjust path
import { login as loginAction } from "../../Redux/Slices/AuthSlice"; // adjust import

function RequireAuth() {
    const { isLoggedIn } = useSelector((state) => state.auth);
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
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default RequireAuth;
