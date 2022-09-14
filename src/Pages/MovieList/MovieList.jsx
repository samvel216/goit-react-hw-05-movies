import { useState, useEffect } from 'react';
import { fetchInputData } from '../../Api';
import { Link, Outlet, useParams } from 'react-router-dom';
export default function MovieList({ moviaArray, handleClick }) {
  return (
    <div>
      <ul>
        {moviaArray.map(element => (
          <li onClick={handleClick} id={element.id}>
            <p>dsdsdsdsd</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
