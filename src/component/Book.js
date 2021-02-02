import React from 'react';
import propTypes from 'prop-types';

const Book = props => {
  console.log('props', props);
  const { id, title, category } = props.book;
  console.log(id, title, category);

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Book;
