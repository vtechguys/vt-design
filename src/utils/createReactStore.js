import { useReducer } from "react";
import { createReactContextProvider } from "./createReactProvider";
import { upperCaseFirst } from "upper-case-first";

export function createReactContextStore(name, reducer) {
  const storeName = upperCaseFirst(name);

  const {
    Provider: StateProvider,
    useValue: useState
  } = createReactContextProvider(`${storeName}State`);

  const {
    Provider: DispatchProvider,
    useValue: useDispatch
  } = createReactContextProvider(`${storeName}Dispatch`);

  function StoreProvider({ children, value }) {
    const [state, dispatch] = useReducer(reducer, value);
    return (
      <StateProvider value={state}>
        <DispatchProvider value={dispatch}>{children}</DispatchProvider>
      </StateProvider>
    );
  }

  StoreProvider.displayName = `${storeName}Provider`;

  function useStore() {
    return [useState(), useDispatch()];
  }
  return { Provider: StoreProvider, useState, useDispatch, useStore };
}
