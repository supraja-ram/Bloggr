import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import AddArticle from './pages/AddArticle'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route  exact path='/'><Home /></Route>
        <Route exact path='/login'><LoginPage /></Route>
        <Route exact path='/register'><Register /></Route>
        <Route exact path='/create'><AddArticle /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
