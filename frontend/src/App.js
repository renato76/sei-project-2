import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Footer from './components/common/Footer'

import DriversIndex from './components/drivers/DriversIndex'
import DriversShow from './components/drivers/DriversShow'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import DriverNew from './components/drivers/DriverNew'
import DriverEdit from './components/drivers/DriverEdit'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drivers/new" component={DriverNew} />
        <Route path="/drivers/:id/edit" component={DriverEdit} />
        <Route path="/drivers/:id" component={DriversShow} />
        <Route path="/drivers" component={DriversIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />       
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}


export default App
