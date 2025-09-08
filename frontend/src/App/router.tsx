import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "../pages/Home/Home";
import UsersPage from "../pages/Users/UsersPage";
import PostsPage from "../pages/Posts/PostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
    ],
  },
]);

export default router;