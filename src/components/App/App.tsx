import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './styles.module.css';
import BooksView from '../BooksView/BooksView';
import data from '../../books.json';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.views}>
        <Link className={styles.viewitem} to="/to-read">To Read</Link>
        <Link className={styles.viewitem} to="/reading">Reading</Link>
        <Link className={styles.viewitem} to="/read">Read</Link>
      </div>
      <Switch>
        <Route exact path="/" render={() => <BooksView books={data} /> } />
        <Route exact path="/to-read" render={() => <BooksView books={data} filterStatus="toread" /> } />
        <Route exact path="/reading" render={() => <BooksView books={data} filterStatus="reading" /> } />
        <Route exact path="/read" render={() => <BooksView books={data} filterStatus="read" /> } />
      </Switch>
    </div>
  );
}

export default App;
