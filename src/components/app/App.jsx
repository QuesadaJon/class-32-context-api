import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../../containers/CharacterPage';
import Header from '../header/Header';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={CharacterPage}/>
      </Switch>
    </Router>
  );
}
