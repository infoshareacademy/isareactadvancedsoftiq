import { createContext } from "react";

const ReduxContext = createContext({ state: 0, dispatch: () => {} });

export const ReduxProvider = ({ children }) => {
  return <ReduxContext.ReduxProvider>{children}</ReduxContext.ReduxProvider>;
};
