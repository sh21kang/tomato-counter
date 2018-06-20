import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
 import Timer from "./components/Timer";
 
let store = createStore(reducer);

console.log(store.getState());

 export default class App extends React.Component {
   render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
   }
 }