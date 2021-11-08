import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import ListMovie from "./listMovie";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ListMovie/>
      </Provider>
    </div>
  );
}

export default App;
