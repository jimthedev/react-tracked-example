import React from "react";
import { useTracked } from "react-tracked";

export function MyThing() {
  const [state, dispatch] = useTracked();
  return <div>{state.name}</div>;
}
