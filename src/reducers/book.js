const initialState = {
  id: null,
  author: '',
  title: '',
  category: '',
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST': return {
      ...state,
      id: '',
    };

    default: return state;
  }
};

export default BookReducer;
