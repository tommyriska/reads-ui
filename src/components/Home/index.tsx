import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, BrowserRouter } from 'react-router-dom';
import booklist from '../../books.json';
import BooksView from '../BooksView/BooksView';
import { BookType } from '../../types/BookType';

const Home: React.FC = () => {

    const [status, setStatus] = useState<String>()

    return (
        <div>
            <div className={styles.views}>
                <Link className={styles.viewitem} to="/to-read">To Read</Link>
                <Link className={styles.viewitem} to="/reading">Reading</Link>
                <Link className={styles.viewitem} to="/read">Read</Link>
            </div>
            <div className={styles.booksview}>
                <BooksView books={booklist} status={status} />
            </div>
        </div>
    )
}

export default Home;