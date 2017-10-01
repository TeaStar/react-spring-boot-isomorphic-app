/* @flow */
import { combineReducers } from 'redux';
import type { Dispatch } from 'redux';

import books from './modules/books';

export default combineReducers({
  // Enter modules for retrieving data from api
  books
});

export type Thunk<A> = (dispatch: Dispatch<A>, getState: () => Object) => any;
