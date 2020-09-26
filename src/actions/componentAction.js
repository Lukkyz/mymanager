import { ADD_COMPONENT, REMOVE_COMPONENT } from "./componentType";

export const addComponent = (obj) => ({
  type: ADD_COMPONENT,
  payload: obj,
});

export const removeComponent = (id) => ({
  type: REMOVE_COMPONENT,
  id: id,
});
