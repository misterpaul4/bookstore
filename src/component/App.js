import React from 'react';
import { Provider } from 'react-redux';
import '../css/App.css';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Hello</h1>
        <BookList />
        <BookForm />
      </div>
    </Provider>
  );
}

export default App;
