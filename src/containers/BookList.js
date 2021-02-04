import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../component/Book';
import CategoryFilter from '../component/CategoryFilter';

const BookList = ({ books: { books }, removeBook }) => {
  const { bookList, setBookList } = useState({
    bookList: books,
  });

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const callBook = book => (<Book book={book} handler={handleRemoveBook} />);
  const changeFilter = key => {
    console.log('change the filter', key);
    setBookList({
      bookList: books,
    })
  };
  return (
    <div>
      <CategoryFilter updateFilter={changeFilter} />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>CATEGORY</td>
          </tr>
        </thead>
        <tbody>
          {bookList.map(callBook)}
        </tbody>
      </table>
    </div>
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
