import React from 'react';
import styles from './styles.module.css';
import { BookType } from '../../types/BookType';

type BookProps = {
    book: BookType
}

const BookInfo: React.FC<BookProps> = props => {
    return (
        <div className="bookInfo">
            <p>{props.book.title}</p>
            <p>{props.book.subtitle}</p>
        </div>
    )
}

export default BookInfo;