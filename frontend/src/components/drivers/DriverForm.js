import React from 'react' 

const DriverForm = props  => {
  const { name, surname, driverNumber, team, points, image, flag, country, podiums, pointsToDate, worldChampionships } = props.formData
  const { handleChange, handleSubmit } = props

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              placeholder="Name (Required)"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Surname</label>
          <div className="control">
            <input
              className="input"
              placeholder="Surname (Required)"
              name="surname"
              value={surname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Driver Number</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Driver Number (Required)"
              name="driverNumber"
              value={driverNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Team</label>
          <div className="control">
            <input
              className="input"
              placeholder="Team (Required)"
              name="team"
              value={team}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Points</label>
          <div className="control">
            <input
              className="input"
              placeholder="Points (Required)"
              name="points"
              value={points}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              placeholder="Image URL (Optional)"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Flag</label>
          <div className="control">
            <input
              className="input"
              placeholder="Flag URL (Optional)"
              name="flag"
              value={flag}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Country</label>
          <div className="control">
            <input
              className="input"
              placeholder="Country (Optional)"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label className="label">Podiums</label>
            <div className="control">
              <input
                className="input"
                placeholder="Podiums (Optional)"
                name="podiums"
                value={podiums}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Points To Date</label>
            <div className="control">
              <input
                className="input"
                placeholder="Points To Date (Optional)"
                name="pointsToDate"
                value={pointsToDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">World Championships</label>
            <div className="control">
              <input
                className="input"
                placeholder="World Championships (Optional)"
                name="worldChampionships"
                value={worldChampionships}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-dark">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default DriverForm