import React from 'react'
import { getSingleDriver, deleteDriver } from '../../lib/api'
import { Link } from 'react-router-dom'

class DriversShow extends React.Component {
  state = {
    driver: null
  }
  async componentDidMount() {
    // request single driver by id
    const driverId = this.props.match.params.id
    const response = await getSingleDriver(driverId)
    console.log(this.props)
    console.log(driverId)
    console.log(response.data)

    this.setState({
      driver: response.data
    })  
  }

  handleDelete = async () => {
  // we dont neeed prevent default because htis is a button rather than a link
    const driverId = this.props.match.params.id
    await deleteDriver(driverId)
    this.props.history.push('/drivers')
  }


  render()  {
    const { driver } = this.state
    if (!driver) return null
    return (
      <section className="drivers-show section is-full-height">
        <div className="container">
          <div className="columns">
            <div className="column is-pulled-right left-columm">
              <figure className="image-show">
                <img src={driver.image} alt={driver.name} />
              </figure>
            </div>
            <div className="column is-third right-column">
              <div className="name-flag">
                <img id="show-flag" src={driver.flag} alt={driver.country} />
                <h5 className="title driver-name is-4">{driver.name} {driver.surname} </h5>   
              </div>         
              <div className="driver-info">
                <h3>Team: {driver.team}</h3>
                <h3>Country: {driver.country}</h3>
                <h3>Points This Season: {driver.points}</h3>
                <h3>Podiums: {driver.podiums}</h3>
                <h3>Points To Date: {driver.pointsToDate}</h3>
                <h3>World Championships: {driver.worldChampionships}</h3>  
                <h3> </h3>           
              </div>
              <hr />
              <div className="buttons">
                <Link to={`/drivers/${driver._id}/edit`} className="button is-primary">Edit</Link>

                <button onClick={this.handleDelete} className="button is-primary">Delete</button>
              </div>
            </div>     
          </div>
        </div>
      </section>
    )
  }
}

export default DriversShow

