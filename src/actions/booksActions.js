const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

export { REMOVE_BOOK, createBook };
