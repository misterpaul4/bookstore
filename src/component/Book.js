import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default Book;
