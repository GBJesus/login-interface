import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Home} exact path="/" />
      </Switch>
    </Router>
  )
}

export default Routes
