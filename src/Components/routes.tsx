import App from "../App";
import Profile from "./Profile";
import Shop from "./Shop";

const routes = [
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "shop",
        element: <Shop />,
    }
];

export default routes;