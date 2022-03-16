import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../../Components/Home/Home';
import Agents from '../../Components/Agents/Agents';
import Tiers from '../../Components/Tiers/Tiers';
import Details from '../../Components/Agents/Details';
import Bundles from '../../Components/Bundles/Bundles';
import Navbar from '../../Components/Navbar/Navbar';

function Routes() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
        <Switch>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/agents'>
            <Agents />
            </Route>
            <Route path='/details/:id'>
            <Details />
            </Route>
            <Route path='/tiers'>
            <Tiers />
            </Route>
            <Route path='/bundles'>
            <Bundles />
            </Route>
        </Switch>
    </BrowserRouter>
  </div>
  )
}

export default Routes