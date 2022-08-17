import { isNil } from "lodash-es";
import { createContext, useContext, useReducer } from "react";
import { multipleReducer } from "./reducer";

const AccordionStateContext = createContext(null);
const AccordionDispatchContext = createContext(null);

export function useAccordionState() {
  const state = useContext(AccordionStateContext);

  if (isNil(state)) {
    throw new Error(
      `useAccordionState must be inside AccordionContext. Make sure you have provided defaults`
    );
  }

  return state;
}

export function useAccordionDispatch() {
  const state = useContext(AccordionDispatchContext);

  if (isNil(state)) {
    throw new Error(
      `useAccordionDispatch must be inside AccordionContext. Make sure you have provided defaults`
    );
  }

  return state;
}

export function useAccordionStore() {
  const state = useAccordionState();
  const dispatch = useAccordionDispatch();
  return [state, dispatch];
}

export function AccordionContext({
  reducer = multipleReducer,
  defaultOpen = [],
  children
}) {
  const [state, dispatch] = useReducer(reducer, defaultOpen);
  return (
    <AccordionStateContext.Provider value={state}>
      <AccordionDispatchContext.Provider value={dispatch}>
        {children}
      </AccordionDispatchContext.Provider>
    </AccordionStateContext.Provider>
  );
}
