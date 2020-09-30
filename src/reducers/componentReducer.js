import { ADD_COMPONENT, REMOVE_COMPONENT } from "../actions/componentType";

const components = (state = [], action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case REMOVE_COMPONENT:
      return state.filter((component) => component.id !== action.id);
    default:
      return state;
  }
};

export default components;
