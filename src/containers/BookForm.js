import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from '../resources/categories';

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

    props.createBook({
      id: Math.floor(Math.random() * 100),
      title: book.title,
      category: book.category,
    });

    setBook({
      title: '',
      category: 'Biography',
    });
  };

  const MakeCategory = cat => <option>{cat}</option>;
  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input value={book.title} type="text" id="title" onChange={e => { handleChange(e); }} />
        <select value={book.category} id="category" onChange={e => { handleChange(e); }}>
          {categories.map(MakeCategory)}
        </select>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </div>
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
