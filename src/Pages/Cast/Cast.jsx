import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { featchCastData } from '../../Api';
export default function Cast({ id }) {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setcast] = useState(null);
  console.log(id);
  useEffect(() => {
    featchCastData(movieId).then(setcast);
    console.log(id);
  }, []);

  return cast.map(element => (
    <ul>
      <li>
        <p>{id}</p>
      </li>
    </ul>
  ));
}
