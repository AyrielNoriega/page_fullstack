import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { Main } from "../containers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/*",
                element: <Navigate to="/" />,
            },
        ]
    },
]);



export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}
