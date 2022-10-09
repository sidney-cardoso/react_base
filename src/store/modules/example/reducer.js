const initialState = {
  clickedButton: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CLICKED_BUTTON":
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;

    default:
      return state;
  }
};
