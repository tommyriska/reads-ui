import React from 'react';
import { BookType } from '../../types/BookType';
import styles from './styles.module.css'

type BookProps = {
    book: BookType
}

const Book: React.FC<BookProps> = (props) => {

    const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

    const poster = props.book.volumeInfo.imageLinks?.thumbnail === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.book.volumeInfo.imageLinks?.thumbnail;

    return (
        <div className={styles.book}>
            <h2>{props.book.volumeInfo.title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The book titled: ${props.book.volumeInfo.title}`}
                    src={poster}
                />
            </div>
            <p>({props.book.volumeInfo.publishedDate ? props.book.volumeInfo.publishedDate : "Unknown"})</p>
        </div>
    );
};

export default Book;