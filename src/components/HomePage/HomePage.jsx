import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function HomePage({ fetchArray, handleClick }) {
  const item = fetchArray.map(element => (
    <li onClick={handleClick} id={element.id}>
      <Link to={`movies/${element.id}`}>{element.original_title}</Link>
    </li>
  ));
  return <ul>{item}</ul>;
}
