const NewSubjectReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW_SUBJECT":
      return {
        ...state,
        newSubject: action.payload,
      };
    default:
      return state;
  }
};

export default NewSubjectReducer;
