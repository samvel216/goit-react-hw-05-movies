import { featchReviewsData } from '../../Api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();
  const [value, setValue] = useState([]);
  featchReviewsData(movieId).then(response => setValue(response));
  return (
    <ul>
      {value.map(element => (
        <li>
          <div>
            <h3>{element.author}</h3>
            <p>{element.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
