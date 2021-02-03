/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function BookForm(props) {
  const [book, setBook] = useState({
    title: '',
    category: 'Biography',
  });

  const handleChange = e => {
    switch (e.target.id) {
      case 'title':
        setBook({
          ...book,
          title: e.target.value,
        });
        break;

      case 'category':
        setBook({
          ...book,
          category: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('save btn clicked', book.title, book.category);

    props.createBook({
      id: Math.random,
      title: book.title,
      category: book.category,
    });
  };

  const categories = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const MakeCategory = cat => <option>{cat}</option>;
  return (
    <form>
      <input type="text" id="title" onChange={e => { handleChange(e); }} />
      <select value={book.category} id="category" onChange={e => { handleChange(e); }}>
        {categories.map(MakeCategory)}
      </select>
      <button type="submit" onClick={handleSubmit}>Save</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

const mapStateToProps = state => ({
  books: state.books,
});

BookForm.propTypes = {
  createBook: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
