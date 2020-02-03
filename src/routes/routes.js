import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Appt from '../pages/Appt';
import Team from '../pages/Team';
import Wivt from '../pages/Wivt';
import Services from '../pages/Services';
import Resources from '../pages/Resources';
import Symptomchecker from '../pages/Symptomchecker';
import Forms from '../pages/Forms';
import Locations from '../pages/Locations';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/request-appointment" component={Appt}></Route>
    <Route exact path="/our-team" component={Team}></Route>
    <Route exact path="/what-is-vision-therapy" component={Wivt}></Route>
    <Route exact path="/services" component={Services}></Route>
    <Route exact path="/resources" component={Resources}></Route>
    <Route exact path="/symptom-checker" component={Symptomchecker}></Route>
    <Route exact path="/patient-forms" component={Forms}></Route>
    <Route exact path="/locations" component={Locations}></Route>
    <Route exact path="/contact-us" component={Contact}></Route>
    <Route component={NotFound}></Route>
  </Switch>
);

export default Routes;
