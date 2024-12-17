
// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
      return false
    }
    this.setState({firstNameError: false})
    return true
  }

  validateLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
      return false
    }
    this.setState({lastNameError: false})
    return true
  }

  onSubmitForm = event => {
    //const {firstNameError, lastNameError} = this.state
    event.preventDefault()
    const isFirstValid = this.validateFirstName()
    const isLastValid = this.validateLastName()

    if (isFirstValid && isLastValid) {
      this.setState({
        isSubmitted: true,
        firstNameError: false,
        lastNameError: false,
      })
    }
  }

  renderRigistrationCard = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state

    return (
      <form className="registration-card" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          className="input"
          value={firstName}
          onChange={this.onFirstNameChange}
          onBlur={this.validateFirstName}
        />

        {firstNameError && <p className="blur">Required</p>}
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          className="input"
          value={lastName}
          onChange={this.onLastNameChange}
          onBlur={this.validateLastName}
        />
        {lastNameError && <p className="blur">Required</p>}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessView = () => (
    <div className="success-card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success"
        />
        <p>Submitted Successfully</p>
        <button
          type="button"
          className="button"
          onClick={() =>
            this.setState({
              firstName: '',
              lastName: '',
              firstNameError: '',
              lastNameError: '',
              isSubmitted: false,
            })
          }
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="bg-container">
        {isSubmitted ? '' : <h1>Registration</h1>}
        <div>
          {isSubmitted
            ? this.renderSuccessView()
            : this.renderRigistrationCard()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
