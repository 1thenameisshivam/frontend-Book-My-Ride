import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./lib/ProtectedRoute.jsx";
import Trips from "./pages/Trips.jsx";
import Signup from "./pages/Signup.jsx";
import { Provider } from "react-redux";
import store from "./lib/Store.js";
import CreateTrip from "./pages/CreateTrip.jsx";
import EditTrip from "./pages/EditTrip.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/trips",
                element: (
                    <ProtectedRoute>
                        <Trips />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/create/trip",
                element: <CreateTrip />,
            },
            {
                path: "/edit/trip/:id",
                element: <EditTrip />,
            },
        ],
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
