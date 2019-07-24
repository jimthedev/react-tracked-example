import React from "react";
import ReactDOM from "react-dom";
import { createContainer, useTracked } from "react-tracked";
import { Button } from "reakit/Button";
import { App } from "./App";
import "./styles.css";

const useValue = () =>
  React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        if (state.name === "Jim") {
          return {
            ...state,
            name: "Bob"
          };
        } else {
          return {
            ...state,
            name: "Jim"
          };
        }

      default:
        return state;
    }
  }, {}); // any custom hook that returns a tuple

const Platform = createContainer(useValue);

function OuterApp() {
  return (
    <Platform.Provider>
      <App useTracked={Platform.useTracked} />
    </Platform.Provider>
  );
}

export { useValue, Platform };

const rootElement = document.getElementById("root");
ReactDOM.render(<OuterApp />, rootElement);
