import React from 'react'
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage.component'
=======
import {  Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
>>>>>>> 3_forms_and_components


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const  App = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/hats' component={HatsPage} />
    <Route path='/shop' component={ShopPage} />
  </Switch>
)

export default App
