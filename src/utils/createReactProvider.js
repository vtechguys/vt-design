import { createContext, useContext } from "react";

export function createReactContextProvider(name) {
  const StoreContext = createContext(null);
  StoreContext.displayName = `${name}Context`;
  const StoreProvider = ({ children, value }) => (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
  StoreProvider.displayName = `${name}Provider`;
  function useValue() {
    const v = useContext(StoreContext);
    if (!v) {
      throw new Error(`use${name}Context must be used within ${name}Provider`);
    }
    return v;
  }
  return {
    Context: StoreContext,
    Provider: StoreProvider,
    useValue
  };
}
