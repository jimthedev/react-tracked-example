import React from "react";
import { Button } from "reakit/Button";
import { useValue } from "./index.js";
export function App({ useTracked }) {
  const [state, dispatch] = useTracked();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button
        onClick={() => {
          dispatch({
            type: "SET_NAME"
          });
        }}
      >
        Button
      </Button>
      {state.name}
      Yo yooooooo
    </div>
  );
}
