import { combineReducers } from 'redux';
import books from './books';
import selectBook from './selectbook';

const rootReducer = combineReducers({
  books,
  selectBook
});

export default rootReducer;