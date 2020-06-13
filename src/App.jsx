import React, { useContext } from "react";
import "./styles.css";
import { Store } from "./Store";

export default function App() {
  const store = useContext(Store);
  console.log(store);
  return (
    <React.Fragment>
      <div>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
    </React.Fragment>
  );
}
