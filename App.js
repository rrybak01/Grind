import React from "react";
import Navigation from "./navigation/Navigation";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

//const store = createStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
