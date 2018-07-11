import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Home from '../../Containers/Home';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './App.css';

export const App = () => {
  return (
    <main className="grid-container">
      <Header />
      <section className="main-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </section>
    </main>
  );
};


export default App;