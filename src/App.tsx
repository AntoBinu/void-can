import { Provider } from "react-redux";
import Space from "./components/space/Space";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Space />
    </Provider>
  );
}

export default App;
