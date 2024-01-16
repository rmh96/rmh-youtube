import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import VideoContainer from "../components/VideoContainer";

const WatchPage = lazy(() => import("../components/watchpages/WatchPage.jsx"));
const SearchResultsPage = lazy(() =>
  import("../components/SearchVideoPage.jsx")
);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <VideoContainer />,
          },
          {
            path: "watch",
            element: (
              <Suspense>
                <WatchPage />
              </Suspense>
            ),
          },
          {
            path: "results",
            element: (
              <Suspense>
                <SearchResultsPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
