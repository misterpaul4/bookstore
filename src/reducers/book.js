const initialState = {
  books: [
    {
      id: 1,
      title: 'Lord of the rings',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Harry Potter',
      category: 'Kids',
    },
  ],
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': return {
      ...state,

    };
    case 'REMOVE_BOOK': return {
      ...state,

    };
    default:
      return state;
  }
};

export default BookReducer;
