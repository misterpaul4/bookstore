/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function BookForm(props) {
  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const handleChange = e => {
    console.log('change was made');
    switch (e.target.id) {
      case 'title':
        console.log('input', e.target.value);
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
    console.log('saving book', book);
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

export default BookForm;
