import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  // this handles user input in the form and updates the formData
  handleChange = event => {
    // console.log(event.target.name, event.target.value)
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    // console.log(formData)
    this.setState({ formData })
  }

  // we need to send the formData to the backend, POST Request
  handleSubmit = async event  => {
    event.preventDefault()
    const response = await registerUser(this.state.formData)
    console.log(response)
    this.props.history.push('/login')
  }

  render()  {
    const { username, email, password, passwordConfirmation } = this.state.formData
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email" 
                    value={email}   
                    onChange={this.handleChange}     
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}


export default Register