import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import Header from './Header';

function App() {
  return (
    <div className="Bookstore-CMS-App">
      <Header />
      <div className="panel-books">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
