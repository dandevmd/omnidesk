import { createContext } from "react";

type AppContextType = {
  children: React.ReactNode;
};

export const AppContext = createContext({});

const AppProvider = ({ children }: AppContextType) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
