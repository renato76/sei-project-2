import React from 'react'

import { getAllDrivers } from '../../lib/api'
import DriversCard from './DriversCard'

class DriversIndex extends React.Component  {
  state = {
    drivers: null
  }

  async componentDidMount() {
    // Get all the drivers
    const response = await getAllDrivers()  
    console.log(getAllDrivers)
    // add them to the state
    this.setState({
      drivers: response.data
    })
    console.log('drivers array >>>>>', response)
  }
  render()  {
    if (!this.state.drivers) return null
    return (
      <div className="section">
        <div className="f1-title">
          <h1>F1 Drivers Standings 2020</h1>
          <h2>Check out this season&#39;s official F1 line-up. Full breakdown of drivers, points and current positions. Follow your favourite F1 drivers on and off the track.</h2>
        </div>
        <hr />
        <div className="container-drivers-index">
          <div className="columns is-multiline">
            { this.state.drivers.map(driver => (
              <DriversCard key={driver._id} {...driver} />
            )) }
          </div>
        </div>
      </div>
    )
  }

  





}

export default DriversIndex