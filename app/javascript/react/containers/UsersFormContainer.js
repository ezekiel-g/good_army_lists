import React, { Component } from 'react'
import UsernameField from '../components/UsernameField'
import UserEmailField from '../components/UserEmailField'
import UserEmailConfirmationField from '../components/UserEmailConfirmationField'
import UserPasswordField from '../components/UserPasswordField'
import UserPasswordConfirmationField from '../components/UserPasswordConfirmationField'

class UsersFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			email: '',
			emailConfirmation: '',
			password: '',
			passwordConfirmation: '',
			role: 'member',
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearUsernameErrors = this.clearUsernameErrors.bind(this)
		this.clearEmailErrors = this.clearEmailErrors.bind(this)
		this.clearEmailConfirmationErrors= this.clearEmailConfirmationErrors.bind(this)
		this.clearPasswordErrors = this.clearPasswordErrors.bind(this)
		this.clearPasswordConfirmationErrors = this.clearPasswordConfirmationErrors.bind(this)
		this.validateUsername = this.validateUsername.bind(this)
		this.validateEmail = this.validateEmail.bind(this)
		this.validateEmailConfirmation = this.validateEmailConfirmation.bind(this)
		this.validatePassword = this.validatePassword.bind(this)
		this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this)
		this.updateUsername = this.updateUsername.bind(this)
		this.updateEmail = this.updateEmail.bind(this)
		this.updateEmailConfirmation = this.updateEmailConfirmation.bind(this)
		this.updatePassword = this.updatePassword.bind(this)
		this.updatePasswordConfirmation = this.updatePasswordConfirmation.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	addToDatabase(dataToAdd) {
		fetch('/users', {
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
			this.setState({ successMessage: 'Sign-up successful' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	clearUsernameErrors(event) {
		let errorState = this.state.errors
		delete errorState.username
		this.setState({ errors: errorState })
	}

	clearEmailErrors(event) {
		let errorState = this.state.errors
		delete errorState.email
		this.setState({ errors: errorState })	
	}

	clearEmailConfirmationErrors(event) {
		let errorState = this.state.errors
		delete errorState.emailConfirmation
		this.setState({ errors: errorState })	
	}

	clearPasswordErrors(event) {
		let errorState = this.state.errors
		delete errorState.password
		this.setState({ errors: errorState })	
	}

	clearPasswordConfirmationErrors(event) {
		let errorState = this.state.errors
		delete errorState.passwordConfirmation
		this.setState({ errors: errorState })	
	}

	validateUsername(input) {
		if (input.trim() === '') {
			let newError = {
				username: 'You must enter a username'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUsernameErrors()
			return true
		}
	}

	validateEmail(input) {
		if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.trim())) {
			let newError = {
				email: 'You must enter an email address with a valid format'
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

	validateEmailConfirmation(input) {
		if (input.trim() === '') {
			let newError = {
				emailConfirmation: 'You must enter your email address twice'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false				
		} else if (input.trim() !== this.state.email) {
			let newError = {
				emailConfirmation: 'Your email address entries must match'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false			
		} else {
			this.clearEmailConfirmationErrors()
			return true
		}
	}

	validatePassword(input) {
		if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/.test(input.trim())) {
			let newError = {
				password: 'You must enter a password with a capital letter, a lowercase letter, a numeral, a symbol and 8-20 characters total'
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

	validatePasswordConfirmation(input) {
		if (input.trim() === '') {
			let newError = {
				passwordConfirmation: 'You must enter your password twice'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false	
		} else if (input.trim() !== this.state.password) {
			let newError = {
				passwordConfirmation: 'Your password entries must match'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false			
		} else {
			this.clearPasswordConfirmationErrors()
			return true
		}
	}

	updateUsername(event) {
		this.setState({ username: event.target.value })
		if (
			this.state.username.trim() !== '' ||
			this.state.username.length > 0
		) {
			this.clearUsernameErrors()
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

	updateEmailConfirmation() {
		this.setState({ emailConfirmation: event.target.value })
		if (
			this.state.emailConfirmation.trim() !== '' ||
			this.state.emailConfirmation.length > 0
		) {
			this.clearEmailConfirmationErrors()
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

	updatePasswordConfirmation(event) {
		this.setState({ passwordConfirmation: event.target.value })
		if (
			this.state.passwordConfirmation.trim() !== '' ||
			this.state.passwordConfirmation.length > 0
		) {
			this.clearPasswordConfirmationErrors()
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			username: '',
			email: '',
			emailConfirmation: '',
			password: '',
			passwordConfirmation: '',
			role: 'member',
			errors: {},
			successMessage: ''
		})
	}

	submitForm(event) {
		event.preventDefault()
		let dataToAdd = {
				user: {
				username: '',
				email: '',
				email_confirmation: '',
				password: '',
				password_confirmation: '',
				role: 'member'
			}		
		}
		if (this.validateUsername(this.state.username)) {
			dataToAdd.user.username = this.state.username
		}
		if (this.validateEmail(this.state.email)) {
			dataToAdd.user.email = this.state.email
		}
		if (this.validateEmailConfirmation(this.state.emailConfirmation)) {
			dataToAdd.user.email_confirmation = this.state.emailConfirmation
		}
		if (this.validatePassword(this.state.password)) {
			dataToAdd.user.password = this.state.password
		}
		if (this.validatePasswordConfirmation(this.state.passwordConfirmation)) {
			dataToAdd.user.password_confirmation = this.state.passwordConfirmation
		}
		if (
			dataToAdd.user.username != '' &&
			dataToAdd.user.email != '' &&
			dataToAdd.user.email_confirmation != '' &&
			dataToAdd.user.password != '' &&
			dataToAdd.user.password_confirmation != '' &&
			dataToAdd.user.role != ''
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
					<div className="username-field">
						<UsernameField
							content={this.state.username}
							label="Username: "
							name="username"
							handlerFunction={this.updateUsername}
						/>
					</div>
					<div className="email-field">
						<UserEmailField
							content={this.state.email}
							label="Email Address: "
							name="email"
							handlerFunction={this.updateEmail}
						/>
					</div>
					<div className="email-confirmation-field">
						<UserEmailConfirmationField
							content={this.state.emailConfirmation}
							label="Email Address Reentry: "
							name="email-confirmation"
							handlerFunction={this.updateEmailConfirmation}
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
					<div className="password-confirmation-field">
						<UserPasswordConfirmationField
							content={this.state.passwordConfirmation}
							label="Password Reentry: "
							name="password"
							handlerFunction={this.updatePasswordConfirmation}						
						/>
					</div>

					<div className="button-group">
						<button type="submit">Sign Up</button>						
						<button onClick={this.clearForm}>Clear Form</button>
					</div>
				</form>
			</div>
		)
	}
}

export default UsersFormContainer