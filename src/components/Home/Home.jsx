import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
export default function HomePage({ fetchArray, handleClick }) {
  const item = fetchArray.map(element => (
    <li onClick={handleClick} id={element.id} className={styles.item}>
      <Link className={styles.homeLink} to={`movies/${element.id}`}>
        {element.original_title}
      </Link>
    </li>
  ));
  return <ul className={styles.homeList}>{item}</ul>;
}
