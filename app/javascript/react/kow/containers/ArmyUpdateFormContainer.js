import React, { Component } from 'react'
import ArmyDropdown from '../components/ArmyDropdown'
import ArmyNameField from '../components/ArmyNameField'
import ArmyAlignmentDropdown from '../components/ArmyAlignmentDropdown'

class ArmyUpdateFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: [],
			selectedArmy: {},
			name: '',
			alignment: '',
			alignmentOptions: ['Good', 'Evil', 'Neutral'],
			errors: {},
			successMessage: ''
		}
		this.updateDatabase = this.updateDatabase.bind(this)
		this.clearSelectedArmyErrors = this.clearSelectedArmyErrors.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearAlignmentErrors = this.clearAlignmentErrors.bind(this)
		this.validateSelectedArmy = this.validateSelectedArmy.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateAlignment = this.validateAlignment.bind(this)
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateAlignment = this.updateAlignment.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/armies')
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
			this.setState({ armies: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
		this.clearForm(event)
	}

	updateDatabase(id, dataToAdd) {
		fetch(`/api/v1/armies/${id}`, {
			method: 'PUT',
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
			this.setState({ successMessage: 'Army updated' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

    clearSelectedArmyErrors(event) {
		let errorState = this.state.errors
		delete errorState.selectedArmy
		this.setState({ errors: errorState })
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

	validateSelectedArmy(input) {
		if (input === '' || input === {}) {
			let newError = {
				selectedArmy: 'You must select an army to update'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearSelectedArmyErrors()
			return true
		}
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
		if (input === '') {
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

	updateSelectedArmy(event) {
		this.clearSelectedArmyErrors()
		this.setState({ selectedArmy: event.target.value })
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
			selectedArmy: '',
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
		let id = ''
		if (this.validateSelectedArmy(this.state.selectedArmy)) {
			id = this.state.selectedArmy
		}
		if (this.validateName(this.state.name)) {
			dataToAdd.name = this.state.name
		}
		if (this.validateAlignment(this.state.alignment)) {
			dataToAdd.alignment = this.state.alignment
		}
		if (
			id != '' &&
			dataToAdd.name != '' &&
			dataToAdd.alignment != ''
		) {
			this.updateDatabase(id, dataToAdd)
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
					<h2>Update Army</h2>
					{errorDiv}
					{successDiv}
					<div className="army-name-dropdown">
						<ArmyDropdown
							options={this.state.armies}
							selection={this.state.selectedArmy}
							label="Army: "
							name="selected-army"
							handlerFunction={this.updateSelectedArmy}
						/>
					</div>
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
						<button type="submit">Update</button>
						<button onClick={this.clearForm}>Clear Form</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ArmyUpdateFormContainer