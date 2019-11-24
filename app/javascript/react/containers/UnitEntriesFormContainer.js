import React, { Component } from 'react'
import Select from 'react-select'
import Modal from 'react-modal'
import UnitEntryButton from '../components/UnitEntryButton'
import UnitOptionIcon from '../components/UnitOptionIcon'
import ArtefactIcon from '../components/ArtefactIcon'
import UnitEntryNameTile from '../components/UnitEntryNameTile'
import UnitOptionSelectionTile from '../components/UnitOptionSelectionTile'
import FormattedList from '../components/FormattedList'
import ArtefactSelectionTile from '../components/ArtefactSelectionTile'
import whiteSquare from '../../../assets/images/whiteSquare.png'

class UnitEntriesFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedArmy: '',
			listedUnits: [],
			selectedUnitOptions: [],
			selectedArtefacts: [],
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			unitOptionsVisible: false,
			artefactsVisible: false,
			formattedListVisible: false,
			unitBeingGivenOption: '',
			unitBeingGivenArtefact: '',
			troopUnlocks: 0,
			heroUnlocks: 0,
			warEngineUnlocks: 0,
			monsterUnlocks: 0,
			unlocksFromRegiments: 0,
			unlocksFromLargeInfantry: 0,
			heroCount: 0,
			warEngineCount: 0,
			monsterCount: 0,
			titanCount: 0,
			infantryHordeCount: 0,
			largeInfantryHordeCount: 0,
			tooMany: 3
		}
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.calculatePointTotal = this.calculatePointTotal.bind(this)
		this.calculateUnitStrengthTotal = this.calculateUnitStrengthTotal.bind(this)
		this.calculateMostOfTheFour = this.calculateMostOfTheFour.bind(this)
		this.calculateTooMany = this.calculateTooMany.bind(this)
		this.calculateUnlocks = this.calculateUnlocks.bind(this)
		this.addToList = this.addToList.bind(this)
		this.removeFromList = this.removeFromList.bind(this)
		this.toggleUnitOptions = this.toggleUnitOptions.bind(this)
		this.toggleArtefacts = this.toggleArtefacts.bind(this)
		this.updateUnitBeingGivenOption = this.updateUnitBeingGivenOption.bind(this)
		this.updateUnitBeingGivenArtefact = this.updateUnitBeingGivenArtefact.bind(this)
		this.selectUnitOptions = this.selectUnitOptions.bind(this)
		this.selectArtefact = this.selectArtefact.bind(this)
		this.removeUnitOption = this.removeUnitOption.bind(this)
		this.removeArtefact = this.removeArtefact.bind(this)
		this.clearList = this.clearList.bind(this)
		this.showFormattedList = this.showFormattedList.bind(this)
		this.hideFormattedList = this.hideFormattedList.bind(this)
	}

	updateSelectedArmy(selectedArmy) {
		this.setState({ selectedArmy })
		this.clearList()
	}

	calculatePointTotal() {
		let pointTotal = 0
		let i
		for (i = 0; i < this.state.listedUnits.length; i++) {
			pointTotal += this.state.listedUnits[i].unit.points
		}
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			pointTotal += this.state.selectedUnitOptions[i].unitOption.points
		}
		for (i = 0; i < this.state.selectedArtefacts.length; i++) {
			pointTotal += this.state.selectedArtefacts[i].artefact.points
		}
		this.setState({ pointTotal: pointTotal })
	}

	calculateUnitStrengthTotal() {
		let unitStrengthTotal = 0
		let i
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		this.setState({ unitStrengthTotal: unitStrengthTotal })
	}

	calculateUnlocks(unit) {
		let listedUnits = this.state.listedUnits
		let troopUnlocks = this.state.troopUnlocks
		let unlocksFromRegiments = this.state.unlocksFromRegiments
		let heroUnlocks = this.state.heroUnlocks
		let warEngineUnlocks = this.state.warEngineUnlocks
		let monsterUnlocks = this.state.monsterUnlocks
		let unlocksFromLargeInfantry = this.state.unlocksFromLargeInfantry
		let i

		if (unit.is_irregular === false) {
			if (
				(
					unit.unit_size === 'Regiment'  && (
						unit.unit_type === 'Infantry' ||
						unit.unit_type === 'Heavy Infantry' ||
						unit.unit_type === 'Cavalry' ||
						unit.unit_type === 'Chariot'
					)
				) || (
					unit.unit_size === 'Horde' && (
						unit.unit_type === 'Large Infantry' ||
						unit.unit_type === 'Monstrous Infantry' ||
						unit.unit_type === 'Large Cavalry'
					)
				)
			) {
				troopUnlocks += 2
			}
			if (
				(
					(unit.unit_size === 'Horde' || unit.unit_size === 'Legion') && (
						unit.unit_type === 'Infantry' ||
						unit.unit_type === 'Heavy Infantry' ||
						unit.unit_type === 'Cavalry' ||
						unit.unit_type === 'Chariot'
					)
				) || (
					unit.unit_size === 'Legion' && (
						unit.unit_type === 'Large Infantry' ||
						unit.unit_type === 'Monstrous Infantry' ||
						unit.unit_type === 'Large Cavalry'							
					)
				)
			) {
				troopUnlocks += 4
			}
			if (
				(
					unit.unit_size === 'Regiment'  && (
						unit.unit_type === 'Infantry' ||
						unit.unit_type === 'Heavy Infantry' ||
						unit.unit_type === 'Cavalry' ||
						unit.unit_type === 'Chariot'
					)
				)
			) {
				unlocksFromRegiments += 1
			}
			if (
				(
					(unit.unit_size === 'Horde' || unit.unit_size === 'Legion') && (
						unit.unit_type === 'Infantry' ||
						unit.unit_type === 'Heavy Infantry' ||
						unit.unit_type === 'Cavalry' ||
						unit.unit_type === 'Chariot'
					)
				)
			) {
				heroUnlocks += 1
				warEngineUnlocks += 1
				monsterUnlocks += 1
			}
			if (
				(
					(unit.unit_size === 'Horde' || unit.unit_size === 'Legion') && (
						unit.unit_type === 'Large Infantry' ||
						unit.unit_type === 'Monstrous Infantry' ||
						unit.unit_type === 'Large Cavalry'		
					)
				)
			) {
				unlocksFromLargeInfantry += 2
			}
		}
		if (unit.unit_size === 'Troop' || unit.is_irregular === true) {
			troopUnlocks -= 1
		}
		if (unit.unit_type.includes('Hero')) {
			if (heroUnlocks > 0) {
				heroUnlocks -= 1
			} else {
				if (
					unlocksFromLargeInfantry > 0 && (
						(
							this.state.heroCount <= this.state.warEngineCount &&
							this.state.heroCount <= this.state.monsterCount &&
							this.state.heroCount <= this.state.titanCount
						) || (
							this.state.heroCount < this.state.largeInfantryHordeCount
						)
					)
				) {
					unlocksFromLargeInfantry -= 1
				} else {
					if (unlocksFromRegiments > 0) {
						unlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'War Engine') {
			if (warEngineUnlocks > 0) {
				warEngineUnlocks  -= 1
			} else {
				if (
					unlocksFromLargeInfantry > 0 && (
						(
							this.state.warEngineCount <= this.state.heroCount &&
							this.state.warEngineCount <= this.state.monsterCount &&
							this.state.warEngineCount <= this.state.titanCount
						) || (
							this.state.warEngineCount < this.state.largeInfantryHordeCount
						)
					)
				) {
					unlocksFromLargeInfantry -= 1
				} else {
					if (unlocksFromRegiments > 0) {
						unlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'Monster') {
			if (monsterUnlocks > 0) {
				monsterUnlocks  -= 1
			} else {
				if (
					unlocksFromLargeInfantry > 0 && (
						(
							this.state.monsterCount <= this.state.heroCount &&
							this.state.monsterCount <= this.state.warEngineCount &&
							this.state.monsterCount <= this.state.titanCount
						) || (
							this.state.monsterCount < this.state.largeInfantryHordeCount
						)
					)
				) {
					unlocksFromLargeInfantry -= 1
				} else {
					if (unlocksFromRegiments > 0) {
						unlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'Titan') {
			if (monsterUnlocks > 0) {
				monsterUnlocks  -= 1
			} else {
				if (
					unlocksFromLargeInfantry > 0 && (
						(
							this.state.titanCount <= this.state.heroCount &&
							this.state.titanCount <= this.state.warEngineCount &&
							this.state.titanCount <= this.state.monsterCount
						) || (
							this.state.titanCount < this.state.largeInfantryHordeCount
						)
					)
				) {
					unlocksFromLargeInfantry -= 1
				} else {
					if (unlocksFromRegiments > 0) {
						unlocksFromRegiments -= 1
					}
				}
			}
		}
		

		this.setState({
			listedUnits: listedUnits,
			troopUnlocks: troopUnlocks,
			heroUnlocks: heroUnlocks,
			warEngineUnlocks: warEngineUnlocks,
			monsterUnlocks: monsterUnlocks,
			unlocksFromRegiments: unlocksFromRegiments,
			unlocksFromLargeInfantry: unlocksFromLargeInfantry
		})
		this.calculatePointTotal()
		this.calculateUnitStrengthTotal()
	}

	calculateMostOfTheFour() {
		let heroCount = 0
		let warEngineCount = 0
		let monsterCount = 0
		let titanCount = 0
		let infantryHordeCount = 0
		let largeInfantryHordeCount = 0
		let i
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (this.state.listedUnits[i].unit.unit_type.includes('Hero')) {
				heroCount += 1
			}
			if (this.state.listedUnits[i].unit.unit_type === 'War Engine') {
				warEngineCount += 1
			}	
			if (this.state.listedUnits[i].unit.unit_type === 'Monster') {
				monsterCount += 1
			}
			if (this.state.listedUnits[i].unit.unit_type === 'Titan') {
				titanCount += 1
			}
			if (
				(
					this.state.listedUnits[i].unit.unit_type === 'Infantry' ||
					this.state.listedUnits[i].unit.unit_type === 'Heavy Infantry' ||
					this.state.listedUnits[i].unit.unit_type === 'Cavalry' ||
					this.state.listedUnits[i].unit.unit_type === 'Chariot'
				) && (
					this.state.listedUnits[i].unit.unit_size === 'Horde' || 
					this.state.listedUnits[i].unit.unit_size === 'Legion'
				)
			) {
				infantryHordeCount += 1
			}
			if (
				(
					this.state.listedUnits[i].unit.unit_type === 'Large Infantry' ||
					this.state.listedUnits[i].unit.unit_type === 'Monstrous Infantry' ||
					this.state.listedUnits[i].unit.unit_type === 'Large Cavalry'
				) && (
					this.state.listedUnits[i].unit.unit_size === 'Horde' || 
					this.state.listedUnits[i].unit.unit_size === 'Legion'
				)
			) {
				largeInfantryHordeCount += 1
			}
		}
		this.setState({
			heroCount: heroCount,
			warEngineCount: warEngineCount,
			monsterCount: monsterCount,
			titanCount: titanCount,
			infantryHordeCount: infantryHordeCount,
			largeInfantryHordeCount: largeInfantryHordeCount
		})
	}

	calculateTooMany(pointAdjustment) {
		let tooMany
		if (this.state.pointTotal + pointAdjustment < 3000) {
			tooMany = 3
		} else if (this.state.pointTotal + pointAdjustment < 4000) {
			tooMany = 4
		} else if (this.state.pointTotal + pointAdjustment < 5000) {
			tooMany = 5
		} else if (this.state.pointTotal + pointAdjustment < 6000) {
			tooMany = 6
		} else if (this.state.pointTotal + pointAdjustment < 7000) {
			tooMany = 7
		} else if (this.state.pointTotal + pointAdjustment < 8000) {
			tooMany = 8
		} else if (this.state.pointTotal + pointAdjustment < 9000) {
			tooMany = 9
		} else if (this.state.pointTotal + pointAdjustment < 10000) {
			tooMany = 10
		} else if (this.state.pointTotal + pointAdjustment < 11000) {
			tooMany = 11
		} else if (this.state.pointTotal + pointAdjustment < 12000) {
			tooMany = 12
		} else if (this.state.pointTotal + pointAdjustment < 13000) {
			tooMany = 13
		} else if (this.state.pointTotal + pointAdjustment < 14000) {
			tooMany = 14
		} else if (this.state.pointTotal + pointAdjustment < 15000) {
			tooMany = 15
		} else if (this.state.pointTotal + pointAdjustment < 16000) {
			tooMany = 16
		} else if (this.state.pointTotal + pointAdjustment < 17000) {
			tooMany = 17
		} else if (this.state.pointTotal + pointAdjustment < 18000) {
			tooMany = 18
		} else if (this.state.pointTotal + pointAdjustment < 19000) {
			tooMany = 19
		} else if (this.state.pointTotal + pointAdjustment < 20000) {
			tooMany = 20
		} else if (this.state.pointTotal + pointAdjustment < 21000) {
			tooMany = 21
		}
		this.setState({ tooMany: tooMany })
		return tooMany
	}

	addToList(unitToAdd) {
		let listedUnits = this.state.listedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount, unit: unitToAdd }
		listedUnits.push(unitToAddWithIndex)
		indexCount += 1
		this.setState({
			listedUnits: listedUnits,
			indexCount: indexCount
		})
		this.calculatePointTotal()
		this.calculateUnitStrengthTotal()
		this.calculateMostOfTheFour()
		this.calculateTooMany(unitToAdd.points)
		this.calculateUnlocks(unitToAdd)
	}

	removeFromList(unitObject) {
		let listedUnits = this.state.listedUnits
		let selectedUnitOptions = this.state.selectedUnitOptions
		let selectedArtefacts = this.state.selectedArtefacts
		let removedUnitOptionObjects = []
		let removedArtefactObject
		let pointTotal = 0
		let unitStrengthTotal = 0
		let troopUnlocks = 0
		let heroUnlocks = 0
		let warEngineUnlocks = 0
		let monsterUnlocks = 0
		let unlocksFromLargeInfantry = 0
		let unlocksFromRegiments = 0
		let heroCount = 0
		let warEngineCount = 0
		let monsterCount = 0
		let titanCount = 0
		let infantryHordeCount = 0
		let largeInfantryHordeCount = 0
		let i
		let i2
		let i3

		let doesUnitUnlock = unit => {
			let result
			if (
				unit.is_irregular === false && (
					(
						unit.unit_size === 'Regiment'  && (
							unit.unit_type === 'Infantry' ||
							unit.unit_type === 'Heavy Infantry' ||
							unit.unit_type === 'Cavalry' ||
							unit.unit_type === 'Chariot'
						)
					) || (
						(unit.unit_size === 'Horde' || unit.unit_size === 'Legion') && (
							unit.unit_type === 'Infantry' ||
							unit.unit_type === 'Heavy Infantry' ||
							unit.unit_type === 'Cavalry' ||
							unit.unit_type === 'Chariot' ||
							unit.unit_type === 'Large Infantry' ||
							unit.unit_type === 'Monstrous Infantry' ||
							unit.unit_type === 'Large Cavalry'		
						)
					)
				)			
			) {
				result = true
			} else {
				result = false
			}
			return result
		}

		let addTroopUnlocks = array => {
			troopUnlocks = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (array[i4].unit.is_irregular === false) {
					if (
						(
							array[i4].unit.unit_size === 'Regiment'  && (
								array[i4].unit.unit_type === 'Infantry' ||
								array[i4].unit.unit_type === 'Heavy Infantry' ||
								array[i4].unit.unit_type === 'Cavalry' ||
								array[i4].unit.unit_type === 'Chariot'
							)
						) || (
							array[i4].unit.unit_size === 'Horde' && (
								array[i4].unit.unit_type === 'Large Infantry' ||
								array[i4].unit.unit_type === 'Monstrous Infantry' ||
								array[i4].unit.unit_type === 'Large Cavalry'
							)
						)
					) {
						troopUnlocks += 2
					}
					if (
						(
							(
								array[i4].unit.unit_size === 'Horde' ||
								array[i4].unit.unit_size === 'Legion'
							) && (
								array[i4].unit.unit_type === 'Infantry' ||
								array[i4].unit.unit_type === 'Heavy Infantry' ||
								array[i4].unit.unit_type === 'Cavalry' ||
								array[i4].unit.unit_type === 'Chariot'
							)
						) || (
							array[i4].unit.unit_size === 'Legion' && (
								array[i4].unit.unit_type === 'Large Infantry' ||
								array[i4].unit.unit_type === 'Monstrous Infantry' ||
								array[i4].unit.unit_type === 'Large Cavalry'
							)						
						)

					) {
						troopUnlocks += 4
					}	
				}
			}
		}

		let addHeroWarEngineMonsterUnlocks = array => {
			heroUnlocks = 0
			warEngineUnlocks = 0
			monsterUnlocks = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (
					array[i4].unit.is_irregular === false &&
					(
						(
							array[i4].unit.unit_size === 'Horde' ||
							array[i4].unit.unit_size === 'Legion'
						) && (
							array[i4].unit.unit_type === 'Infantry' ||
							array[i4].unit.unit_type === 'Heavy Infantry' ||
							array[i4].unit.unit_type === 'Cavalry' ||
							array[i4].unit.unit_type === 'Chariot'
						)
					)
				) {
					heroUnlocks += 1
					warEngineUnlocks += 1
					monsterUnlocks += 1
				}
			}
		}

		let addUnlocksFromLargeInfantry = array => {
			unlocksFromLargeInfantry = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (
					array[i4].unit.is_irregular === false &&
					(
						(
							array[i4].unit.unit_size === 'Horde' ||
							array[i4].unit.unit_size === 'Legion'
						) && (
							array[i4].unit.unit_type === 'Large Infantry' ||
							array[i4].unit.unit_type === 'Monstrous Infantry' ||
							array[i4].unit.unit_type === 'Large Cavalry'		
						)
					)
				) {
					unlocksFromLargeInfantry += 2
				}				
			}	
		}

		let addUnlocksFromRegiments = array => {
			unlocksFromRegiments = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (
					array[i4].unit.is_irregular === false &&
					(
						array[i4].unit.unit_size === 'Regiment'  && (
							array[i4].unit.unit_type === 'Infantry' ||
							array[i4].unit.unit_type === 'Heavy Infantry' ||
							array[i4].unit.unit_type === 'Cavalry' ||
							array[i4].unit.unit_type === 'Chariot'
						)
					)
				) {
					unlocksFromRegiments += 1
				}
			}
		}

		let subtractUnlocks = array => {
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (
					array[i4].unit.unit_size === 'Troop' ||
					array[i4].unit.is_irregular === true
				) {
					troopUnlocks -= 1
				}
				if (array[i4].unit.unit_type.includes('Hero')) {
					if (heroUnlocks > 0) {
						heroUnlocks -= 1
					} else {
						if (unlocksFromLargeInfantry > 0) {
							unlocksFromLargeInfantry -= 1
						} else {
							if (unlocksFromRegiments > 0) {
								unlocksFromRegiments -= 1
							}
						}
					}
				}
				if (array[i4].unit.unit_type === 'War Engine') {
					if (warEngineUnlocks > 0) {
						warEngineUnlocks  -= 1
					} else {
						if (unlocksFromLargeInfantry > 0) {
							unlocksFromLargeInfantry -= 1
						} else {
							if (unlocksFromRegiments > 0) {
								unlocksFromRegiments -= 1
							}
						}
					}
				}
				if (
					array[i4].unit.unit_type === 'Monster' ||
					array[i4].unit.unit_type === 'Titan'
				) {
					if (monsterUnlocks > 0) {
						monsterUnlocks  -= 1
					} else {
						if (unlocksFromLargeInfantry > 0) {
							unlocksFromLargeInfantry -= 1
						} else {
							if (unlocksFromRegiments > 0) {
								unlocksFromRegiments -= 1
							}
						}
					}
				}
			}
		}

		let actuallyDeleteStuff = (unitArray, unitOptionArray, artefactArray) => {
			let i4
			for (i4 = unitArray.length - 1; i4 >= 0; i4--) {
				if (unitArray[i4].index === unitObject.index) {
					unitStrengthTotal -= unitArray[i4].unit.unit_strength
					unitArray.splice(unitArray.indexOf(unitArray[i4]), 1)
				}
			}
			for (i4 = unitOptionArray.length - 1; i4 >= 0; i4--) {
				if (unitOptionArray[i4].index === unitObject.index) {
					removedUnitOptionObjects.push(unitOptionArray[i4])
					unitOptionArray.splice(unitOptionArray.indexOf(unitOptionArray[i4]), 1)
				}
			}
			for (i4 = artefactArray.length - 1; i4 >= 0; i4--) {
				if (artefactArray[i4].index === unitObject.index) {
					removedArtefactObject = artefactArray[i4]
					artefactArray.splice(artefactArray.indexOf(artefactArray[i4]), 1)
				}
			}				
		}

		let getPoints = (unitArray, unitOptionArray, artefactArray) => {
			pointTotal = 0
			let i4
			for (i4 = 0; i4 < unitArray.length; i4++) {
				pointTotal += unitArray[i4].unit.points
			}
			for (i4 = 0; i4 < unitOptionArray.length; i4++) {
				pointTotal += unitOptionArray[i4].unitOption.points
			}
			for (i4 = 0; i4 < artefactArray.length; i4++) {
				pointTotal += artefactArray[i4].artefact.points
			}
		}

		let getUnitStrength = array => {
			unitStrengthTotal = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				unitStrengthTotal += array[i4].unit.unit_strength
			}
		}

		let getUnitTypeCounts = array => {
			heroCount = 0
			warEngineCount = 0
			monsterCount = 0
			titanCount = 0
			infantryHordeCount = 0
			largeInfantryHordeCount = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (array[i4].unit.unit_type.includes('Hero')) {
					heroCount += 1
				}
				if (array[i4].unit.unit_type === 'War Engine') {
					warEngineCount += 1
				}	
				if (array[i4].unit.unit_type === 'Monster') {
					monsterCount += 1
				}
				if (array[i4].unit.unit_type === 'Titan') {
					titanCount += 1
				}
				if (
					(
						array[i4].unit.unit_type === 'Infantry' ||
						array[i4].unit.unit_type === 'Heavy Infantry' ||
						array[i4].unit.unit_type === 'Cavalry' ||
						array[i4].unit.unit_type === 'Chariot'
					) && (
						array[i4].unit.unit_size === 'Horde' || 
						array[i4].unit.unit_size === 'Legion'					
					)
				) {
					infantryHordeCount += 1
				}
				if (
					(
						array[i4].unit.unit_type === 'Large Infantry' ||
						array[i4].unit.unit_type === 'Monstrous Infantry' ||
						array[i4].unit.unit_type === 'Large Cavalry'
					) && (
						array[i4].unit.unit_size === 'Horde' || 
						array[i4].unit.unit_size === 'Legion'
					)
				) {
					largeInfantryHordeCount += 1
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
		let fakeSelectedArtefacts = []
		for (i = 0; i < selectedArtefacts.length; i++) {
			fakeSelectedArtefacts.push(selectedArtefacts[i])
		}

		actuallyDeleteStuff(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedArtefacts)
		addTroopUnlocks(fakeListedUnits)
		addHeroWarEngineMonsterUnlocks(fakeListedUnits)
		addUnlocksFromLargeInfantry(fakeListedUnits)
		addUnlocksFromRegiments(fakeListedUnits)
		subtractUnlocks(fakeListedUnits)
		getUnitTypeCounts(fakeListedUnits)

		if (doesUnitUnlock(unitObject.unit) === true) {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
			selectedArtefacts = fakeSelectedArtefacts

			if (troopUnlocks < 0) {
				listedUnits = this.state.listedUnits
				selectedUnitOptions = this.state.selectedUnitOptions
				selectedArtefacts = this.state.selectedArtefacts
			}
			if (this.state.heroUnlocks <= 0) {
				if (
					this.state.unlocksFromLargeInfantry <= 0 || (
						this.state.heroCount > this.state.warEngineCount &&
						this.state.heroCount > this.state.monsterCount &&
						this.state.heroCount > this.state.titanCount &&
						this.state.heroCount >= this.state.largeInfantryHordeCount
					)
				) {
					if (this.state.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedArtefacts = this.state.selectedArtefacts						
					}
				}
			}
			if (this.state.warEngineUnlocks <= 0) {
				if (
					this.state.unlocksFromLargeInfantry <= 0 || (
						this.state.warEngineCount > this.state.heroCount &&
						this.state.warEngineCount > this.state.monsterCount &&
						this.state.warEngineCount > this.state.titanCount &&
						this.state.warEngineCount >= this.state.largeInfantryHordeCount
					)
				) {
					if (this.state.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedArtefacts = this.state.selectedArtefacts						
					}
				}
			}
			if (this.state.monsterUnlocks <= 0) {
				if (
					this.state.unlocksFromLargeInfantry <= 0 || (
						this.state.monsterCount > this.state.heroCount &&
						this.state.monsterCount > this.state.warEngineCount &&
						this.state.monsterCount > this.state.titanCount &&
						this.state.monsterCount >= this.state.largeInfantryHordeCount
					)
				) {
					if (this.state.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedArtefacts = this.state.selectedArtefacts						
					}
				}
				if (
					this.state.unlocksFromLargeInfantry <= 0 || (
						this.state.titanCount > this.state.heroCount &&
						this.state.titanCount > this.state.warEngineCount &&
						this.state.titanCount > this.state.monsterCount &&
						this.state.titanCount >= this.state.largeInfantryHordeCount
					)
				) {
					if (this.state.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedArtefacts = this.state.selectedArtefacts						
					}
				}
			}		
		} else {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
			selectedArtefacts = fakeSelectedArtefacts
		}

		let tooManyBefore = this.calculateTooMany(0)
		let tooManyAfter = this.calculateTooMany(unitObject.unit.points * -1)
		if (tooManyAfter < tooManyBefore) {
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
					countNonUniqueUnits(listedUnits, listedUnits[i2]) >= tooManyAfter && (
						listedUnits[i2].unit.unit_type.includes('Hero') ||
						listedUnits[i2].unit.unit_type === 'War Engine' ||
						listedUnits[i2].unit.unit_type === 'Monster' ||
						listedUnits[i2].unit.unit_type === 'Titan'
					)
				) {
					listedUnits.splice(listedUnits.indexOf(listedUnits[i2]), 1)
				}			
			}
		}

		addTroopUnlocks(listedUnits)
		addHeroWarEngineMonsterUnlocks(listedUnits)
		addUnlocksFromLargeInfantry(listedUnits)
		addUnlocksFromRegiments(listedUnits)
		subtractUnlocks(listedUnits)
		getPoints(listedUnits, selectedUnitOptions, selectedArtefacts)
		getUnitStrength(listedUnits)
		getUnitTypeCounts(listedUnits)

		this.setState({
			listedUnits: listedUnits,
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitStrengthTotal: unitStrengthTotal,
			troopUnlocks: troopUnlocks,
			heroUnlocks: heroUnlocks,
			warEngineUnlocks: warEngineUnlocks,
			monsterUnlocks: monsterUnlocks,
			unlocksFromLargeInfantry: unlocksFromLargeInfantry,
			unlocksFromRegiments: unlocksFromRegiments,
			heroCount: heroCount,
			warEngineCount: warEngineCount,
			monsterCount: monsterCount,
			titanCount: titanCount,
			infantryHordeCount: infantryHordeCount,
			largeInfantryHordeCount: largeInfantryHordeCount
		})
	}

	toggleUnitOptions() {
		if (!this.state.unitOptionsVisible) {
			this.setState({ unitOptionsVisible: true })
		} else {
			this.setState({ unitOptionsVisible: false })
		}
	}

	toggleArtefacts() {
		if (!this.state.artefactsVisible) {
			this.setState({ artefactsVisible: true })
		} else {
			this.setState({ artefactsVisible: false })
		}
	}

	updateUnitBeingGivenOption(unit) {
		this.setState({ unitBeingGivenOption: unit })
		this.toggleUnitOptions()
	}

	updateUnitBeingGivenArtefact(unit) {
		this.setState({ unitBeingGivenArtefact: unit })
		this.toggleArtefacts()
	}

	selectUnitOptions(unitObject, highlightedUnitOptions) {
		let selectedUnitOptions = []
		let selectedArtefacts = this.state.selectedArtefacts
		let pointTotal = this.state.pointTotal
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
			} else {
				pointTotal -= this.state.selectedUnitOptions[i].unitOption.points
			}
		}		
		for (i = 0; i < highlightedUnitOptions.length; i++) {
			pointTotal += highlightedUnitOptions[i].unitOption.points
			let i2
			if (
				highlightedUnitOptions[i].unitOption.display_name === 'Horn of Heroes' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Guiding Flame' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Horn of Ocean\'s Fury' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Infernal Advance' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Eternal Guard' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Raid Leader'
			) {
				for (i2 = 0; i2 < selectedArtefacts.length; i2++) {
					if (selectedArtefacts[i].index === unitObject.index) {
						pointTotal -= selectedArtefacts[i].artefact.points
						selectedArtefacts.splice(selectedArtefacts.indexOf(selectedArtefacts[i]), 1)
					}
				}
			}
		}
		for (i = 0; i < selectedUnitOptions.length; i++) {
			let i3
			for (i3 = 0; i3 < highlightedUnitOptions.length; i3++) {
				if (
					highlightedUnitOptions[i3].unitOption.is_unique === true &&
					highlightedUnitOptions[i3].unitOption.display_name === selectedUnitOptions[i].unitOption.display_name
				) {
					pointTotal -= selectedUnitOptions[i].unitOption.points
					selectedUnitOptions.splice(selectedUnitOptions.indexOf(selectedUnitOptions[i]), 1)
				}
			}
		}
		selectedUnitOptions = selectedUnitOptions.concat(highlightedUnitOptions)
		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitBeingGivenOption: ''
		})
		this.toggleUnitOptions()
	}

	selectArtefact(unitObject, artefact) {
		let selectedArtefacts = this.state.selectedArtefacts
		let selectedUnitOptions = this.state.selectedUnitOptions
		let newArtefactSelection = { index: unitObject.index, artefact: artefact }
		let artefactToRemoveIfSame
		let artefactToRemoveIfDifferent
		let artefactsToKeep = []
		let pointTotal = this.state.pointTotal
		let i
		for (i = 0; i < selectedArtefacts.length; i++) {
			if (
				selectedArtefacts[i].artefact.id === newArtefactSelection.artefact.id ||
				selectedArtefacts[i].artefact.display_name === newArtefactSelection.artefact.display_name
			) {
				artefactToRemoveIfSame = selectedArtefacts[i]
			}
			if (selectedArtefacts[i].index === newArtefactSelection.index) {
				artefactToRemoveIfDifferent = selectedArtefacts[i]
			}			
		}
		if (
			artefactToRemoveIfSame !== undefined &&
			artefactToRemoveIfDifferent !== undefined &&
			artefactToRemoveIfSame.artefact.id === artefactToRemoveIfDifferent.artefact.id
		) {
			selectedArtefacts = selectedArtefacts
		} else {
			if (artefactToRemoveIfSame === undefined &&	artefactToRemoveIfDifferent === undefined				
			) {
				selectedArtefacts = selectedArtefacts
			}
			if (artefactToRemoveIfSame !== undefined && artefactToRemoveIfDifferent === undefined) {
				for (i = 0; i < selectedArtefacts.length; i++) {
					if (
						selectedArtefacts[i].artefact.id !== newArtefactSelection.artefact.id &&
						selectedArtefacts[i].artefact.display_name !== newArtefactSelection.artefact.display_name
					) {
						artefactsToKeep.push(selectedArtefacts[i])
					} else {
						pointTotal -= selectedArtefacts[i].artefact.points
					}
				}
				selectedArtefacts = artefactsToKeep
			}
			if (artefactToRemoveIfSame === undefined &&	artefactToRemoveIfDifferent !== undefined			
			) {
				for (i = 0; i < selectedArtefacts.length; i++) {
					if (selectedArtefacts[i].index !== newArtefactSelection.index) {
						artefactsToKeep.push(selectedArtefacts[i])
					} else {
						pointTotal -= selectedArtefacts[i].artefact.points
					}
				}
				selectedArtefacts = artefactsToKeep
			}
			if (artefactToRemoveIfSame !== undefined &&	artefactToRemoveIfDifferent !== undefined	
			) {
				for (i = 0; i < selectedArtefacts.length; i++) {
					if (
						selectedArtefacts[i].index !== newArtefactSelection.index &&
						selectedArtefacts[i].artefact.id !== newArtefactSelection.artefact.id
					) {
						artefactsToKeep.push(selectedArtefacts[i])
					} else {
						pointTotal -= selectedArtefacts[i].artefact.points
					}
				}				
				selectedArtefacts = artefactsToKeep
			}
			selectedArtefacts.push(newArtefactSelection)
			pointTotal += newArtefactSelection.artefact.points
		}
		for (i = 0; i < selectedUnitOptions.length; i++) {
			if (
				selectedUnitOptions[i].index === newArtefactSelection.index && (
					selectedUnitOptions[i].unitOption.display_name === 'Horn of Heroes' ||
					selectedUnitOptions[i].unitOption.display_name === 'Guiding Flame' ||
					selectedUnitOptions[i].unitOption.display_name === 'Horn of Ocean\'s Fury' ||
					selectedUnitOptions[i].unitOption.display_name === 'Infernal Advance' ||
					selectedUnitOptions[i].unitOption.display_name === 'Eternal Guard' ||
					selectedUnitOptions[i].unitOption.display_name === 'Raid Leader'
				)
			) {
				pointTotal -= selectedUnitOptions[i].unitOption.points
				selectedUnitOptions.splice(selectedUnitOptions.indexOf(selectedUnitOptions[i]), 1)
			}
		}
		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitBeingGivenArtefact: ''
		})
		this.toggleArtefacts()
	}

	removeUnitOption(unitOptionObject) {
		let selectedUnitOptions = []
		let pointTotal = this.state.pointTotal
		let i
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (
				this.state.selectedUnitOptions[i].index !== unitOptionObject.index ||
				this.state.selectedUnitOptions[i].unitOption.id !== unitOptionObject.unitOption.id
			) {
				selectedUnitOptions.push(this.state.selectedUnitOptions[i])
			}
		}
		pointTotal -= unitOptionObject.unitOption.points
		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: pointTotal
		})
	}

	removeArtefact(artefactObject) {
		let selectedArtefacts = []
		let pointTotal = this.state.pointTotal
		let i
		for (i = 0; i < this.state.selectedArtefacts.length; i++) {
			if (this.state.selectedArtefacts[i].index !== artefactObject.index) {
				selectedArtefacts.push(this.state.selectedArtefacts[i])
			}
		}
		pointTotal -= artefactObject.artefact.points
		this.setState({
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal
		})
	}

	clearList() {
		this.setState({
			listedUnits: [],
			unitsWithOptionsSelected: [],
			selectedUnitOptions: [],
			selectedArtefacts: [],
			pointTotal: 0,
			unitStrengthTotal: 0,
			indexCount: 0,
			troopUnlocks: 0,
			heroUnlocks: 0,
			warEngineUnlocks: 0,
			monsterUnlocks: 0,
			unlocksFromRegiments: 0,
			unlocksFromLargeInfantry: 0,
			heroCount: 0,
			warEngineCount: 0,
			monsterCount: 0,
			titanCount: 0,
			infantryHordeCount: 0,
			largeInfantryHordeCount: 0,
			tooMany: 1,
			unitOptionsVisible: false,
			artefactsVisible: false,
			formattedListVisible: false
		})
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

	render() {
		let armyOptions = this.props.armies.map(armyOption => {
			return (
				{ label: armyOption.name, value: armyOption.id }
			)
		})
		let selectedArmy = this.state.selectedArmy
		let i
		let hidden
		if (selectedArmy === '') {
			hidden = 'hidden'
		} else {
			hidden = ''
		}
		let allUnits = this.props.units.sort((a, b) => {
			return (b.unit_strength - a.unit_strength)
		})
		let filteredUnits = []
		let filteredUnitsUnlocked = []
		let greyedOutUnits = []
		let unitOptionSelectionTile
		let artefactSelectionTile
		let clearListDiv
		let unitEntryButtonTitle
		let unitEntryButtonDisplay
		let unitEntryButtonDisplayUnlocked
		let viewListButtonDisplay
		let pointTotalDisplay
		let filteredSortedByPoints = this.state.listedUnits.sort((a, b) => {
			return (a.unit.points - b.unit.points)
		})
		let sortedListedUnits = filteredSortedByPoints.sort((a, b) => {
			return (b.unit.unit_strength - a.unit.unit_strength)
		})
		let idsOfUnitsThatCanHaveOptions = []
		for (i = 0; i < this.props.unitOptions.length; i++) {
			idsOfUnitsThatCanHaveOptions.push(this.props.unitOptions[i].unit_id)
		}
		let listedUnitsThatCanHaveOptions = []
		for (i = 0; i < sortedListedUnits.length; i++) {
			if (idsOfUnitsThatCanHaveOptions.includes(sortedListedUnits[i].unit.id)) {
				listedUnitsThatCanHaveOptions.push(sortedListedUnits[i])
			}
		}
		let listedUnitsThatCanHaveArtefacts = []
		for (i = 0; i < sortedListedUnits.length; i++) {
			if (
				sortedListedUnits[i].unit.unit_type !== 'War Engine' &&
				sortedListedUnits[i].unit.unit_type !== 'Monster' &&
				sortedListedUnits[i].unit.unit_type !== 'Titan' && (
					sortedListedUnits[i].unit.limited_n === null ||
					sortedListedUnits[i].unit.limited_n === undefined ||
					sortedListedUnits[i].unit.limited_n === '' ||
					sortedListedUnits[i].unit.limited_n === 0
				)
			) {
				listedUnitsThatCanHaveArtefacts.push(sortedListedUnits[i])
			}
		}
		let listedUnitTileDisplay
		if (this.state.unitOptionsVisible) {
			unitOptionSelectionTile =
				<div className="unit-option-selection-tile">
					<UnitOptionSelectionTile
						unitObject={this.state.unitBeingGivenOption}
						selectUnitOptions={this.selectUnitOptions}
						toggleUnitOptions={this.toggleUnitOptions}
					/>
				</div>
		}
		if (this.state.artefactsVisible) {
			artefactSelectionTile = 
				<div className="artefact-selection-tile">
					<ArtefactSelectionTile
						unitObject={this.state.unitBeingGivenArtefact}
						selectedArtefacts={this.state.selectedArtefacts}
						selectArtefact={this.selectArtefact}
						toggleArtefacts={this.toggleArtefacts}
					/>
				</div>
		}
		if (this.state.selectedArmy !== '') {
			clearListDiv =
				<div className="clear-list-div">
					<span onClick={this.clearList} className="clear-or-cancel-label">Clear List</span>
				</div>
			unitEntryButtonTitle = 
				<div className="unit-entry-button-title-bar">
					<h3 className="unit-entry-button-title">Available Units</h3>
				</div>
			let units = []
			for (i = 0; i < allUnits.length; i++) {
				if (allUnits[i].army_id === selectedArmy.value) {
					units.push(allUnits[i])
				}
			}
			for (i = 0; i < units.length; i++) {
				let limitedDuplicateCount = 0
				let maybeTooMany = []
				let heroesOnList = []
				let warEnginesOnList = []
				let monstersOnList = []
				let locked = false
				
				let i2
				for (i2 = 0; i2 < sortedListedUnits.length; i2++) {
					if (
						units[i].limited_n > 0 &&
						sortedListedUnits[i2].unit.id === units[i].id
					) {
						limitedDuplicateCount += 1
					}
					if (
						(units[i].unit_type.includes('Hero') && sortedListedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && sortedListedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && sortedListedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && sortedListedUnits[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(sortedListedUnits[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					locked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.troopUnlocks > 0) {
						locked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.heroUnlocks > 0) {
							locked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.unlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.heroCount +
										this.state.warEngineCount +
										this.state.monsterCount +
										this.state.titanCount <
										this.state.heroUnlocks +
										this.state.warEngineUnlocks +
										this.state.monsterUnlocks +
										this.state.unlocksFromLargeInfantry && (
											(
												this.state.heroCount <= this.state.warEngineCount ||
												this.state.heroCount <= this.state.monsterCount ||
												this.state.heroCount <= this.state.titanCount
											) && (
												this.state.largeInfantryHordeCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											) 
										) || (
											this.state.heroCount < this.state.infantryHordeCount + this.state.largeInfantryHordeCount
										)
									)
								) {
									locked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.unlocksFromRegiments > 0) {
								locked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.warEngineUnlocks > 0) {
							locked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.unlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.heroCount +
										this.state.warEngineCount +
										this.state.monsterCount +
										this.state.titanCount <
										this.state.heroUnlocks +
										this.state.warEngineUnlocks +
										this.state.monsterUnlocks +
										this.state.unlocksFromLargeInfantry && (										
											(
												this.state.warEngineCount <= this.state.heroCount ||
												this.state.warEngineCount <= this.state.monsterCount ||
												this.state.warEngineCount <= this.state.titanCount
											) && (
												this.state.largeInfantryHordeCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.warEngineCount < this.state.infantryHordeCount + this.state.largeInfantryHordeCount
										)
									)
								) {
									locked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.unlocksFromRegiments > 0) {
								locked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.monsterUnlocks > 0) {
							locked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.unlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.heroCount +
										this.state.warEngineCount +
										this.state.monsterCount +
										this.state.titanCount <
										this.state.heroUnlocks +
										this.state.warEngineUnlocks +
										this.state.monsterUnlocks +
										this.state.unlocksFromLargeInfantry && (
											(
												this.state.monsterCount <= this.state.heroCount ||
												this.state.monsterCount <= this.state.warEngineCount ||
												this.state.monsterCount <= this.state.titanCount
											) && (
												this.state.largeInfantryHordeCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.monsterCount < this.state.infantryHordeCount + this.state.largeInfantryHordeCount
										)
									)
								) {
									locked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.unlocksFromRegiments > 0) {
								locked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.monsterUnlocks > 0) {
							locked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.unlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.heroCount +
										this.state.warEngineCount +
										this.state.monsterCount +
										this.state.titanCount <
										this.state.heroUnlocks +
										this.state.warEngineUnlocks +
										this.state.monsterUnlocks +
										this.state.unlocksFromLargeInfantry && (
											(
												this.state.titanCount <= this.state.heroCount ||
												this.state.titanCount <= this.state.warEngineCount ||
												this.state.titanCount <= this.state.monsterCount
											) && (
												this.state.largeInfantryHordeCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.titanCount < this.state.infantryHordeCount + this.state.largeInfantryHordeCount
										)
									)
								) {
									locked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.unlocksFromRegiments > 0) {
								locked = false
							}
						}						
					}
				}			
				if (units[i].army_id === selectedArmy.value) {
					if (
						limitedDuplicateCount > 0 ||
						maybeTooMany.length >= this.state.tooMany ||
						locked === true
					) {
						greyedOutUnits.push(units[i])
					}
					if (
						(units[i].unit_size === 'Legion' && units[i].is_irregular === false) ||
						(units[i].unit_size === 'Horde' && units[i].is_irregular === false) ||
						(units[i].unit_size === 'Regiment' && units[i].is_irregular === false &&
							(
								units[i].unit_type === 'Infantry' ||
								units[i].unit_type === 'Heavy Infantry' ||
								units[i].unit_type === 'Cavalry' ||
								units[i].unit_type === 'Chariot'
							)
						)
					) {
						filteredUnits.push(units[i])
					} else {
						filteredUnitsUnlocked.push(units[i])
					}
				}
			}
			unitEntryButtonDisplay = filteredUnits.map(unit => {
				return (
					<UnitEntryButton
						key={unit.id}
						id={unit.id}
						unit={unit}
						addToList={this.addToList}
						greyedOutUnits={greyedOutUnits}
					/>
				)			
			})
			unitEntryButtonDisplayUnlocked = filteredUnitsUnlocked.map(unit => {
				return (
					<UnitEntryButton
						key={unit.id}
						id={unit.id}
						unit={unit}
						addToList={this.addToList}
						greyedOutUnits={greyedOutUnits}
					/>
				)			
			})
			pointTotalDisplay =
				<div className="point-total">
					Points: <span className="bold">{this.state.pointTotal}</span><br />
					Unit Strength: <span className="bold">{this.state.unitStrengthTotal}</span>
				</div>
			listedUnitTileDisplay = sortedListedUnits.map(unitObject => {
				return (
					<tr
						key={unitObject.index}
						id={unitObject.index}
						className="list-entry-including-icons"
					>

							<td valign="top">
								<span className="list-icons">
									<ArtefactIcon
										key={unitObject.index + 20000}
										id={unitObject.unit.id}
										unitObject={unitObject}
										listedUnitsThatCanHaveArtefacts={listedUnitsThatCanHaveArtefacts}
										updateUnitBeingGivenArtefact={this.updateUnitBeingGivenArtefact}
									/>
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
									selectedArtefacts={this.state.selectedArtefacts}
									removeUnitOption={this.removeUnitOption}
									removeArtefact={this.removeArtefact}
									removeFromList={this.removeFromList}
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
						<i>Click units to the left<br />to add them to the list</i>
					</div>
			}
		}

		let display
		if (unitOptionSelectionTile !== undefined && artefactSelectionTile === undefined) {
			display = unitOptionSelectionTile
		}
		if (unitOptionSelectionTile === undefined && artefactSelectionTile !== undefined) {
			display = artefactSelectionTile
		}
		if (unitOptionSelectionTile === undefined && artefactSelectionTile === undefined) {
			let listOutputSideClassNames
			if (sortedListedUnits.length === 0) {
				listOutputSideClassNames = 'list-output-side column'
			} else {
				listOutputSideClassNames = 'list-output-side column'
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
							<div className={listOutputSideClassNames}>
								<div className="list-title-bar">
									<h3 className="list-title">{this.state.selectedArmy.label}</h3>
								</div>
								{pointTotalDisplay}<br />
								<table><tbody>{listedUnitTileDisplay}</tbody></table>
								{viewListButtonDisplay}
							</div>
							<div className="email-div">
								<span className="user-select-none">Email:{' '}</span>admin@goodarmylists.com
							</div>
						</div>
					</div>
				</div>
		}

		return (
			<div>
				<div className="army-dropdown-section">
					<div className="main-title-box">
						<h2 className="main-title">Make a Good Kings of War List</h2>
					</div>
					<div className="copyright-notice">Kings of War is copyrighted by Mantic Entertainment</div>
					<div className="react-select">
						<Select
							placeholder="Select Army..."
							options={armyOptions}
							value={selectedArmy}
							onChange={this.updateSelectedArmy}
							styles={this.props.dropdownStyle}
						/>
					</div>	
				</div>
				<div>{display}</div>
				<Modal
					appElement={document.getElementById('app')}
					isOpen={this.state.formattedListVisible}
					onRequestClose={this.hideFormattedList}
					shouldCloseOnOverlayClick={true}
					className="formatted-list-modal"
				>
					<FormattedList
						selectedArmy={selectedArmy}
						listedUnits={sortedListedUnits}
						selectedUnitOptions={this.state.selectedUnitOptions}
						selectedArtefacts={this.state.selectedArtefacts}
						pointTotal={this.state.pointTotal}
						unitStrengthTotal={this.state.unitStrengthTotal}
						hideFormattedList={this.hideFormattedList}
					/>
				</Modal>
			</div>
		)
	}	
}

export default UnitEntriesFormContainer