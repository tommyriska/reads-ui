import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Book from '../Book/Book';
import styles from './styles.module.css';
import data from '../../books.json';
import { BookType } from '../../types/BookType';

const BOOK_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const initialState = {
  loading: true,
  books: [],
  errorMessage: null
};

type Action = {
  type?: String,
  payload?: BookType[],
  error?: String
}

type ReducerType = {
  loading?: Boolean,
  books?: BookType[],
  errorMessage?: String | null
}

const reducer = (state: ReducerType, action: Action) => {
  switch (action.type) {
    case "SEARCH_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_BOOKS_SUCCESS":
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case "SEARCH_BOOKS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SEARCH_BOOKS_SUCCESS",
      payload: data as BookType[]
    });
  }, []);

  const search = (searchValue: String) => {
    dispatch({
      type: "SEARCH_BOOKS_REQUEST"
    });

    const formattedSearch = searchValue.replace(/\s/g, '+');
    console.log(formattedSearch);
    axios.get(BOOK_API_URL + formattedSearch)
      .then((response) => {
        console.log(response.data.items)
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: response.data.items as BookType[]
        });
      })
      .catch((err) => {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: err
        });
      })
  }

  const { books, errorMessage, loading } = state;

  return (
    <div className={styles.app}>
      <Header name="READS" />
      <Search search={search} />
      <p className={styles.intro}>Sharing a few of our favourite books</p>
      <div className={styles.books}>
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className={styles.errorMessage}>{errorMessage}</div>
        ) : (
              books?.map((book: BookType, index: number) => (
                <Book key={index} book={book} />
              ))
            )}
      </div>
    </div>
  );
};

export default App;
