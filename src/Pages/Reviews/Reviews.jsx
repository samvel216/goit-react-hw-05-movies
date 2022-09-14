import { featchReviewsData } from '../../Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const { movieId } = useParams();
  const [value, setValue] = useState([]);
  useEffect(() => {
    featchReviewsData(movieId).then(response => setValue(response));
  }, [movieId]);

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
}
