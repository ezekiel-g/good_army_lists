import React, { Component } from 'react'
import ArmyNameField from '../components/ArmyNameField'
import ArmyAlignmentDropdown from '../components/ArmyAlignmentDropdown'

class ArmiesFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			alignment: '',
			alignmentOptions: ['Good', 'Evil', 'Neutral'],
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearAlignmentErrors = this.clearAlignmentErrors.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateAlignment = this.validateAlignment.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateAlignment = this.updateAlignment.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	addToDatabase(dataToAdd) {
		fetch('/api/v1/armies', {
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
			this.setState({ successMessage: 'Army added' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}	

	clearNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.name
		this.setState({ errors: errorState })
	}

	clearAlignmentErrors(event) {
		let errorState = this.state.errors
		delete errorState.alignment
		this.setState({ errors: errorState })
	}

	validateName(input) {
		if (input.trim() === '') {
			let newError = {
				name: 'You must enter a name'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearNameErrors()
			return true
		}
	}

	validateAlignment(input) {
		if (input.trim() === '') {
			let newError = {
				alignment: 'You must select an alignment'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearAlignmentErrors()
			return true
		}
	}

	updateName(event) {
		this.setState({ name: event.target.value })
		if (
			this.state.name.trim() !== '' ||
			this.state.name.length > 0
		) {
			this.clearNameErrors()
		}
	}

	updateAlignment(event) {
		this.clearAlignmentErrors()
		this.setState({ alignment: event.target.value })
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			name: '',
			alignment: '',
			errors: {},
			successMessage: ''
		})
	}

	submitForm(event) {
		event.preventDefault()
		let dataToAdd = {
			name: '',
			alignment: ''
		}				
		if (this.validateName(this.state.name)) {
			dataToAdd.name = this.state.name
		}
		if (this.validateAlignment(this.state.alignment)) {
			dataToAdd.alignment = this.state.alignment
		}
		if (dataToAdd.name != '' && dataToAdd.alignment != '') {
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
			<form onSubmit={this.submitForm}>
				<h2>Add New Army</h2>
				{errorDiv}
				{successDiv}
				<div className="army-name-field">
					<ArmyNameField
						content={this.state.name}
						label="Name: "
						name="name"
						handlerFunction={this.updateName}
					/>
				</div>
				<div className="army-alignment-dropdown">
					<ArmyAlignmentDropdown
						options={this.state.alignmentOptions}
						selection={this.state.alignment}
						label="Alignment: "
						name="alignment"
						handlerFunction={this.updateAlignment}
					/>
				</div>

				<div className="button-group">
					<button type="submit">Add</button>
					<button onClick={this.clearForm}>Clear Form</button>
				</div>
			</form>
		)
	}
}

export default ArmiesFormContainer