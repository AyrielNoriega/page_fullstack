import { createBrowserRouter } from "react-router-dom";

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
