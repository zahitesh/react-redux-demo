import "./styles.css";
import CakeContainer from "./components/CakeContainer";
import { store } from "./redux/cakeStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}
