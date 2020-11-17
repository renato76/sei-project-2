import React from 'react'
import { getSingleDriver, updateDriver } from '../../lib/api'
import DriverForm from './DriverForm'

class DriverEdit extends React.Component {
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

  async componentDidMount() {
    const driverId = this.props.match.params.id
    const response = await getSingleDriver(driverId)

    this.setState({
      formData: response.data
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const driverId = this.props.match.params.id
    const response = await updateDriver(driverId, this.state.formData)
    this.props.history.push(`/drivers/${response.data._id}`)
    console.log(response)
    
  }

  // this is the handlechange event which stores the formdata
  handleChange = event => {
    const formData = {
      ...this.state.formData, 
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  render()  {
    return (
      <section className="section">
        <div className="container">
          {/* // here we are passing the props to driverForm */}
          <DriverForm 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            formData={this.state.formData} />
        </div>
      </section>
    )
  }
}

export default DriverEdit