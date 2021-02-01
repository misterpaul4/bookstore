import React from 'react';
import '../css/App.css';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
