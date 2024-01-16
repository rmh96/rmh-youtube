import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import VideoContainer from "../components/VideoContainer";
import WatchPage from "../components/watchpages/WatchPage";
import SearchVideoPage from "../components/SearchVideoPage";

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
            element: <WatchPage />,
          },
          {
            path: "results",
            element: <SearchVideoPage />,
          },
        ],
      },
    ],
  },
]);
