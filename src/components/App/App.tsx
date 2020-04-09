import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import BooksView from '../BooksView/BooksView';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/to-read" component={BooksView} />
        <Route exact path="/reading" component={BooksView} />
        <Route exact path="/read" component={BooksView} />
      </Switch>
    </div>
  );
}

export default App;
