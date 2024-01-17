const SelectSubjectReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_SUBJECT":
      return {
        ...state,
        selectedSubject: action.payload,
      };
    default:
      return state;
  }
};

export default SelectSubjectReducer;
