const BookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK': return {
      books: [
        {
          id: Math.random(),
          title: 'Testing',
          category: 'Category Testing',
        },
      ],
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
