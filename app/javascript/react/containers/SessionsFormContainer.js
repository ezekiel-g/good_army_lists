import React, { Component } from 'react'
import UserEmailField from '../components/UserEmailField'
import UserPasswordField from '../components/UserPasswordField'

class SessionsFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			email: '',
			password: '',
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearEmailErrors = this.clearEmailErrors.bind(this)
		this.clearPasswordErrors = this.clearPasswordErrors.bind(this)
		this.validateEmail = this.validateEmail.bind(this)
		this.validatePassword = this.validatePassword.bind(this)
		this.updateEmail = this.updateEmail.bind(this)
		this.updatePassword = this.updatePassword.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/users')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ users: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	addToDatabase(dataToAdd) {
		fetch('/users/sign_in', {
			method: 'POST',
			body: JSON.stringify(dataToAdd),
			credentials: 'same-origin',
        	headers: {'Content-Type': 'application/json'}
		})
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ successMessage: 'Sign-in successful' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	clearEmailErrors(event) {
		let errorState = this.state.errors
		delete errorState.email
		this.setState({ errors: errorState })	
	}

	clearPasswordErrors(event) {
		let errorState = this.state.errors
		delete errorState.password
		this.setState({ errors: errorState })	
	}

	validateEmail(input) {
		if (input.trim() === '') {
			let newError = {
				email: 'Please enter an email address'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearEmailErrors()
			return true
		}
	}

	validatePassword(input) {
		if (input.trim() === '') {
			let newError = {
				password: 'Please enter a password'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearPasswordErrors()
			return true
		}
	}

	updateEmail(input) {
		this.setState({ email: event.target.value })
		if (
			this.state.email.trim() !== '' ||
			this.state.email.length > 0
		) {
			this.clearEmailErrors()
		}
	}

	updatePassword(event) {
		this.setState({ password: event.target.value })
		if (
			this.state.password.trim() !== '' ||
			this.state.password.length > 0
		) {
			this.clearPasswordErrors()
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			email: '',
			password: '',
			errors: {},
			successMessage: ''
		})
	}

	submitForm(event) {
		event.preventDefault()
		let dataToAdd = {
				user: {
				email: '',
				password: ''
			}	
		}
		if (this.validateEmail(this.state.email)) {
			dataToAdd.user.email = this.state.email
		}
		if (this.validatePassword(this.state.password)) {
			dataToAdd.user.password = this.state.password
		}
		if (
			dataToAdd.user.email != '' &&
			dataToAdd.user.password != ''
		) {
			this.addToDatabase(dataToAdd)
			this.clearForm(event)
		}
	}

	render() {
		let errorDiv
		let errorItems
		let successDiv
		if (Object.keys(this.state.errors).length > 0) {
			errorItems = Object.values(this.state.errors).map(error => {
				return (<li key={error}>{error}</li>)
			})
			errorDiv = <div className="error-div">{errorItems}</div>
		}
		if (this.state.successMessage != '' && errorItems == null) {
			successDiv = <div className="success-div">{this.state.successMessage}</div>
		}

		return (
			<div>
				<form onSubmit={this.submitForm}>
					{errorDiv}
					{successDiv}
					<div className="email-field">
						<UserEmailField
							content={this.state.email}
							label="Email Address: "
							name="email"
							handlerFunction={this.updateEmail}
						/>
					</div>
					<div className="password-field">
						<UserPasswordField
							content={this.state.password}
							label="Password: "
							name="password"
							handlerFunction={this.updatePassword}
						/>
					</div>

					<div className="button-group">
						<button type="submit">Sign In</button>						
						<button onClick={this.clearForm}>Clear Form</button>
					</div>
				</form>				
			</div>
		)
	}
}

export default SessionsFormContainer