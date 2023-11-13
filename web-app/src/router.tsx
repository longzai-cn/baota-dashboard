import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServersPage from "./pages/ServersPage";
import WebsitesPage from "./pages/WebsitesPage";
import DomainsPage from "./pages/DomainsPage";
import LogsPage from "./pages/LogsPage";
import PageLayout from "./common/PageLayout";
import config from "./config";

const routes = [
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/servers",
        element: <ServersPage />,
      },
      {
        path: "/websites",
        element: <WebsitesPage />,
      },
      {
        path: "/domains",
        element: <DomainsPage />,
      },
      {
        path: "/logs",
        element: <LogsPage />,
      },
    ],
  },
]

const router = config.githubPages ? createHashRouter(routes): createBrowserRouter(routes);

export default router;
