// @flow

import axios from 'axios';
import type { Thunk } from '../';

export type Book = {
  id?: number,
  title: string,
  author: string,
  year: string
};

type State = {
  status: 'stale' | 'loaded',
  data: Books[]
}

type BooksRefreshedAction = {
  type: 'BOOKS_REFRESHED',
  payload: Books[]
};

type Action = AddBooksAction | BooksRefreshedAction;

const defaultState : State = {
  status: 'stale',
  data: []
};

export default function reducer(state : State = defaultState, action : Action) : State {
  switch (action.type) {

    case 'BOOKS_REFRESHED':
      return {
        status: 'loaded',
        data: action.payload
      };

    default:
      return state;
  }
}

export function booksRefreshed(books : Books[]) : BooksRefreshedAction {
  return {
    type: 'BOOKS_REFRESHED',
    payload: books
  };
}

export function refreshBooks() : Thunk<BooksRefreshedAction> {
  return dispatch => {
    axios.get('/books')
      .then(
        (success: { data: Book[] }) => dispatch(booksRefreshed(success.data)),
        failure => console.log(failure)
      );
  };
}
