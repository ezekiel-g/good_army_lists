import React, { Component } from 'react'
import UnitArmyDropdown from '../components/UnitArmyDropdown'
import UnitNameField from '../components/UnitNameField'
import UnitDisplayNameField from '../components/UnitDisplayNameField'
import UnitTypeField from '../components/UnitTypeField'
import UnitTypeIndexField from '../components/UnitTypeIndexField'
import UnitSizeField from '../components/UnitSizeField'
import UnitStrengthField from '../components/UnitStrengthField'
import UnitLimitedNField from '../components/UnitLimitedNField'
import UnitPointsField from '../components/UnitPointsField'
import UnitIsIrregularCheckbox from '../components/UnitIsIrregularCheckbox'

class UnitsFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedArmy: '',
			name: '',
			displayName: '',
			unitType: '',
			unitTypeIndex: '',
			unitSize: '',
			unitStrength: '',
			limitedN: '',
			points: '',
			isIrregular: false,
			errors: {},
			successMessage: ''
		}
		this.addToDatabase = this.addToDatabase.bind(this)
		this.clearSelectedArmyErrors = this.clearSelectedArmyErrors.bind(this)
		this.clearNameErrors = this.clearNameErrors.bind(this)
		this.clearDisplayNameErrors = this.clearDisplayNameErrors.bind(this)
		this.clearUnitTypeErrors = this.clearUnitTypeErrors.bind(this)
		this.clearUnitTypeIndexErrors = this.clearUnitTypeIndexErrors.bind(this)
		this.clearUnitStrengthErrors = this.clearUnitStrengthErrors.bind(this)
		this.clearPointsErrors = this.clearPointsErrors.bind(this)
		this.validateSelectedArmy = this.validateSelectedArmy.bind(this)
		this.validateName = this.validateName.bind(this)
		this.validateDisplayName = this.validateDisplayName.bind(this)
		this.validateUnitType = this.validateUnitType.bind(this)
		this.validateUnitTypeIndex = this.validateUnitTypeIndex.bind(this)
		this.validateUnitStrength = this.validateUnitStrength.bind(this)
		this.validatePoints = this.validatePoints.bind(this)
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateDisplayName = this.updateDisplayName.bind(this)
		this.updateUnitType = this.updateUnitType.bind(this)
		this.updateUnitTypeIndex = this.updateUnitTypeIndex.bind(this)		
		this.updateUnitSize = this.updateUnitSize.bind(this)
		this.updateUnitStrength = this.updateUnitStrength.bind(this)
		this.updateLimitedN = this.updateLimitedN.bind(this)
		this.updatePoints = this.updatePoints.bind(this)
		this.updateIsIrregular = this.updateIsIrregular.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	addToDatabase(dataToAdd) {
		fetch('/api/v1/units', {
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
			this.setState ({ successMessage: 'Unit added' })
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

	clearDisplayNameErrors(event) {
		let errorState = this.state.errors
		delete errorState.displayName
		this.setState({ errors: errorState })
	}

	clearUnitTypeErrors(event) {
		let errorState = this.state.errors
		delete errorState.unitType
		this.setState({ errors: errorState })
	}

	clearUnitTypeIndexErrors(event) {
		let errorState = this.state.errors
		delete errorState.unitTypeIndex
		this.setState({ errors: errorState })
	}

	clearUnitStrengthErrors(event) {
		let errorState = this.state.errors
		delete errorState.unitStrength
		this.setState({ errors: errorState })
	}

	clearPointsErrors(event) {
		let errorState = this.state.errors
		delete errorState.points
		this.setState({ errors: errorState })
	}

	validateSelectedArmy(input) {
		if (input === '') {
			let newError = {
				selectedArmy: 'You must select the unit\'s army'
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
				name: 'You must enter a name for the unit'
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
				displayName: 'You must enter a display name for the unit'
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

	validateUnitType(input) {
		if (input.trim() === '') {
			let newError = {
				unitType: 'You must enter a type value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUnitTypeErrors()
			return true
		}
	}

	validateUnitTypeIndex(input) {
		if (input.trim() === '') {
			let newError = {
				unitTypeIndex: 'You must enter a type index'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else if (!Number.isInteger(parseInt(input))) {
			let newError = {
				points: 'The type index must be a number'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUnitTypeIndexErrors()
			return true
		}
	}

	validateUnitStrength(input) {
		if (input.trim() === '') {
			let newError = {
				unitStrength: 'You must enter a Unit Strength value'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else if (!Number.isInteger(parseInt(input))) {
			let newError = {
				points: 'The Unit Strength value must be a number'
			}
			this.setState({
				errors: Object.assign(this.state.errors, newError)
			})
			return false
		} else {
			this.clearUnitStrengthErrors()
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

	updateDisplayName(event) {
		this.setState({ displayName: event.target.value })
		if (
			this.state.displayName.trim() !== '' ||
			this.state.displayName.length > 0
		) {
			this.clearDisplayNameErrors()
		}
	}

	updateUnitType(event) {
		this.setState({ unitType: event.target.value })
		if (
			this.state.unitType.trim() !== '' ||
			this.state.unitType.length > 0
		) {
			this.clearUnitTypeErrors()
		}
	}

	updateUnitTypeIndex(event) {
		this.setState({ unitTypeIndex: event.target.value })
		if (
			this.state.unitTypeIndex.trim() !== '' ||
			this.state.unitTypeIndex.length > 0
		) {
			this.clearUnitTypeIndexErrors()
		}
	}

	updateUnitSize(event) {
		this.setState({ unitSize: event.target.value })
	}

	updateUnitStrength(event) {
		this.setState({ unitStrength: event.target.value })
		if (
			this.state.unitStrength.trim() !== '' ||
			this.state.unitStrength.length > 0
		) {
			this.clearUnitStrengthErrors()
		}
	}

	updateLimitedN() {
		this.setState({ limitedN: event.target.value })
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

	updateIsIrregular(event) {
		if (!this.state.isIrregular) {
			this.setState({ isIrregular: true })
		}
		else { 
			this.setState({ isIrregular: false })
		}
	}

	clearForm(event) {
		event.preventDefault()
		this.setState({
			selectedArmy: '',
			name: '',
			displayName: '',
			unitType: '',
			unitTypeIndex: '',
			unitSize: '',
			unitStrength: '',
			limitedN: '',
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
			unit_type: '',
			unit_type_index: '',
			unit_size: this.state.unitSize,
			unit_strength: '',
			limited_n: this.state.limitedN,
			points: '',
			is_irregular: this.state.isIrregular,
			army_id: ''
		}
		if (this.validateSelectedArmy(this.state.selectedArmy)) {
			dataToAdd.army_id = this.state.selectedArmy
		}
		if (this.validateName(this.state.name)) {
			dataToAdd.name = this.state.name
		}
		if (this.validateDisplayName(this.state.displayName)) {
			dataToAdd.display_name = this.state.displayName
		}
		if (this.validateUnitType(this.state.unitType)) {
			dataToAdd.unit_type = this.state.unitType
		}
		if (this.validateUnitTypeIndex(this.state.unitTypeIndex)) {
			dataToAdd.unit_type_index = this.state.unitTypeIndex
		}
		if (this.validateUnitStrength(this.state.unitStrength)) {
			dataToAdd.unit_strength = this.state.unitStrength
		}
		if (this.validatePoints(this.state.points)) {
			dataToAdd.points = this.state.points
		}
		if (
			dataToAdd.army_id != '' &&
			dataToAdd.name != '' &&
			dataToAdd.unit_type != '' &&
			dataToAdd.unit_type_index != '' &&
			dataToAdd.unit_strength != '' &&
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
					<h2>Add New Unit</h2>
					{errorDiv}
					{successDiv}
					<div className="unit-army-dropdown">
						<UnitArmyDropdown
							selection={this.state.selectedArmy}
							label="Army: "
							name="army"
							handlerFunction={this.updateSelectedArmy}
						/>
					</div>
					<div className="unit-name-field">
						<UnitNameField
							content={this.state.name}
							label="Name: "
							name="name"
							handlerFunction={this.updateName}
						/>
					</div>
					<div className="unit-display-name-field">
						<UnitDisplayNameField
							content={this.state.displayName}
							label="Display Name: "
							name="display-name"
							handlerFunction={this.updateDisplayName}
						/>
					</div>
					<div className="unit-type-field">
						<UnitTypeField
							content={this.state.unitType}
							label="Type: "
							name="unit-type"
							handlerFunction={this.updateUnitType}
						/>
					</div>
					<div className="unit-type-index-field">
						<UnitTypeIndexField
							content={this.state.unitTypeIndex}
							label="Type Index: "
							name="unit-type-index"
							handlerFunction={this.updateUnitTypeIndex}
						/>
					</div>
					<div className="unit-size-field">
						<UnitSizeField
							content={this.state.unitSize}
							label="Size: "
							name="unit-size"
							handlerFunction={this.updateUnitSize}
						/>
					</div>
					<div className="unit-strength-field">
						<UnitStrengthField
							content={this.state.unitStrength}
							label="Unit Strength: "
							name="unit-strength"
							handlerFunction={this.updateUnitStrength}
						/>
					</div>
					<div className="unit-limited-n-field">
						<UnitLimitedNField
							content={this.state.limitedN}
							label="Limited(n)? "
							name="limited-n"
							handlerFunction={this.updateLimitedN}
						/>
					</div>
					<div className="unit-points-field">
						<UnitPointsField
							content={this.state.points}
							label="Points: "
							name="points"
							handlerFunction={this.updatePoints}
						/>
					</div>
					<div className="unit-is-irregular-checkbox">
						<UnitIsIrregularCheckbox
							content={this.state.isIrregular}
							label="Irregular? "
							name="is-irregular"
							handlerFunction={this.updateIsIrregular}
						/>
					</div>

					<div className="button-group">
						<button type="submit">Add</button>
						<button onClick={this.clearForm}>Clear Form</button>
					</div>
				</form>
			</div>
		)
	}
}

export default UnitsFormContainer