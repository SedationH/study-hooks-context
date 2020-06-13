import React from "react";

export const Store = React.createContext();

const initialState = {};

function reducer() {}

export function StoreProvider(props) {
  return (
    <Store.Provider value="date from store">{props.children}</Store.Provider>
  );
}
