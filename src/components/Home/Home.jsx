import styles from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
export default function HomePage({ fetchArray, handleClick }) {
  const location = useLocation();
  const item = fetchArray.map(element => (
    <li onClick={handleClick} id={element.id} className={styles.item}>
      <Link
        className={styles.homeLink}
        to={`movies/${element.id}`}
        state={{ from: location }}
      >
        {element.original_title}
      </Link>
    </li>
  ));
  return <ul className={styles.homeList}>{item}</ul>;
}
