import { createBrowserRouter } from "react-router-dom";
import Loyout from "./components/loyout/Loyout";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Loyout />,
        children: [

            {
                index: true,
                element: <Home />
            },

            {
                path: "*",
                element: <Home />
            }
        ],
    },
    {
        path: "/admin",
        element: <Admin />,

    },
])