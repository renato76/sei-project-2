import React from 'react'
import { Link } from 'react-router-dom'


const DriversCard = (props) => {
  const { _id, name, surname, driverNumber, team, points, image, flag, country } = props
  return (
    <div id={_id} className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <Link to={`/drivers/${_id}`} >
        <div className="card">
          <div className="card-header-top">
            <h4 className="card-header-points">{points} PTS</h4>    
          </div>  
          <div className="card-header-middle">
            <figure className="flag is-pulled-right">
              <img id="flag" src={flag} alt={country} />
            </figure>
            <h4 className="card-header-title">{name} {surname}</h4>    
          </div>      
          <div className="card-image">
            <h4 className="card-team">{team}</h4> 
            
            <h4 className="driver-number is-pulled-left">{driverNumber}</h4>
            <figure className="main-image image is-1by1">
              <img src={image} alt={name} loading="lazy" width="255" height="255" />
            </figure>  
          </div>         
        </div>
      </Link>
    </div>
  )
}

export default DriversCard