const initialState = {
  projectsVisible: false,
  footerVisible: false
};

const GlobalState = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PROJECT_VISIBILITY":
      return {
        ...state,
        projectsVisible: action.payload
      };
    case "TOGGLE_FOOTER_VISIBILITY":
      return {
        ...state,
        footerVisible: action.payload
      };

    default:
      return state;
  }
};

export default GlobalState;
