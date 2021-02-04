import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, handler }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" id="{id}" onClick={() => handler({ id, title, category })}>remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
  handler: propTypes.func.isRequired,
};

export default Book;
