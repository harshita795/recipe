import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar_link}>Recipes</Link>
    </div>
  );
}