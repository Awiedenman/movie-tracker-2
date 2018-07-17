import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../Containers/Header/Header';
import Home from '../../Containers/Home/Home';
import Login from '../../Containers/Login/Login';
import SignUp from '../../Containers/SignUp/SignUp';
import Favorites from '../../Containers/Favorites/Favorites';

import './App.css';

export const App = () => {
  return (
    <main className="grid-container">
      <Header />
      <section className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/favorites" component={Favorites} />
          <Redirect to="/" component={Home}/>
        </Switch>
      </section>
    </main>
  );
};

export default App;