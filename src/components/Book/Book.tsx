import React from 'react';
import styles from './styles.module.css';
import { BookType } from '../../types/BookType';

type BookProps = {
    book: BookType
}

const Book: React.FC<BookProps> = props => {
    return (
        <div className={styles.bookImage}>
            <img
                src={props.book.imageLinks?.thumbnail ? props.book.imageLinks?.thumbnail : require(`../../assets/coverNotAvailable.jpeg`)}
                className={styles.img}
                alt="book-cover"
            />
        </div>
    )
}

export default Book;