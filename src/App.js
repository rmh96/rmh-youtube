import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/watchpages/WatchPage";
// import SearchVideoPage from "./components/SearchVideoPage";
// import VideoContainer from "./components/VideoContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}
export default App;
