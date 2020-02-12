import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Appt from '../pages/Appt';
import Team from '../pages/Team';
import Wivt from '../pages/Wivt';
import Services from '../pages/Services';
import Sportsvision from '../pages/Sportsvision';
import Visionrehab from '../pages/Visionrehab';
import As from '../pages/As';
import Lrvp from '../pages/Lrvp';
import Resources from '../pages/Resources';
import Symptoms from '../pages/Symptoms';
import Diagnosis from '../pages/Diagnosis';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/request-appointment" component={Appt}></Route>
    <Route exact path="/our-team" component={Team}></Route>
    <Route exact path="/what-is-vision-therapy" component={Wivt}></Route>
    <Route
      exact
      path="/services/sports-vision"
      component={Sportsvision}
    ></Route>
    <Route
      exact
      path="/services/vision-rehabilitation"
      component={Visionrehab}
    ></Route>
    <Route exact path="/services/amblyopia-strabismus" component={As}></Route>
    <Route
      exact
      path="/services/learning-related-visual-problems"
      component={Lrvp}
    ></Route>
    <Route exact path="/services" component={Services}></Route>
    <Route exact path="/diagnosis" component={Diagnosis}></Route>
    <Route exact path="/resources" component={Resources}></Route>
    <Route exact path="/symptoms" component={Symptoms}></Route>
    <Route exact path="/contact-us" component={Contact}></Route>
    <Route component={NotFound}></Route>
  </Switch>
);

export default Routes;
