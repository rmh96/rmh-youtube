import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}
export default App;
