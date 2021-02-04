import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../component/Book';

const BookList = ({ books: { books }, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const callBook = book => (<Book book={book} handler={handleRemoveBook} />);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>TITLE</td>
          <td>CATEGORY</td>
        </tr>
      </thead>
      <tbody>
        {books.map(callBook)}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

BookList.propTypes = {
  books: propTypes.shape(propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    category: propTypes.string,
  }).isRequired).isRequired,
  removeBook: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
