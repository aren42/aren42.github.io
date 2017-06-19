import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './NavbarComponent';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <nav style={s.breadcrumbs}>
        <Navbar />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

      <footer style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Disign and code by <span {...s.childLink}>Victor MARIOT</span>
        </Interactive>
      </footer>
    </div>
  );
}
