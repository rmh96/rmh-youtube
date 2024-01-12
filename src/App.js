import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/watchpages/WatchPage";
import SearchVideoPage from "./components/SearchVideoPage";
import VideoContainer from "./components/VideoContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
        children: [
          {
            path: "/",
            element: <VideoContainer />,
          },
        ],
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/",
        element: <MainContainer />,
        children: [
          {
            path: "results",
            element: <SearchVideoPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <div className="w-full h-full">
          <Header />
          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}

/*
Head
Body
  SideBar
    Links
  MainContainer
    Button Filters
    VideoContainers
*/

export default App;
