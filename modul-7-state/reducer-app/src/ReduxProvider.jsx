import { createContext, useReducer } from "react";

function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "increment":
      // nie dziala
      //   state.value = state.value + 1;
      //   return state;
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    case "reset":
      return { value: 0 };
    default:
      return state;
  }
}

export const ReduxContext = createContext([{ value: 0 }, () => {}]);

export const ReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <ReduxContext.Provider value={[state, dispatch]}>
      {children}
    </ReduxContext.Provider>
  );
};
