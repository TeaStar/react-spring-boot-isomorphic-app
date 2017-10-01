/* @flow */
import React from 'react';
import { connect } from 'react-redux';

import { refreshBooks } from '../data/modules/books';
import type { Book as BookType } from '../data/modules/Books';

import Book from './Book';

type Props = {
  status: string,
  books: BookType[],
  refreshBooks: () => void
};

class Books extends React.Component<Props> {
  componentDidMount() {
    if (this.props.status === 'stale') {
      this.props.refreshBooks();
    }
  }

  handleRefreshBooks() {
    this.props.refreshBooks();
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        { this.props.books.length === 0
          ? <p>No books yet!</p>
          : this.props.books.map(each => <Book author={each.author} title={each.title} year={each.year} key={each.id} />) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.books.status,
    books: state.books.data
  };
}

export default connect(mapStateToProps, { refreshBooks })(Books);
