import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div className={styles.navbar}>
        <Link className={styles.logo} to="/">
            <h1>Reads</h1>
        </Link>
        <div className={styles.search}>
            <input type="text" placeholder="Search book" />
        </div>
        <div className={styles.navitems}>
            <p>Nav item 1</p>
            <p>Nav item 2</p>
        </div>
    </div>
)

export default Navbar;
