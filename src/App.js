import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './components/Search';
import WishList from './components/WishList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Search />
            </Route>
            <Route exact path="/wishList">
                <WishList />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
