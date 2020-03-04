import React, { Component } from 'react'
import Select from 'react-select'
import Modal from 'react-modal'
import UnitEntryButton from '../components/UnitEntryButton'
import UnitOptionIcon from '../components/UnitOptionIcon'
import UnitEntryNameTile from '../components/UnitEntryNameTile'
import UnitOptionSelectionTile from '../components/UnitOptionSelectionTile'
import FormattedList from '../components/FormattedList'
import whiteSquare from '../../../../assets/images/whiteSquare.png'
import RulesContainer from './RulesContainer'
import paypal from '../../../../assets/images/paypal.gif'

class ListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedPage: '',
			listedUnits: [],
			selectedUnitOptions: [],
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			formattedListVisible: false,
			unitOptionsVisible: false,
		}
		this.updateSelectedPage = this.updateSelectedPage.bind(this)
		this.calculatePointTotal = this.calculatePointTotal.bind(this)
		this.calculateUnitStrengthTotal = this.calculateUnitStrengthTotal.bind(this)
		this.calculateUnitTypeCounts = this.calculateUnitTypeCounts.bind(this)
		this.calculateMaximumCount = this.calculateMaximumCount.bind(this)
		this.addUnlocks = this.addUnlocks.bind(this)
		this.subtractUnlocks = this.subtractUnlocks.bind(this)
		this.addUnitToList = this.addUnitToList.bind(this)
		this.determineIfGreyedOut = this.determineIfGreyedOut.bind(this)
		this.removeUnitFromList = this.removeUnitFromList.bind(this)
		this.selectUnitOptions = this.selectUnitOptions.bind(this)
		this.removeUnitOption = this.removeUnitOption.bind(this)
		this.toggleUnitOptions = this.toggleUnitOptions.bind(this)
		this.updateUnitBeingGivenOption = this.updateUnitBeingGivenOption.bind(this)
		this.showFormattedList = this.showFormattedList.bind(this)
		this.hideFormattedList = this.hideFormattedList.bind(this)
		this.clearList = this.clearList.bind(this)
	}

	updateSelectedPage(selectedPage) {
		this.setState({ selectedPage })
	}

	calculatePointTotal(listedUnitArray, unitOptionArray) {
		let pointTotal = 0
		let i
		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			for (i = 0; i < listedUnitArray.length; i++) {
				pointTotal += listedUnitArray[i].unit.points
			}
		}
		if (unitOptionArray == undefined) {
			unitOptionArray = this.state.selectedUnitOptions
		}
		for (i = 0; i < unitOptionArray.length; i++) {
			pointTotal += unitOptionArray[i].unitOption.points
		}
		return pointTotal
	}

	calculateUnitStrengthTotal(listedUnitArray) {
		let unitStrengthTotal = 0
		let i
		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			for (i = 0; i < listedUnitArray.length; i++) {
				unitStrengthTotal += listedUnitArray[i].unit.unit_strength
			}
		}
		return unitStrengthTotal
	}

	calculateUnitTypeCounts(listedUnitArray) {
		let unitTypeCountObject = {
			troopCount: 0,
			heroCount: 0,
			warEngineCount: 0,
			monsterCount: 0,
			hordeCount: 0,
			regimentCount: 0
		}
		let i
		if (listedUnitArray != undefined) {
			for (i = 0; i < listedUnitArray.length; i++) {
				if (
					listedUnitArray[i].unit.unit_size === 'Troop' ||
					listedUnitArray[i].unit.is_irregular === true
				) {
					unitTypeCountObject.troopCount += 1
				}
				if (listedUnitArray[i].unit.unit_type === 'War Machine Battery') {
					unitTypeCountObject.warEngineCount += 1
				}	
				if (listedUnitArray[i].unit.unit_type === 'Monster Unit') {
					unitTypeCountObject.monsterCount += 1
				}
				if (listedUnitArray[i].unit.unit_type === 'Hero Entourage') {
					unitTypeCountObject.heroCount += 1
				}
				if (listedUnitArray[i].unit.is_irregular === false) {
					if (listedUnitArray[i].unit.unlocking_class === 3) {
						unitTypeCountObject.hordeCount += 1
					}
					if (listedUnitArray[i].unit.unlocking_class === 1) {
						unitTypeCountObject.regimentCount += 1
					}
				}
			}
		}
		return unitTypeCountObject
	}

	calculateMaximumCount(pointTotal) {
		let maximumCount
		if (pointTotal < 3000) {
			maximumCount = 3
		} else if (pointTotal < 4000) {
			maximumCount = 4
		} else if (pointTotal < 5000) {
			maximumCount = 5
		} else if (pointTotal < 6000) {
			maximumCount = 6
		} else if (pointTotal < 7000) {
			maximumCount = 7
		} else if (pointTotal < 8000) {
			maximumCount = 8
		} else if (pointTotal < 9000) {
			maximumCount = 9
		} else if (pointTotal < 10000) {
			maximumCount = 10
		} else if (pointTotal < 11000) {
			maximumCount = 11
		} else if (pointTotal < 12000) {
			maximumCount = 12
		} else if (pointTotal < 13000) {
			maximumCount = 13
		} else if (pointTotal < 14000) {
			maximumCount = 14
		} else if (pointTotal < 15000) {
			maximumCount = 15
		} else if (pointTotal < 16000) {
			maximumCount = 16
		} else if (pointTotal < 17000) {
			maximumCount = 17
		} else if (pointTotal < 18000) {
			maximumCount = 18
		} else if (pointTotal < 19000) {
			maximumCount = 19
		} else if (pointTotal < 20000) {
			maximumCount = 20
		} else if (pointTotal < 21000) {
			maximumCount = 21
		} else if (pointTotal < 22000) {
			maximumCount = 22
		} else if (pointTotal < 23000) {
			maximumCount = 23
		} else if (pointTotal < 24000) {
			maximumCount = 24
		} else if (pointTotal < 25000) {
			maximumCount = 25
		} else if (pointTotal < 26000) {
			maximumCount = 26
		} else if (pointTotal < 27000) {
			maximumCount = 27
		} else if (pointTotal < 28000) {
			maximumCount = 28
		} else if (pointTotal < 29000) {
			maximumCount = 29
		} else if (pointTotal < 30000) {
			maximumCount = 30
		} else if (pointTotal < 31000) {
			maximumCount = 31
		} else if (pointTotal < 32000) {
			maximumCount = 32
		} else if (pointTotal < 33000) {
			maximumCount = 33
		} else if (pointTotal < 34000) {
			maximumCount = 34
		} else if (pointTotal < 35000) {
			maximumCount = 35
		} else if (pointTotal < 36000) {
			maximumCount = 36
		} else if (pointTotal < 37000) {
			maximumCount = 37
		} else if (pointTotal < 38000) {
			maximumCount = 38
		} else if (pointTotal < 39000) {
			maximumCount = 39
		} else if (pointTotal < 40000) {
			maximumCount = 40
		} else if (pointTotal < 41000) {
			maximumCount = 41
		} else if (pointTotal < 42000) {
			maximumCount = 42
		} else if (pointTotal < 43000) {
			maximumCount = 43
		} else if (pointTotal < 44000) {
			maximumCount = 44
		} else if (pointTotal < 45000) {
			maximumCount = 45
		} else if (pointTotal < 46000) {
			maximumCount = 46
		} else if (pointTotal < 47000) {
			maximumCount = 47
		} else if (pointTotal < 48000) {
			maximumCount = 48
		} else if (pointTotal < 49000) {
			maximumCount = 49
		} else if (pointTotal < 40000) {
			maximumCount = 50
		}
		return maximumCount
	}

	addUnlocks(listedUnitArray) {
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
		let unlockObject = {
			troopUnlocks: 0,
			heroUnlocks: 0,
			warEngineUnlocks: 0,
			monsterUnlocks: 0,
			unlocksFromRegiments: 0
		}
		let i

		for (i = 0; i < listedUnitArray.length; i++) {
			if (listedUnitArray[i].unit.is_irregular === false) {
				if (listedUnitArray[i].unit.unlocking_class === 3) {
					unlockObject.troopUnlocks += 4
					unlockObject.heroUnlocks += 1
					unlockObject.warEngineUnlocks += 1
					unlockObject.monsterUnlocks += 1

				}
				if (listedUnitArray[i].unit.unlocking_class === 1) {
					unlockObject.troopUnlocks += 2
					unlockObject.unlocksFromRegiments += 1
				}
			}
		}
		return unlockObject
	}

	subtractUnlocks(listedUnitArray) {
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
		let unlockObject = this.addUnlocks(listedUnitArray)

		let regimentToHero = unitTypeCountObject.regimentCount
		let regimentToWarEngine = unitTypeCountObject.regimentCount
		let regimentToMonster = unitTypeCountObject.regimentCount
		
		let hordeToHero = unitTypeCountObject.hordeCount
		let hordeToWarEngine = unitTypeCountObject.hordeCount
		let hordeToMonster = unitTypeCountObject.hordeCount

		let i
		for (i = 0; i < unitTypeCountObject.heroCount; i++) {
			if (hordeToHero > 0) {
				hordeToHero--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
			}
		}

		for (i = 0; i < unitTypeCountObject.warEngineCount; i++) {
			if (hordeToWarEngine > 0) {
				hordeToWarEngine--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
			}
		}

		for (i = 0; i < unitTypeCountObject.monsterCount; i++) {
			if (hordeToMonster > 0) {
				hordeToMonster--
				hordeToTitan--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
			}
		}
		
		let heroTotals = [regimentToHero, hordeToHero]
		let warEngineTotals = [regimentToWarEngine, hordeToWarEngine]
		let monsterTotals = [regimentToMonster, hordeToMonster]

		unlockObject.troopUnlocks = (unlockObject.troopUnlocks - unitTypeCountObject.troopCount)
		unlockObject.heroUnlocks = Math.max.apply(null, heroTotals)
		unlockObject.warEngineUnlocks = Math.max.apply(null, warEngineTotals)
		unlockObject.monsterUnlocks = Math.max.apply(null, monsterTotals)
		unlockObject.unlocksFromRegiments = regimentToHero

		return unlockObject
	}

	addUnitToList(unitToAdd) {
		let listedUnits = this.state.listedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount, unit: unitToAdd }
		listedUnits.push(unitToAddWithIndex)
		indexCount += 1
		let pointTotal = this.calculatePointTotal(listedUnits)
		this.setState({
			listedUnits: listedUnits,
			indexCount: indexCount,
			pointTotal: pointTotal,
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits),
			unitTypeCountObject: this.calculateUnitTypeCounts(listedUnits),
			unlockObject: this.subtractUnlocks(listedUnits),
			maximumCount: this.calculateMaximumCount(pointTotal),
			unitOptionsVisible: false
		})
	}

	determineIfGreyedOut(listedUnitArray) {
		let units = this.props.units
		let greyedOutUnits = []
		let locked
		let pointTotal = this.calculatePointTotal(listedUnitArray)
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
		let unlockObject = this.addUnlocks(listedUnitArray)
		let i
		let i2

		let determineIfCanAdd = (unitTypeCountObject, unlockObject) => {
			let canOrCannotAdd = {
				troop: false,
				hero: false,
				warEngine: false,
				monster: false,
				titan: false
			}

			let hordeIntoHero = unitTypeCountObject.hordeCount
			let hordeIntoWarEngine = unitTypeCountObject.hordeCount
			let hordeIntoMonster = unitTypeCountObject.hordeCount
			let regimentIntoHero = unitTypeCountObject.regimentCount
			let regimentIntoWarEngine = unitTypeCountObject.regimentCount
			let regimentIntoMonster = unitTypeCountObject.regimentCount	
			let i

			for (i = 0; i < unitTypeCountObject.heroCount; i++) {
				if (hordeIntoHero > 0) {
					hordeIntoHero--
				}
				else {
					regimentIntoHero--
					regimentIntoWarEngine--
					regimentIntoMonster--
				}
			}

			for (i = 0; i < unitTypeCountObject.warEngineCount; i++) {
				if (hordeIntoWarEngine > 0) {
					hordeIntoWarEngine--
				}
				else {
					regimentIntoHero--
					regimentIntoWarEngine--
					regimentIntoMonster--
				}
			}

			for (i = 0; i < unitTypeCountObject.monsterCount; i++) {
				if (hordeIntoMonster > 0 ){
					hordeIntoMonster--
				}
				else {
					regimentIntoHero--
					regimentIntoWarEngine--
					regimentIntoMonster--
				}
			}
			
			canOrCannotAdd.troop = (unitTypeCountObject.troopCount < unlockObject.troopUnlocks)
			canOrCannotAdd.hero = (regimentIntoHero > 0 || hordeIntoHero > 0)
			canOrCannotAdd.warEngine = (regimentIntoWarEngine > 0 || hordeIntoWarEngine > 0)
			canOrCannotAdd.monster = (regimentIntoMonster > 0 || hordeIntoMonster > 0)
			
			return canOrCannotAdd
		}

		for (i = 0; i < units.length; i++) {
			let maybeMaxedOut = []
			locked = false
			for (i2 = 0; i2 < listedUnitArray.length; i2++) {
				if (
					(units[i].unit_type === 'War Machine Battery' && listedUnitArray[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Monster Unit' && listedUnitArray[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Hero Entourage' && listedUnitArray[i2].unit.id === units[i].id)
				) {
					maybeMaxedOut.push(listedUnitArray[i2])
				}
			}

			if (units[i].unlocking_class === 0) {
				locked = true
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).troop === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'War Machine Battery' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).warEngine === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'Monster Unit' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).monster === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'Hero Entourage' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).hero === true
				) {
					locked = false
				}

			}
			if (
				maybeMaxedOut.length >= this.state.maximumCount
			) {
				locked = true
			}
			if (locked === true) {
				greyedOutUnits.push(units[i])
			}
		}
		return greyedOutUnits
	}

	removeUnitFromList(unitObject) {
		let listedUnits = this.state.listedUnits
		let selectedUnitOptions = this.state.selectedUnitOptions
		let removedUnitOptionObjects = []
		let oldPointTotal
		let pointTotal
		let unitStrengthTotal
		let unitTypeCountObject
		let unlockObject
		let i
		let i2
		let i3

		let actuallyDeleteStuff = (unitArray, unitOptionArray) => {
			let i4
			for (i4 = unitArray.length - 1; i4 >= 0; i4--) {
				if (unitArray[i4].index === unitObject.index) {
					unitArray.splice(unitArray.indexOf(unitArray[i4]), 1)
				}
			}
			for (i4 = unitOptionArray.length - 1; i4 >= 0; i4--) {
				if (unitOptionArray[i4].index === unitObject.index) {
					removedUnitOptionObjects.push(unitOptionArray[i4])
					unitOptionArray.splice(unitOptionArray.indexOf(unitOptionArray[i4]), 1)
				}
			}				
		}

		let fakeListedUnits = []
		for (i = 0; i < listedUnits.length; i++) {
			fakeListedUnits.push(listedUnits[i])
		}
		let fakeSelectedUnitOptions = []
		for (i = 0; i < selectedUnitOptions.length; i++) {
			fakeSelectedUnitOptions.push(selectedUnitOptions[i])
		}

		actuallyDeleteStuff(fakeListedUnits, fakeSelectedUnitOptions)
		pointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions)
		unitStrengthTotal = this.calculateUnitStrengthTotal(listedUnits, fakeSelectedUnitOptions)
		unitTypeCountObject = this.calculateUnitTypeCounts(fakeListedUnits)
		unlockObject = this.subtractUnlocks(fakeListedUnits)

		if (unitObject.unit.unlocking_class > 0) {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
			if (unlockObject.troopUnlocks < 0) {
				listedUnits = this.state.listedUnits
				selectedUnitOptions = this.state.selectedUnitOptions
			}
			if (this.state.unlockObject.heroUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromRegiments <= 0) {
					listedUnits = this.state.listedUnits
					selectedUnitOptions = this.state.selectedUnitOptions
				}
			}
			if (this.state.unlockObject.warEngineUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromRegiments <= 0) {
					listedUnits = this.state.listedUnits
					selectedUnitOptions = this.state.selectedUnitOptions
				}
			}
			if (this.state.unlockObject.monsterUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromRegiments <= 0) {
					listedUnits = this.state.listedUnits
					selectedUnitOptions = this.state.selectedUnitOptions
				}
			}
		} else {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
		}

		oldPointTotal = this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions)
		pointTotal = this.calculatePointTotal(listedUnits, selectedUnitOptions)
		let maximumCountBefore = this.calculateMaximumCount(oldPointTotal)
		let maximumCountAfter = this.calculateMaximumCount(pointTotal)
		if (maximumCountAfter < maximumCountBefore) {
			let countNonUniqueUnits = (array, value) => {
				let count = 0
				for (i3 = 0; i3 < array.length; i3++) {
					if (array[i3].unit === value.unit) {
						count ++
					}
				}
				return count
			}
			for (i2 = 0; i2 < listedUnits.length; i2++) {
				if (
					countNonUniqueUnits(listedUnits, listedUnits[i2]) > maximumCountAfter && (
						listedUnits[i2].unit.unit_type === 'War Machine Battery' ||
						listedUnits[i2].unit.unit_type === 'Monster Unit' ||
						listedUnits[i2].unit.unit_type === 'Hero Entourage'
					)
				) {
					listedUnits.splice(listedUnits.indexOf(listedUnits[i2]), 1)
				}			
			}
		}

		this.setState({
			listedUnits: listedUnits,
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: this.calculatePointTotal(listedUnits, selectedUnitOptions),
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions),
			unitTypeCountObject: this.calculateUnitTypeCounts(listedUnits),
			unlockObject: this.subtractUnlocks(listedUnits),
			maximumCount: this.calculateMaximumCount(pointTotal)
		})
	}

	selectUnitOptions(unitObject, highlightedUnitOptions) {
		let selectedUnitOptions = []
		let i
		for (i = 0; i < highlightedUnitOptions.length; i++) {
			highlightedUnitOptions[i] = {
				index: unitObject.index,
				unitOption: highlightedUnitOptions[i]
			}
		}
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (this.state.selectedUnitOptions[i].index !== unitObject.index) {
				selectedUnitOptions.push(this.state.selectedUnitOptions[i])
			}
		}		
		selectedUnitOptions = selectedUnitOptions.concat(highlightedUnitOptions)

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			unitBeingGivenOption: '',
		})
		this.toggleUnitOptions()
	}

	removeUnitOption(unitOptionObject) {
		let selectedUnitOptions = []
		let i
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (
				this.state.selectedUnitOptions[i].index !== unitOptionObject.index ||
				this.state.selectedUnitOptions[i].unitOption.id !== unitOptionObject.unitOption.id
			) {
				selectedUnitOptions.push(this.state.selectedUnitOptions[i])
			}
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions)
		})
	}

	toggleUnitOptions() {
		if (this.state.unitOptionsVisible === false) {
			this.setState({ unitOptionsVisible: true })
		} else {
			this.setState({
				unitOptionsVisible: false,
				unitBeingGivenOption: ''
			})
		}
	}

	updateUnitBeingGivenOption(unit) {
		this.setState({ unitBeingGivenOption: unit })
		this.toggleUnitOptions()
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
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			formattedListVisible: false,
			unitOptionsVisible: false
		})
	}

	render() {
		let appElement = document.getElementById('gg')
		let pageOptions = [
			{ label: 'Learn How To Play [ ]', value: 'Rules' },
			{ label: 'Add Infantry', value: 'Add Infantry' },
			{ label: 'Add Ranged Infantry', value: 'Add Ranged Infantry' },
			{ label: 'Add Large Infantry', value: 'Add Large Infantry' },
			{ label: 'Add Ranged Large Infantry', value: 'Add Ranged Large Infantry' },
			{ label: 'Add Cavalry', value: 'Add Cavalry' },
			{ label: 'Add Large Cavalry', value: 'Add Large Cavalry' },
			{ label: 'Add War Machines and Monsters', value: 'Add War Machines and Monsters' },
			{ label: 'Add Hero Entourages', value: 'Add Hero Entourages' }
		]
		let selectedPage = this.state.selectedPage
		let display
		let hidden
		if (this.state.selectedPage != '') {
			hidden = ''
		} else {
			hidden = 'hidden'
		}
		let listOutputSide
		let unitOptionSelectionTile
		let clearListDiv
		let unitEntryButtonTitle
		let unitEntryButtonDisplay
		let unitEntryButtonDisplayUnlocked
		let viewListButtonDisplay
		let pointTotalDisplay
		let unsortedListedUnitsTop = []
		let unsortedListedUnitsSecondQuarter = []
		let unsortedListedUnitsThirdQuarter = []
		let unsortedListedUnitsBottom = []
		let i
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (
				this.state.listedUnits[i].unit.unlocking_class === 1 ||
				this.state.listedUnits[i].unit.unlocking_class === 3
			) {
				unsortedListedUnitsTop.push(this.state.listedUnits[i])
			}
			if (this.state.listedUnits[i].unit.unlocking_class === 0) {
				if (
					this.state.listedUnits[i].unit.is_irregular === false &&
					this.state.listedUnits[i].unit.unit_size === 'Regiment' && (
						this.state.listedUnits[i].unit.unit_type === 'Large Infantry' ||
						this.state.listedUnits[i].unit.unit_type === 'Large Cavalry'					)
				) {
					unsortedListedUnitsSecondQuarter.push(this.state.listedUnits[i])
				} else {
					if (
						this.state.listedUnits[i].unit.is_irregular === false &&
						this.state.listedUnits[i].unit.unit_size === 'Troop'
					) {
						unsortedListedUnitsThirdQuarter.push(this.state.listedUnits[i])
					} else {
						unsortedListedUnitsBottom.push(this.state.listedUnits[i])
					}
				}
			}
		}
		let listedUnitsTop = unsortedListedUnitsTop.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let listedUnitsSecondQuarter = unsortedListedUnitsSecondQuarter.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let listedUnitsThirdQuarter = unsortedListedUnitsThirdQuarter.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let listedUnitsBottom = unsortedListedUnitsBottom.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let idsOfUnitsThatCanHaveOptions = []
		for (i = 0; i < this.props.unitOptions.length; i++) {
			idsOfUnitsThatCanHaveOptions.push(this.props.unitOptions[i].gg_unit_id)
		}
		let listedUnitsThatCanHaveOptions = []
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (idsOfUnitsThatCanHaveOptions.includes(this.state.listedUnits[i].unit.id)) {
				listedUnitsThatCanHaveOptions.push(this.state.listedUnits[i])
			}
		}

		let listedUnitTileDisplayTop
		let listedUnitTileDisplaySecondQuarter
		let listedUnitTileDisplayThirdQuarter
		let listedUnitTileDisplayBottom
		let emailDiv = 
			<div className="email-div">
				<span className="user-select-none">Email:{' '}</span>admin@goodarmylists.com
				<form className="paypal-form user-select-none" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_donations" />
					<input type="hidden" name="business" value="admin@goodarmylists.com" />
					<input type="hidden" name="currency_code" value="USD" />
					<input type="image" src={paypal} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
					<img alt="" border="0" src={paypal} width="1" height="1" />
				</form>
			</div>	
		if (this.state.unitOptionsVisible) {
			unitOptionSelectionTile =
				<div className="unit-option-selection-tile">
					<UnitOptionSelectionTile
						unitObject={this.state.unitBeingGivenOption}
						unitOptions={this.props.unitOptions}
						selectUnitOptions={this.selectUnitOptions}
						selectedUnitOptions={this.state.selectedUnitOptions}
						toggleUnitOptions={this.toggleUnitOptions}
						pointTotal={this.state.pointTotal}
					/>
				</div>
		}
		if (this.state.selectedPage.value === 'Rules') {
			display =
				<div>
					<RulesContainer />
					{emailDiv}
				</div>
		}
		if (this.state.selectedPage.value !== 'Rules') {
			clearListDiv =
				<div className="clear-list-div">
					<span onClick={this.clearList} className="clear-or-cancel-label">Clear List</span>
				</div>
			let unitEntryButtonTitle
			let units = this.props.units.sort((a, b) => {
				return ( b.points - a.points )
			})

			let unitsInArmyTop = []
			let unitsInArmyBottom = []
			let greyedOutUnits = this.determineIfGreyedOut(this.state.listedUnits)

			if (this.state.selectedPage.value === 'Add Infantry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Infantry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Infantry' && units[i].is_ranged === false) {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add Ranged Infantry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Ranged Infantry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Infantry' && units[i].is_ranged === true) {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add Large Infantry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Large Infantry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Large Infantry' && units[i].is_ranged === false) {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add Ranged Large Infantry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Ranged Large Infantry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Large Infantry' && units[i].is_ranged === true) {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add Cavalry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Cavalry and Large Cavalry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Cavalry') {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

				if (this.state.selectedPage.value === 'Add Large Cavalry') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Cavalry and Large Cavalry</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Large Cavalry') {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add War Machines and Monsters') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available War Machines and Monsters</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'War Machine Battery') {
						unitsInArmyTop.push(units[i])
					}
					if (units[i].unit_type === 'Monster Unit') {
						unitsInArmyBottom.push(units[i])
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)
				})
			}

			if (this.state.selectedPage.value === 'Add Monsters') {
				unitEntryButtonTitle = 
					<div className="unit-entry-button-title-bar-kowh">
						<h3 className="unit-entry-button-title">Available Monster Units</h3>
					</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Monster Unit') {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			if (this.state.selectedPage.value === 'Add Hero Entourages') {
				unitEntryButtonTitle = 
				<div className="unit-entry-button-title-bar-kowh">
					<h3 className="unit-entry-button-title">Available Hero Entourages</h3>
				</div>
				for (i = 0; i < units.length; i++) {
					if (units[i].unit_type === 'Hero Entourage') {
						if (units[i].unlocking_class > 0) {
							unitsInArmyTop.push(units[i])
						} else {
							unitsInArmyBottom.push(units[i])
						}
					}
				}
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
					return (
						<UnitEntryButton
							key={unit.id}
							id={unit.id}
							unit={unit}
							addUnitToList={this.addUnitToList}
							greyedOutUnits={greyedOutUnits}
						/>
					)			
				})
			}

			pointTotalDisplay =
				<div className="point-total">
					Points: <span className="bold">{this.state.pointTotal}</span><br />
					Unit Count: <span className="bold">{this.state.listedUnits.length}</span><br />
					Unit Strength: <span className="bold">{this.state.unitStrengthTotal}</span>
				</div>

			listedUnitTileDisplayTop = listedUnitsTop.map(unitObject => {
				return (
					<tr
						key={unitObject.index}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<UnitOptionIcon
									key={unitObject.index}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={listedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.selectedUnitOptions}
								removeUnitFromList={this.removeUnitFromList}
								removeUnitOption={this.removeUnitOption}
							/>
						</td>
					</tr>		
				)
			})

			listedUnitTileDisplaySecondQuarter = listedUnitsSecondQuarter.map(unitObject => {
				return (
					<tr
						key={unitObject.index}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<UnitOptionIcon
									key={unitObject.index}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={listedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.selectedUnitOptions}
								removeUnitOption={this.removeUnitOption}
								removeUnitFromList={this.removeUnitFromList}
							/>
						</td>
					</tr>		
				)
			})

			listedUnitTileDisplayThirdQuarter = listedUnitsThirdQuarter.map(unitObject => {
				return (
					<tr
						key={unitObject.index}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<UnitOptionIcon
									key={unitObject.index}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={listedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.selectedUnitOptions}
								removeUnitOption={this.removeUnitOption}
								removeUnitFromList={this.removeUnitFromList}
							/>
						</td>
					</tr>		
				)
			})

			listedUnitTileDisplayBottom = listedUnitsBottom.map(unitObject => {
				return (
					<tr
						key={unitObject.index}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<UnitOptionIcon
									key={unitObject.index}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={listedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.selectedUnitOptions}
								removeUnitOption={this.removeUnitOption}
								removeUnitFromList={this.removeUnitFromList}
							/>
						</td>
					</tr>		
				)
			})

			

			if (this.state.listedUnits.length > 0) {
				viewListButtonDisplay =
					<div className="view-list-button-div">
						<br /><br />
						<span onClick={this.showFormattedList} className="view-list-button">
							View List
						</span>
					</div>
			} else {
				viewListButtonDisplay =
					<div className="instruction">
						<i>Click units to the left to add them to the list</i>
					</div>
			}

			if (unitOptionSelectionTile !== undefined) {
				listOutputSide = unitOptionSelectionTile
			}
	 		if (unitOptionSelectionTile === undefined) {
				listOutputSide =
					<div>
						{pointTotalDisplay}<br />
						<table>
							<tbody>
								{listedUnitTileDisplayTop}
								{listedUnitTileDisplaySecondQuarter}
								{listedUnitTileDisplayThirdQuarter}
								{listedUnitTileDisplayBottom}
							</tbody>
						</table>
						{viewListButtonDisplay}
					</div>
			}

			display =
				<div className={hidden}>
					{clearListDiv}	
					<div className="everything-after-army-dropdown row">
						<div>
							<div className="unit-entry-buttons column">
								{unitEntryButtonTitle}<br />
								{unitEntryButtonDisplay}<br />
								{unitEntryButtonDisplayUnlocked}
							</div>
						</div>
						<div>
							<div className="list-output-side column">
								<div className="list-title-bar-kowh">
									<h3 className="list-title">Army List</h3>
								</div><br />
								{listOutputSide}
							</div>
						</div>
					</div>
					{emailDiv}				
				</div>
		}



		return (		
			<div>
				<div className="army-dropdown-section">
					<div className="main-page-link">
						<span className="gal-title-top">
							<a href="/">Good Army Lists</a>
						</span><br />
					</div>
					<div className="presents">-PRESENTS-</div>
					<div className="main-title-box-kowh">
						<h2 className="main-title">[ ]</h2>
					</div>
					<div className="copyright-notice-absent">
						<br />
					</div>
					<div className="react-select">
						<Select
							placeholder="Navigation Menu"
							options={pageOptions}
							value={selectedPage}
							onChange={this.updateSelectedPage}
							styles={this.props.dropdownStyle}
						/>
					</div>	
				</div>
				<div>{display}</div>
				<Modal
					appElement={appElement}
					isOpen={this.state.formattedListVisible}
					onRequestClose={this.hideFormattedList}
					shouldCloseOnOverlayClick={true}
					className="formatted-list-modal"
				>
					<FormattedList
						selectedPage={selectedPage}
						listedUnitsTop={listedUnitsTop}
						listedUnitsSecondQuarter={listedUnitsSecondQuarter}
						listedUnitsThirdQuarter={listedUnitsThirdQuarter}
						listedUnitsBottom={listedUnitsBottom}
						selectedUnitOptions={this.state.selectedUnitOptions}
						pointTotal={this.state.pointTotal}
						unitStrengthTotal={this.state.unitStrengthTotal}
						unitCount={this.state.listedUnits.length}
						hideFormattedList={this.hideFormattedList}
					/>
				</Modal>
			</div>
		)
	}	
}

export default ListContainer