const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

const changeFilter = key => ({
  type: 'CHANGE_FILTER',
  payload: key,
});

export { removeBook, createBook, changeFilter };
