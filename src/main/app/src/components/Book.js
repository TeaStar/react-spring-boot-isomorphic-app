/* @flow */
import React from 'react';

const Book = (props : { title: string, author : string, year: string }) => (
  <div className="message">
    <h3>{props.title}</h3>
    <p>By {props.author}</p>
    <p>Published {props.year}</p>
  </div>
);

export default Book;
