import { combineReducers } from 'redux';
import BookReducer from './book';

const rootReducer = combineReducers({
  book: BookReducer,
});

export default rootReducer;
