import React, { Component } from 'react'

class ListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: [],
			selectedArmy: '',
			listedUnits: [],
			selectedUnitOptions: [],
			selectedVeteranAbilities: [],
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			formattedListVisible: false,
			unitOptionsVisible: false,
			veteranAbilitiesVisible: false
		}
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.calculatePointTotal = this.calculatePointTotal.bind(this)
		this.calculateUnitStrengthTotal = this.calculateUnitStrengthTotal.bind(this)
		this.calculateUnitTypeCounts = this.calculateUnitTypeCounts.bind(this)
		this.calculateMaximumCount = this.calculateMaximumCount.bind(this)
		this.calculateUnlocks = this.calculateUnlocks.bind(this)
		this.addUnitToList = this.addUnitToList.bind(this)
		this.determineIfGreyedOut = this.determineIfGreyedOut.bind(this)
		this.removeUnitFromList = this.removeUnitFromList.bind(this)
		this.selectUnitOptions = this.selectUnitOptions.bind(this)
		this.selectVeteranAbility = this.selectVeteranAbility.bind(this)
		this.removeUnitOption = this.removeUnitOption.bind(this)
		this.removeVeteranAbility = this.removeVeteranAbility.bind(this)
		this.toggleUnitOptions = this.toggleUnitOptions.bind(this)
		this.toggleVeteranAbilities = this.toggleVeteranAbilities.bind(this)
		this.updateUnitBeingGivenOption = this.updateUnitBeingGivenOption.bind(this)
		this.updateUnitBeingGivenVeteranAbility = this.updateUnitBeingGivenVeteranAbility.bind(this)
		this.showFormattedList = this.showFormattedList.bind(this)
		this.hideFormattedList = this.hideFormattedList.bind(this)
		this.clearList = this.clearList.bind(this)
	}

	updateSelectedArmy(selectedArmy) {
		this.setState({ selectedArmy })
		this.clearList()
	}

	calculatePointTotal(listedUnitArray, unitOptionArray, veteranAbilityArray) {

	}

	calculateUnitStrengthTotal(listedUnitArray) {

	}

	calculateUnitTypeCounts(listedUnitArray) {

	}

	calculateMaximumCount(pointTotal) {

	}

	calculateUnlocks(listedUnitArray) {

	}

	addUnitToList(unitToAdd) {

	}

	determineIfGreyedOut(listedUnitArray) {

	}

	removeUnitFromList(unitObject) {

	}

	selectUnitOptions(unitObject, highlightedUnitOptions) {

	}

	selectVeteranAbility(unitObject, veteranAbility) {

	}

	removeUnitOption(unitOptionObject) {

	}

	removeVeteranAbility(veteranAbilityObject) {

	}

	toggleUnitOptions() {
		if (this.state.unitOptionsVisible === false) {
			this.setState({ unitOptionsVisible: true })
		} else {
			this.setState({
				unitOptionsVisible: false,
				unitBeingGivenOption: '',
				alliedUnitBeingGivenOption: ''
			})
		}
	}

	toggleVeteranAbilities() {
		if (this.state.veteranAbilitiesVisible === false) {
			this.setState({ veteranAbilitiesVisible: true })
		} else {
			this.setState({
				veteranAbilitiesVisible: false,
				unitBeingGivenVeteranAbility: ''
			})
		}
	}

	updateUnitBeingGivenOption(unit) {
		this.setState({ unitBeingGivenOption: unit })
		this.toggleUnitOptions()
	}

	updateUnitBeingGivenVeteranAbility(unit) {
		this.setState({ unitBeingGivenVeteranAbility: unit })
		this.toggleVeteranAbilities()
	}

	showFormattedList() {
		let emailDiv = document.getElementsByClassName('email-div')[0]
		emailDiv.classList.add('user-select-none')
		this.setState({ formattedListVisible: true })
	}

	hideFormattedList() {
		let emailDiv = document.getElementsByClassName('email-div')[0]
		emailDiv.classList.remove('user-select-none')		
		this.setState({ formattedListVisible: false })
	}


	clearList() {
		this.setState({
			listedUnits: [],
			selectedUnitOptions: [],
			selectedVeteranAbilities: [],
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			formattedListVisible: false,
			unitOptionsVisible: false,
			veteranAbilitiesVisible: false
		})
	}

	render() {
		let selectedArmy = this.state.selectedArmy

		return (
			<div className="sections-container">	
				Hi
			</div>
		)
	}
}

export default ListContainer