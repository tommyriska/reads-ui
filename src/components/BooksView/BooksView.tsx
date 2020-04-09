import React, { useState } from 'react';
import styles from './styles.module.css';
import Book from '../Book/Book';
import { BookType } from '../../types/BookType';

type BookListProps = {
    books: BookType[]
}

const BooksView: React.FC<BookListProps> = props => {

    return (
        <div className={styles.bookgrid}>
            {
                props.books.map(b => (
                    <div key={b.title}>
                        <Book book={b}/>
                    </div>
                ))
            }
        </div>
    )
}

export default BooksView;