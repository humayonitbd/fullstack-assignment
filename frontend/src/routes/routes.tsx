
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/SharedPage/ErrorPage/ErrorPage";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import HelpPage from "../pages/HelpPage/HelpPage";
import Cards from "../pages/Cards/Cards";
import CardDetails from "../pages/Cards/CardDetails";

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
      {
        path:"/cards",
        element: <Cards />,
      },
      {
        path:"/cards/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
