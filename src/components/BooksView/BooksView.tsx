import React from 'react';
import styles from './styles.module.css';
import Book from '../Book/Book';
import { BookType } from '../../types/BookType';

type BookListProps = {
    books: BookType[],
    filterStatus?: string
}

const BooksView: React.FC<BookListProps> = props => {

    return (
        <div className={styles.bookgrid}>
            {
                props.books
                .filter((book) =>  {
                    if(props.filterStatus == null) {
                        return true;
                    } else {
                        return book.status === props.filterStatus;
                    }
                })
                .map(b => (
                    <div key={b.title}>
                        <Book book={b} />
                    </div>
                ))
            }
        </div>
    )
}

export default BooksView;