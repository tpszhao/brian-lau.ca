import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from '../Pages/Error404'
import Form from '../components/Form'
import Landing from '../Pages/Landing'
import Map from '../Pages/Map'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/form' component={Form} />
    <Route exact path='/map' component={Map} />
    <Route component={Error404} />
  </Switch>
)

export default Routes