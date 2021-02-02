import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../css/App.css';
import BookForm from './BookForm';
import BookList from './BookList';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
        <BookForm />
      </div>
    </Provider>
  );
}

export default App;
