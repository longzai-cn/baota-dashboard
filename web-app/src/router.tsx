import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServersPage from "./pages/ServersPage";
import WebsitesPage from "./pages/WebsitesPage";
import DomainsPage from "./pages/DomainsPage";
import LogsPage from "./pages/LogsPage";
import PageLayout from "./common/PageLayout";

const prefix = '' // process.env.NODE_ENV === 'GITHUB_PAGES' ? '/baota-dashboard' : ''

const routes = [
  {
    element: <PageLayout />,
    children: [
      {
        path: prefix + "/",
        element: <HomePage />,
      },
      {
        path: prefix + "/servers",
        element: <ServersPage />,
      },
      {
        path: prefix + "/websites",
        element: <WebsitesPage />,
      },
      {
        path: prefix + "/domains",
        element: <DomainsPage />,
      },
      {
        path: prefix + "/logs",
        element: <LogsPage />,
      },
    ],
  },
]

const router = process.env.NODE_ENV === 'GITHUB_PAGES' ? createHashRouter(routes): createBrowserRouter(routes);

export default router;
