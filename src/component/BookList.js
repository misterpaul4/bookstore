import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
'

const BookList = () => (
  <table>
    <Book book={{}} />
  </table>
);

const mapStateToProps = state => {
  return {
      books: state.books;
  }
}

export defaultconnect(mapStateToProps)(BookList);
