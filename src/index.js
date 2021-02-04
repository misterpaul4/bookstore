import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './css/index.css';
import App from './component/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Lord of the rings',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Harry Potter',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
