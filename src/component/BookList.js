import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = ({ books: { books } }) => {
  const callBook = book => (<Book book={book} />);

  return (
    <table>
      <tbody>
        {books.map(callBook)}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: propTypes.shape(propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    category: propTypes.string,
  }).isRequired).isRequired,
};

export default connect(mapStateToProps)(BookList);
