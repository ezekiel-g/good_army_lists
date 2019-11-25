import React, { Component } from 'react'
import ArtefactNameField from '../components/ArtefactNameField'
import ArtefactDisplayNameField from '../components/ArtefactDisplayNameField'
import ArtefactPointsField from '../components/ArtefactPointsField'
import ArtefactIsHeroicCheckbox from '../components/ArtefactIsHeroicCheckbox'

class ArtefactsFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			displayName: '',
			points: '',
			isHeroic: false,
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearDisplayNameErrors = this.clearDisplayNameErrors.bind(this)
		this.clearPointsErrors = this.clearPointsErrors.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateDisplayName = this.validateDisplayName.bind(this)
		this.validatePoints = this.validatePoints.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateDisplayName = this.updateDisplayName.bind(this)
		this.updatePoints = this.updatePoints.bind(this)
		this.updateIsHeroic = this.updateIsHeroic.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	addToDatabase(dataToAdd) {
		fetch('/api/v1/artefacts', {
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
			this.setState ({ successMessage: 'Artefact added' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}	

	clearNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.name
		this.setState({ errors: errorState })
	}

	clearDisplayNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.displayName
		this.setState({ errors: errorState })
	}

	clearPointsErrors(event) {
		let errorState = this.state.errors
		delete errorState.points
		this.setState({ errors: errorState })
	}

	clearPointsHordeErrors(event) {
		let errorState = this.state.errors
		delete errorState.pointsHorde
		this.setState({ errors: errorState })
	}	

	validateName(input) {
		if (input.trim() === '') {
			let newError = {
				name: 'You must enter a name for the artefact'
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

	validateDisplayName(input) {
		if (input.trim() === '') {
			let newError = {
				displayName: 'You must enter a display name for the artefact'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearDisplayNameErrors()
			return true
		}
	}

	validatePoints(input) {
		if (input.trim() === '') {
			let newError = {
				points: 'You must enter a point value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else if (!Number.isInteger(parseInt(input)) && input !== 0) {
			let newError = {
				points: 'The point value must be a number'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearPointsErrors()
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

	updateDisplayName(event) {
		this.setState({ displayName: event.target.value })
		if (
			this.state.displayName.trim() !== '' ||
			this.state.displayName.length > 0
		) {
			this.clearDisplayNameErrors()
		}
	}

	updatePoints(event) {
		this.setState({ points: event.target.value })
		if (
			this.state.points.trim() !== '' ||
			this.state.points.length > 0
		) {
			this.clearPointsErrors()
		}
	}

	updateIsHeroic(event) {
		if (!this.state.isHeroic) {
			this.setState({ isHeroic: true })
		}
		else { 
			this.setState({ isHeroic: false })
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			name: '',
			displayName: '',
			points: '',
			errors: {},
			successMessage: ''
		})
	}

	submitForm(event) {
		event.preventDefault()
		let dataToAdd = {
			name: '',
			display_name: '',
			points: '',
			is_heroic: this.state.isHeroic
		}
		if (this.validateName(this.state.name)) {
			dataToAdd.name = this.state.name
		}
		if (this.validateDisplayName(this.state.displayName)) {
			dataToAdd.display_name = this.state.displayName
		}
		if (this.validatePoints(this.state.points)) {
			dataToAdd.points = this.state.points
		}
		if (
			dataToAdd.name != '' &&
			dataToAdd.display_name != '' &&
			dataToAdd.points != ''
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
					<h2>Add New Artefact</h2>
					{errorDiv}
					{successDiv}
					<div className="artefact-name-field">
						<ArtefactNameField
							content={this.state.name}
							label="Name: "
							name="name"
							handlerFunction={this.updateName}
						/>
					</div>
					<div className="artefact-display-name-field">
						<ArtefactDisplayNameField
							content={this.state.displayName}
							label="Display Name: "
							name="display-name"
							handlerFunction={this.updateDisplayName}
						/>
					</div>
					<div className="artefact-points-field">
						<ArtefactPointsField
							content={this.state.points}
							label="Points: "
							name="points"
							handlerFunction={this.updatePoints}
						/>
					</div>
					<div className="artefact-is-heroic-checkbox">
						<ArtefactIsHeroicCheckbox
							content={this.state.isHeroic}
							label="Heroic? "
							name="is-heroic"
							handlerFunction={this.updateIsHeroic}
						/>
					</div>

					<div className="button-group">
						<button type="submit">Add</button>
						<button onClick={this.clearForm}>Clear Fields</button>
					</div>
				</form>
			</div>
		)
	}
}

export default ArtefactsFormContainer