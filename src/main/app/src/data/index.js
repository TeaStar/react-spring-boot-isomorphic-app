/* @flow */
import { combineReducers } from 'redux';
import type { Dispatch } from 'redux';

export default combineReducers({
  // Enter modules for retrieving data from api
});

export type Thunk<A> = (dispatch: Dispatch<A>, getState: () => Object) => any;
