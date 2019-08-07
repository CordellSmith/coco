import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../App/pages/Home';
import Portfolio from '../App/pages/Portfolio';
import About from '../App/pages/About';
import Contact from '../App/pages/Contact';

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}