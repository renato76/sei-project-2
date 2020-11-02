import React from 'react'
import { createDriver } from '../../lib/api'
import DriverForm from './DriverForm'

class DriverNew extends React.Component {
  state = {
    formData: {
      name: '',
      surname: '',
      driverNumber: '',
      team: '',
      points: '',
      image: '',
      flag: '',
      country: '',
      podiums: '',
      pointsToDate: '',
      worldChampionships: ''
    }
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData, 
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    // post to /drivers via the api -  send formdata and headers
    const response = await createDriver(this.state.formData)
    console.log(response)
    // redirect  user the relevant page
    this.props.history.push('/drivers')
  }

  render()  {
    return (
      <section className="section">
        <div className="container">
          {/* // here we are passing the props to drivershow */}
          <DriverForm 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            formData={this.state.formData} />
        </div>
      </section>
    )
  }
}

export default DriverNew