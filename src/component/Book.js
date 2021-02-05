import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, handler }) => {
  const { id, title, category } = book;
  return (
    <div className="book-row">
      <div className="book-card">
        <span className="book-cat">{category}</span>
        <h3 className="book-title">{title}</h3>
        <span className="book-Author">Wisel Guykovsky</span>
        <div className="book-mnu">
          <button type="button" id={`${id}bt1`} className="book-mnu-item">Comments</button>
          <button type="button" id={id} className="book-mnu-item" onClick={() => handler({ id, title, category })}>Remove</button>
          <button type="button" className="book-mnu-item" id={`${id}bt2`}>Edit</button>
        </div>
      </div>
      <div className="book-percent">
        <div className="book-chart">
          <span>chart</span>
        </div>
        <div className="book-percent-legend">
          <h3>0 %</h3>
        </div>
      </div>
      <div className="Book-current-ch">
        <span className="current-head">CURRENT CHAPTER</span>
        <h3 className="current-ch-name">Chapter 1</h3>
        <div className="current-ch-update">
          <h3 className="current-btn-txt">UPDATE PROGRESS</h3>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
  handler: propTypes.func.isRequired,
};

export default Book;
