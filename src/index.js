import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './css/index.css';
import App from './component/App';

const initialState = {
  book: [
    {
      id: Math.random(),
      title: 'Lord of the rings',
      category: 'Action',
    },
    {
      id: Math.random(),
      title: 'Harry Potter',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, { book: initialState });

// eslint-disable-next-line no-console
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
