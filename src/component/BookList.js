import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = () => (
  <table>
    <tbody>
      <Book book={{}} />
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
