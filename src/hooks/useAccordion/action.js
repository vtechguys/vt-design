import { actions } from "./names";

export const toggleAccordionAction = (id) => ({
  type: actions.toggle,
  payload: { id }
});
