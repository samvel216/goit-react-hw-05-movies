import { useState } from 'react';
import { fetchInputData } from '../../Api';
import { Link, Outlet, useParams } from 'react-router-dom';
export const MovieList = ({ inputValue, handleClick }) => {
  const [value, setValue] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  fetchInputData(inputValue).then(response => setValue(response));
  const item = value.map(element => (
    <li onClick={handleClick} id={element.id}>
      <Link to={`movies/${element.id}`}>{element.original_title}</Link>
    </li>
  ));
  return (
    <div>
      <p>dsdsdsdsd</p>
      <ul>{item}</ul>
    </div>
  );
};
