/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = props => {
  const { books } = props.books;
  // eslint-disable-next-line no-console
  console.log('BookList', props.books);
  const callBook = book => {
    console.log('sending book', book);
    return (<Book book={book} />);
  };
  console.log('map', books.map(callBook));
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

// BookList.propTypes = {
//  books: propTypes.arrayOf(propTypes.shape({
//    id: propTypes.number.isRequired,
//  }))
// };

export default connect(mapStateToProps)(BookList);
