import React from "react";
import Game from "./src/components/Game";

export default function App() {
  return <Game randomNumberCount={6} initialSeconds={10}></Game>;
}
