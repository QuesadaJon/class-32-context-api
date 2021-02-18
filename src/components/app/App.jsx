import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../../containers/CharacterPage';
import { ThemeProvider } from '../../state/themeContext';
import Header from '../header/Header';


export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <Switch>
        <Route path="/" component={CharacterPage}/>
      </Switch>
    </Router>
  );
}
