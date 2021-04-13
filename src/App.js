import "./styles.css";
import CakeContainer from "./components/CakeContainer";
import { store } from "./redux/cakeStore";
import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  );
}
