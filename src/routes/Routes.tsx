import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/HomePage/HomePage';
import Work from '../pages/WorkPage/WorkPage';
import App from '../App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/development", element: <Home /> },
            { path: "/development/work/:id", element: <Work /> },
        ],
    },
]);
