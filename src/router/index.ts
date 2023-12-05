import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import Layout from "../components/Layout";
import PathConstants from "../views/PathConstants";
import ErrorPage from "../views/ErrorPage";
import { lazy } from "react";

const router = createBrowserRouter([
    {
        Component: Layout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: PathConstants.HOME,
                Component: HomePage,
            },
            {
                path: PathConstants.KCLICKER,
                Component: lazy(() => import("../views/KClicker/KClicker")),
            },
            
        ]
    }
])

export default router