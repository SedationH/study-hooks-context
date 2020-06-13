import React, { useReducer, useEffect } from "react";

export const Store = React.createContext();

const initialState = {
  episodes: [],
  favourites: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

/**
 * action -> reducer -> store -> UI
 */

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchDataAction = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    const dataJSON = await data.json();
    dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
