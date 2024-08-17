
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/SharedPage/ErrorPage/ErrorPage";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import HelpPage from "../pages/HelpPage/HelpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HelpPage />,
      },
    ],
  },
]);

export default router;
