import { featchCastData } from '../../Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Cast() {
  const { movieId } = useParams();
  const [value, setValue] = useState([]);
  useEffect(() => {
    featchCastData(movieId).then(response => setValue(response));
  }, [movieId]);
  return (
    <ul>
      {value.map(element => (
        <li>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${element.profile_path}`}
              alt={element.original_name}
            />
            <p>{element.original_name}</p>
            <p>{element.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
