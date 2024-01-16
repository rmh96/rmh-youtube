import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/watchpages/WatchPage";
import SearchVideoPage from "./components/SearchVideoPage";
import VideoContainer from "./components/VideoContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        children: [
          {
            path: "/",
            element: <VideoContainer />,
          },
          {
            path: "/watch",
            element: <WatchPage />,
          },
          {
            path: "/results",
            element: <SearchVideoPage />,
          },
        ],
      },
      // {
      //   path: "/",
      //   element: <MainContainer />,
      //   children: [
      //     {
      //       path: "results",
      //       element: <SearchVideoPage />,
      //     },
      //   ],
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
