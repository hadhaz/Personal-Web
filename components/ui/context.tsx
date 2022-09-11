import React, { useReducer, useContext, useCallback, useMemo } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../commons/Layout";

type State = {
  isMobileNavActive: boolean;
  isFabActive: boolean;
};

type Action =
  | {
      type: "TOOGLE_MOBILENAV";
    }
  | { type: "DISABLE" }
  | { type: "TOGGLE_FAB" };

const initialState = {
  isMobileNavActive: false,
  isFabActive: false,
};

const UIContext = React.createContext<State | any>(initialState);

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("must used within provider");
  }
  return context;
};

const uiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOOGLE_MOBILENAV": {
      return {
        ...state,
        isMobileNavActive: !state.isMobileNavActive,
      };
    }
    case "DISABLE": {
      return {
        ...state,
        isMobileNavActive: false,
      };
    }
    case "TOGGLE_FAB": {
      return {
        ...state,
        isFabActive: !state.isFabActive,
      };
    }
  }
};

export const UIContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const toggleMobileNavHandler = useCallback(() => {
    dispatch({ type: "TOOGLE_MOBILENAV" });
  }, [dispatch]);

  const disableMenuNav = useCallback(() => {
    dispatch({ type: "DISABLE" });
  }, [dispatch]);

  const toggleFab = useCallback(() => {
    dispatch({ type: "TOGGLE_FAB" });
  }, [dispatch]);

  const value = useMemo(
    () => ({
      ...state,
      toggleMobileNav: toggleMobileNavHandler,
      disableMenuNav,
      toggleFab,
    }),
    [state, toggleMobileNavHandler, disableMenuNav, toggleFab]
  );
  return (
    <ThemeProvider attribute='class'>
      <UIContext.Provider value={value}>
        <Layout>{children}</Layout>
      </UIContext.Provider>
    </ThemeProvider>
  );
};
