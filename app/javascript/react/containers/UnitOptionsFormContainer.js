import React, { Component } from 'react'
import UnitNameDropdown from '../components/UnitNameDropdown'
import UnitOptionNameField from '../components/UnitOptionNameField'
import UnitOptionDisplayNameField from '../components/UnitOptionDisplayNameField'
import UnitOptionPointsField from '../components/UnitOptionPointsField'
import UnitOptionIsSpellCheckbox from '../components/UnitOptionIsSpellCheckbox'
import UnitOptionIsUniqueCheckbox from '../components/UnitOptionIsUniqueCheckbox'

class UnitOptionsFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedUnit: '',
			name: '',
			displayName: '',
			points: '',
			isSpell: false,
			isUnique: false,
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearSelectedUnitErrors = this.clearSelectedUnitErrors.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearDisplayNameErrors = this.clearDisplayNameErrors.bind(this)
		this.clearPointsErrors = this.clearPointsErrors.bind(this)
		this.validateSelectedUnit = this.validateSelectedUnit.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateDisplayName = this.validateDisplayName.bind(this)
		this.validatePoints = this.validatePoints.bind(this)
		this.updateSelectedUnit = this.updateSelectedUnit.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateDisplayName = this.updateDisplayName.bind(this)
		this.updatePoints = this.updatePoints.bind(this)
		this.updateIsSpell = this.updateIsSpell.bind(this)
		this.updateIsUnique = this.updateIsUnique.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	addToDatabase(dataToAdd) {
		fetch('/api/v1/unit_options', {
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
			this.setState ({ successMessage: 'Unit Option added' })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

    clearSelectedUnitErrors(event) {
		let errorState = this.state.errors
		delete errorState.selectedUnit
		this.setState({ errors: errorState })
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

	validateSelectedUnit(input) {
		if (input === '' || input === {}) {
			let newError = {
				selectedUnit: 'You must select a unit'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearSelectedUnitErrors()
			return true
		}
	}

	validateName(input) {
		if (input.trim() === '') {
			let newError = {
				name: 'You must enter a name for the unit option'
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
				displayName: 'You must enter a display name for the unit option'
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

	updateSelectedUnit(event) {
		this.clearSelectedUnitErrors()
		this.setState({ selectedUnit: event.target.value })
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
		this.clearDisplayNameErrors()
		this.setState({ displayName: event.target.value })
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

	updateIsSpell(event) {
		if (!this.state.isSpell) {
			this.setState({ isSpell: true })
		}
		else { 
			this.setState({ isSpell: false })
		}
	}

	updateIsUnique(event) {
		if (!this.state.isUnique) {
			this.setState({ isUnique: true })
		}
		else { 
			this.setState({ isUnique: false })
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			selectedUnit: '',
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
			is_spell: this.state.isSpell,
			is_unique: this.state.isUnique,
			points: '',
			unit_id: ''
		}
		if (this.validateSelectedUnit(this.state.selectedUnit)) {
			dataToAdd.unit_id = this.state.selectedUnit
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
			dataToAdd.army_id!= '' &&
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
					<h2>Add New Unit Option</h2>
					{errorDiv}
					{successDiv}
					<div className="unit-name-dropdown">
						<UnitNameDropdown
							options={this.state.units}
							selection={this.state.selectedUnit}
							label="Unit: "
							name="selected-unit"
							handlerFunction={this.updateSelectedUnit}
						/>
					</div>
					<div className="unit-option-name-field">
						<UnitOptionNameField
							content={this.state.name}
							label="Name: "
							name="name"
							handlerFunction={this.updateName}
						/>
					</div>
					<div className="unit-option-display-name-field">
						<UnitOptionDisplayNameField
							content={this.state.displayName}
							label="Display Name: "
							name="display-name"
							handlerFunction={this.updateDisplayName}
						/>
					</div>
					<div className="unit-option-points-field">
						<UnitOptionPointsField
							content={this.state.points}
							label="Points: "
							name="points"
							handlerFunction={this.updatePoints}
						/>
					</div>
					<div className="unit-option-is-spell-checkbox">
						<UnitOptionIsSpellCheckbox
							content={this.state.isSpell}
							label="Spell? "
							name="is-spell"
							handlerFunction={this.updateIsSpell}
						/>
					</div>
					<div className="unit-option-is-unique-checkbox">
						<UnitOptionIsUniqueCheckbox
							content={this.state.isUnique}
							label="Unique? "
							name="is-unique"
							handlerFunction={this.updateIsUnique}
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

export default UnitOptionsFormContainer