import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'


const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </>
)

export default App
