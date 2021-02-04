/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../component/Book';
import CategoryFilter from '../component/CategoryFilter';

const BookList = ({
  books: { books }, filter: { filter }, removeBook, changeCategoryFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const callBook = book => (<Book book={book} handler={handleRemoveBook} />);
  const changeFilter = key => {
    changeCategoryFilter(key);
  };

  const filteredBooks = () => {
    if (filter !== 'All') {
      return books.filter(book => book.category === filter);
    }

    return books;
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
          {filteredBooks().map(callBook)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeCategoryFilter: category => {
    dispatch(changeFilter(category));
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
