const BookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK': return {
      ...state,

    };
    case 'REMOVE_BOOK': return {
      ...state,
      arr: [...state, action.payload],
    };
    default:
      return state;
  }
};

export default BookReducer;
