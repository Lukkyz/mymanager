import React from "react";
import MainBar from "./components/MainBar";
import { Provider } from "react-redux";
import store from "./store";
import Date from "./components/Date";
import ComponentsField from "./containers/componentsContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainBar />
        <div className="main">
          <Date />
          <ComponentsField />
        </div>
      </div>
    </Provider>
  );
}

export default App;
