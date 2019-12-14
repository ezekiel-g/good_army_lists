import React, { Component } from 'react'
import Select from 'react-select'
import Modal from 'react-modal'
import UnitEntryButton from '../components/UnitEntryButton'
import AlliesButtons from '../components/AlliesButtons'
import UnitOptionIcon from '../components/UnitOptionIcon'
import ArtefactIcon from '../components/ArtefactIcon'
import UnitEntryNameTile from '../components/UnitEntryNameTile'
import UnitOptionSelectionTile from '../components/UnitOptionSelectionTile'
import FormattedList from '../components/FormattedList'
import ArtefactSelectionTile from '../components/ArtefactSelectionTile'
import whiteSquare from '../../../../assets/images/whiteSquare.png'
import paypal from '../../../../assets/images/paypal.gif'

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
			alliesVisible: false,
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
			tooMany: 3,
			alliedArmy: '',
			alliedArmySingularName: '',
			alliedListedUnits: [],
			alliedSelectedUnitOptions: [],
			alliedUnitBeingGivenOption: '',
			alliedPointTotal: 0,
			alliedTroopUnlocks: 0,
			alliedHeroUnlocks: 0,
			alliedWarEngineUnlocks: 0,
			alliedMonsterUnlocks: 0,
			alliedUnlocksFromRegiments: 0,
			alliedUnlocksFromLargeInfantry: 0,
			alliedHeroCount: 0,
			alliedWarEngineCount: 0,
			alliedMonsterCount: 0,
			alliedTitanCount: 0,
			alliedInfantryHordeCount: 0,
			alliedLargeInfantryHordeCount: 0,
			alliedGreyedOutUnits: []
		}
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.calculatePointTotal = this.calculatePointTotal.bind(this)
		this.calculateAlliedPointTotal = this.calculateAlliedPointTotal.bind(this)
		this.calculateUnitStrengthTotal = this.calculateUnitStrengthTotal.bind(this)
		this.calculateMostOfTheFour = this.calculateMostOfTheFour.bind(this)
		this.calculateAlliedMostOfTheFour = this.calculateAlliedMostOfTheFour.bind(this)
		this.calculateTooMany = this.calculateTooMany.bind(this)
		this.calculateUnlocks = this.calculateUnlocks.bind(this)
		this.calculateAlliedUnlocks = this.calculateAlliedUnlocks.bind(this)
		this.addToList = this.addToList.bind(this)
		this.addAlliedUnitToList = this.addAlliedUnitToList.bind(this)
		this.removeFromList = this.removeFromList.bind(this)
		this.removeAlliedUnitFromList = this.removeAlliedUnitFromList.bind(this)
		this.toggleUnitOptions = this.toggleUnitOptions.bind(this)
		this.toggleArtefacts = this.toggleArtefacts.bind(this)
		this.toggleAllies = this.toggleAllies.bind(this)
		this.updateUnitBeingGivenOption = this.updateUnitBeingGivenOption.bind(this)
		this.updateAlliedUnitBeingGivenOption = this.updateAlliedUnitBeingGivenOption.bind(this)
		this.updateUnitBeingGivenArtefact = this.updateUnitBeingGivenArtefact.bind(this)
		this.selectUnitOptions = this.selectUnitOptions.bind(this)
		this.selectAlliedUnitOptions = this.selectAlliedUnitOptions.bind(this)
		this.selectArtefact = this.selectArtefact.bind(this)
		this.removeUnitOption = this.removeUnitOption.bind(this)
		this.removeAlliedUnitOption = this.removeAlliedUnitOption.bind(this)
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

	calculateAlliedPointTotal() {
		let alliedPointTotal = 0
		let i
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			alliedPointTotal += this.state.alliedListedUnits[i].unit.points
		}
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			alliedPointTotal += this.state.alliedSelectedUnitOptions[i].unitOption.points
		}
		this.setState({ alliedPointTotal: alliedPointTotal })
	}

	calculateUnitStrengthTotal() {
		let unitStrengthTotal = 0
		let i
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			unitStrengthTotal += this.state.alliedListedUnits[i].unit.unit_strength
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

	calculateAlliedUnlocks(unit, alliedArmy) {
		let alliedListedUnits = this.state.alliedListedUnits
		let alliedTroopUnlocks = this.state.alliedTroopUnlocks
		let alliedUnlocksFromRegiments = this.state.alliedUnlocksFromRegiments
		let alliedHeroUnlocks = this.state.alliedHeroUnlocks
		let alliedWarEngineUnlocks = this.state.alliedWarEngineUnlocks
		let alliedMonsterUnlocks = this.state.alliedMonsterUnlocks
		let alliedUnlocksFromLargeInfantry = this.state.alliedUnlocksFromLargeInfantry
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
				alliedTroopUnlocks += 2
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
				alliedTroopUnlocks += 4
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
				alliedUnlocksFromRegiments += 1
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
				alliedHeroUnlocks += 1
				alliedWarEngineUnlocks += 1
				alliedMonsterUnlocks += 1
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
				alliedUnlocksFromLargeInfantry += 2
			}
		}
		if (unit.unit_size === 'Troop' || unit.is_irregular === true) {
			alliedTroopUnlocks -= 1
		}
		if (unit.unit_type.includes('Hero')) {
			if (alliedHeroUnlocks > 0) {
				alliedHeroUnlocks -= 1
			} else {
				if (
					alliedUnlocksFromLargeInfantry > 0 && (
						(
							this.state.alliedHeroCount <= this.state.alliedWarEngineCount &&
							this.state.alliedHeroCount <= this.state.alliedMonsterCount &&
							this.state.alliedHeroCount <= this.state.alliedTitanCount
						) || (
							this.state.alliedHeroCount < this.state.alliedLargeInfantryHordeCount
						)
					)
				) {
					alliedUnlocksFromLargeInfantry -= 1
				} else {
					if (alliedUnlocksFromRegiments > 0) {
						alliedUnlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'War Engine') {
			if (alliedWarEngineUnlocks > 0) {
				alliedWarEngineUnlocks  -= 1
			} else {
				if (
					alliedUnlocksFromLargeInfantry > 0 && (
						(
							this.state.alliedWarEngineCount <= this.state.alliedHeroCount &&
							this.state.alliedWarEngineCount <= this.state.alliedMonsterCount &&
							this.state.alliedWarEngineCount <= this.state.alliedTitanCount
						) || (
							this.state.alliedWarEngineCount < this.state.alliedLargeInfantryHordeCount
						)
					)
				) {
					alliedUnlocksFromLargeInfantry -= 1
				} else {
					if (alliedUnlocksFromRegiments > 0) {
						alliedUnlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'Monster') {
			if (alliedMonsterUnlocks > 0) {
				alliedMonsterUnlocks  -= 1
			} else {
				if (
					alliedUnlocksFromLargeInfantry > 0 && (
						(
							this.state.alliedMonsterCount <= this.state.alliedHeroCount &&
							this.state.alliedMonsterCount <= this.state.alliedWarEngineCount &&
							this.state.alliedMonsterCount <= this.state.alliedTitanCount
						) || (
							this.state.alliedMonsterCount < this.state.alliedLargeInfantryHordeCount
						)
					)
				) {
					alliedUnlocksFromLargeInfantry -= 1
				} else {
					if (alliedUnlocksFromRegiments > 0) {
						alliedUnlocksFromRegiments -= 1
					}
				}
			}
		}
		if (unit.unit_type === 'Titan') {
			if (alliedMonsterUnlocks > 0) {
				alliedMonsterUnlocks  -= 1
			} else {
				if (
					alliedUnlocksFromLargeInfantry > 0 && (
						(
							this.state.alliedTitanCount <= this.state.alliedHeroCount &&
							this.state.alliedTitanCount <= this.state.alliedWarEngineCount &&
							this.state.alliedTitanCount <= this.state.alliedMonsterCount
						) || (
							this.state.alliedTitanCount < this.state.alliedLargeInfantryHordeCount
						)
					)
				) {
					alliedUnlocksFromLargeInfantry -= 1
				} else {
					if (alliedUnlocksFromRegiments > 0) {
						alliedUnlocksFromRegiments -= 1
					}
				}
			}
		}


		let units = this.props.units
		let pointTotal = 0
		let alliedPointTotal = 0
		let alliedGreyedOutUnits = []
		let alliedHeroesOnList = []
		let alliedWarEnginesOnList = []
		let alliedMonstersOnList = []
		let alliedLocked
		let alliedHeroCount = 0
		let alliedWarEngineCount = 0
		let alliedMonsterCount = 0
		let alliedTitanCount = 0
		let alliedInfantryHordeCount = 0
		let alliedLargeInfantryHordeCount = 0
		let i2

		let getUnitTypeCounts = array => {
			alliedHeroCount = 0
			alliedWarEngineCount = 0
			alliedMonsterCount = 0
			alliedTitanCount = 0
			alliedInfantryHordeCount = 0
			alliedLargeInfantryHordeCount = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (array[i4].unit.unit_type.includes('Hero')) {
					alliedHeroCount += 1
				}
				if (array[i4].unit.unit_type === 'War Engine') {
					alliedWarEngineCount += 1
				}	
				if (array[i4].unit.unit_type === 'Monster') {
					alliedMonsterCount += 1
				}
				if (array[i4].unit.unit_type === 'Titan') {
					alliedTitanCount += 1
				}
				if (array[i4].unit.is_irregular === false) {
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
						alliedInfantryHordeCount += 1
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
						alliedLargeInfantryHordeCount += 1
					}
				}
			}
		}

		let getPoints = (unitArray, unitOptionArray) => {
			let points = 0
			let i4
			for (i4 = 0; i4 < unitArray.length; i4++) {
				points += unitArray[i4].unit.points
			}
			for (i4 = 0; i4 < unitOptionArray.length; i4++) {
				points += unitOptionArray[i4].unitOption.points
			}
			return points
		}

		getUnitTypeCounts(alliedListedUnits)
		pointTotal += getPoints(this.state.listedUnits, this.state.selectedUnitOptions)
		alliedPointTotal += getPoints(this.state.alliedListedUnits, this.state.alliedSelectedUnitOptions)

		for (i = 0; i < units.length; i++) {
			let limitedUnits = []
			let maybeTooMany = []
			alliedLocked = false
			for (i2 = 0; i2 < alliedListedUnits.length; i2++) {
				if (units[i].limited_n > 0) {
					limitedUnits.push(alliedListedUnits[i2])
				}
				if (
					(units[i].unit_type.includes('Hero') && alliedListedUnits[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'War Engine' && alliedListedUnits[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Monster' && alliedListedUnits[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Titan' && alliedListedUnits[i2].unit.id === units[i].id)
				) {
					maybeTooMany.push(alliedListedUnits[i2])
				}
			}
			if (
				(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
				units[i].unit_type.includes('Hero') ||
				units[i].unit_type === 'War Engine' ||
				units[i].unit_type === 'Monster' ||
				units[i].unit_type === 'Titan'
			) {
				alliedLocked = true
				if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && alliedTroopUnlocks > 0) {
					alliedLocked = false
				} else {
					if (units[i].unit_type.includes('Hero') && alliedHeroUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && alliedUnlocksFromLargeInfantry > 0) {
							if (
								(
									alliedHeroCount +
									alliedWarEngineCount +
									alliedMonsterCount +
									alliedTitanCount <
									alliedHeroUnlocks +
									alliedWarEngineUnlocks +
									alliedMonsterUnlocks +
									alliedUnlocksFromLargeInfantry && (
										(
											alliedHeroCount <= alliedWarEngineCount ||
											alliedHeroCount <= alliedMonsterCount ||
											alliedHeroCount <= alliedTitanCount
										) && (
											alliedLargeInfantryHordeCount >
											alliedHeroCount +
											alliedWarEngineCount +
											alliedMonsterCount +
											alliedTitanCount
										) 
									) || (
										alliedHeroCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
									)
								)
							) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type.includes('Hero') && alliedUnlocksFromRegiments > 0) {
							alliedLocked = false
						}
					}
					if (units[i].unit_type === 'War Engine' && alliedWarEngineUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type === 'War Engine' && alliedUnlocksFromLargeInfantry > 0) {
							if (
								(
									alliedHeroCount +
									alliedWarEngineCount +
									alliedMonsterCount +
									alliedTitanCount <
									alliedHeroUnlocks +
									alliedWarEngineUnlocks +
									alliedMonsterUnlocks +
									alliedUnlocksFromLargeInfantry && (										
										(
											alliedWarEngineCount <= alliedHeroCount ||
											alliedWarEngineCount <= alliedMonsterCount ||
											alliedWarEngineCount <= alliedTitanCount
										) && (
											alliedLargeInfantryHordeCount >
											alliedHeroCount +
											alliedWarEngineCount +
											alliedMonsterCount +
											alliedTitanCount
										)
									) || (
										alliedWarEngineCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
									)
								)
							) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && alliedUnlocksFromRegiments > 0) {
							alliedLocked = false
						}
					}
					if (units[i].unit_type === 'Monster' && alliedMonsterUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type === 'Monster' && alliedUnlocksFromLargeInfantry > 0) {
							if (
								(
									alliedHeroCount +
									alliedWarEngineCount +
									alliedMonsterCount +
									alliedTitanCount <
									alliedHeroUnlocks +
									alliedWarEngineUnlocks +
									alliedMonsterUnlocks +
									alliedUnlocksFromLargeInfantry && (
										(
											alliedMonsterCount <= alliedHeroCount ||
											alliedMonsterCount <= alliedWarEngineCount ||
											alliedMonsterCount <= alliedTitanCount
										) && (
											alliedLargeInfantryHordeCount >
											alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
										)
									) || (
										alliedMonsterCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
									)
								)
							) {
								alliedLocked = false
							}

						}
						if (units[i].unit_type === 'Monster' && alliedUnlocksFromRegiments > 0) {
							alliedLocked = false
						}
					}
					if (units[i].unit_type === 'Titan' && alliedMonsterUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type === 'Titan' && alliedUnlocksFromLargeInfantry > 0) {
							if (
								(
									alliedHeroCount +
									alliedWarEngineCount +
									alliedMonsterCount +
									alliedTitanCount <
									alliedHeroUnlocks +
									alliedWarEngineUnlocks +
									alliedMonsterUnlocks +
									alliedUnlocksFromLargeInfantry && (
										(
											alliedTitanCount <= alliedHeroCount ||
											alliedTitanCount <= alliedWarEngineCount ||
											alliedTitanCount <= alliedMonsterCount
										) && (
											alliedLargeInfantryHordeCount >
											alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
										)
									) || (
										alliedTitanCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
									)
								)
							) {
								alliedLocked = false
							}

						}
						if (units[i].unit_type === 'Titan' && alliedUnlocksFromRegiments > 0) {
							alliedLocked = false
						}
					}						
				}
			}
	
			if (
				alliedLocked === true ||
				units[i].army_id !== alliedArmy.id ||
				(pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points ||
				limitedUnits.length >= 1 ||
				maybeTooMany.length >= 1
			) {
				alliedGreyedOutUnits.push(units[i])
			}
		}

		this.setState({
			alliedListedUnits: alliedListedUnits,
			alliedTroopUnlocks: alliedTroopUnlocks,
			alliedHeroUnlocks: alliedHeroUnlocks,
			alliedWarEngineUnlocks: alliedWarEngineUnlocks,
			alliedMonsterUnlocks: alliedMonsterUnlocks,
			alliedUnlocksFromRegiments: alliedUnlocksFromRegiments,
			alliedUnlocksFromLargeInfantry: alliedUnlocksFromLargeInfantry,
			alliedGreyedOutUnits: alliedGreyedOutUnits
		})
		this.calculateAlliedPointTotal()
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
			if (this.state.listedUnits[i].unit.is_irregular === false) {
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

	calculateAlliedMostOfTheFour() {
		let alliedHeroCount = 0
		let alliedWarEngineCount = 0
		let alliedMonsterCount = 0
		let alliedTitanCount = 0
		let alliedInfantryHordeCount = 0
		let alliedLargeInfantryHordeCount = 0
		let i
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			if (this.state.alliedListedUnits[i].unit.unit_type.includes('Hero')) {
				alliedHeroCount += 1
			}
			if (this.state.alliedListedUnits[i].unit.unit_type === 'War Engine') {
				alliedWarEngineCount += 1
			}	
			if (this.state.alliedListedUnits[i].unit.unit_type === 'Monster') {
				alliedMonsterCount += 1
			}
			if (this.state.alliedListedUnits[i].unit.unit_type === 'Titan') {
				alliedTitanCount += 1
			}
			if (this.state.alliedListedUnits[i].is_irregular === false) {
				if (
					(
						this.state.alliedListedUnits[i].unit.unit_type === 'Infantry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Heavy Infantry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Cavalry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Chariot'
					) && (
						this.state.alliedListedUnits[i].unit.unit_size === 'Horde' || 
						this.state.alliedListedUnits[i].unit.unit_size === 'Legion'
					)
				) {
					alliedInfantryHordeCount += 1
				}
				if (
					(
						this.state.alliedListedUnits[i].unit.unit_type === 'Large Infantry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Monstrous Infantry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Large Cavalry'
					) && (
						this.state.alliedListedUnits[i].unit.unit_size === 'Horde' || 
						this.state.alliedListedUnits[i].unit.unit_size === 'Legion'
					)
				) {
					alliedLargeInfantryHordeCount += 1
				}
			}
		}
		this.setState({
			alliedHeroCount: alliedHeroCount,
			alliedWarEngineCount: alliedWarEngineCount,
			alliedMonsterCount: alliedMonsterCount,
			alliedTitanCount: alliedTitanCount,
			alliedInfantryHordeCount: alliedInfantryHordeCount,
			alliedLargeInfantryHordeCount: alliedLargeInfantryHordeCount
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
			indexCount: indexCount,
			unitOptionsVisible: false,
			artefactsVisible: false,
			alliesVisible: false
		})
		this.calculatePointTotal()
		this.calculateUnitStrengthTotal()
		this.calculateMostOfTheFour()
		this.calculateTooMany(unitToAdd.points)
		this.calculateUnlocks(unitToAdd)
	}

	addAlliedUnitToList(unitToAdd, alliedArmy, alliedArmySingularName) {
		let alliedListedUnits = this.state.alliedListedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount + 200000, unit: unitToAdd }
		alliedListedUnits.push(unitToAddWithIndex)
		indexCount += 1
		this.setState({
			alliedListedUnits: alliedListedUnits,
			alliedArmy: alliedArmy,
			alliedArmySingularName: alliedArmySingularName,
			indexCount: indexCount,
			unitOptionsVisible: false,
			artefactsVisible: false
		})
		this.calculateAlliedPointTotal()
		this.calculateUnitStrengthTotal()
		this.calculateAlliedMostOfTheFour()
		this.calculateAlliedUnlocks(unitToAdd, alliedArmy)
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
			let points = 0
			let i4
			for (i4 = 0; i4 < unitArray.length; i4++) {
				points += unitArray[i4].unit.points
			}
			for (i4 = 0; i4 < unitOptionArray.length; i4++) {
				points += unitOptionArray[i4].unitOption.points
			}
			for (i4 = 0; i4 < artefactArray.length; i4++) {
				points += artefactArray[i4].artefact.points
			}
			return points
		}

		let getUnitStrength = array => {
			unitStrengthTotal = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				unitStrengthTotal += array[i4].unit.unit_strength
			}
			for (i4 = 0; i4 < this.state.alliedListedUnits.length; i4++) {
				unitStrengthTotal += this.state.alliedListedUnits[i4].unit.unit_strength
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
				if (array[i4].unit.is_irregular === false) {
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
		pointTotal = getPoints(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedArtefacts)

		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			listedUnits = this.state.listedUnits
			selectedUnitOptions = this.state.selectedUnitOptions
			selectedArtefacts = this.state.selectedArtefacts				
		} else {
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
		}

		if (
			unitObject.unit.name === 'Jarvis [1]' &&
			this.state.alliedListedUnits.length > 0 &&
			this.state.alliedArmy.alignment === 'Good'
		) {
			listedUnits = this.state.listedUnits
			selectedUnitOptions = this.state.selectedUnitOptions
			selectedArtefacts = this.state.selectedArtefacts			
		}

		getUnitStrength(listedUnits)
		let alliedArmy
		let alliedListedUnits = this.state.alliedListedUnits
		let alliedPointTotal
		let alliedTroopUnlocks
		let alliedHeroUnlocks
		let alliedWarEngineUnlocks
		let alliedMonsterUnlocks
		let alliedUnlocksFromRegiments
		let alliedUnlocksFromLargeInfantry
		let alliedHeroCount
		let alliedWarEngineCount
		let alliedMonsterCount
		let alliedTitanCount
		let alliedInfantryHordeCount
		let alliedLargeInfantryHordeCount
		let alliesVisible
		let alliedGreyedOutUnits
		let indexCount
		if (listedUnits.length < 1) {
			alliedArmy = ''
			alliedListedUnits = []
			alliedPointTotal = 0
			alliedTroopUnlocks = 0
			alliedHeroUnlocks = 0
			alliedWarEngineUnlocks = 0
			alliedMonsterUnlocks = 0
			alliedUnlocksFromRegiments = 0
			alliedUnlocksFromLargeInfantry = 0
			alliedHeroCount = 0
			alliedWarEngineCount = 0
			alliedMonsterCount = 0
			alliedTitanCount = 0
			alliedInfantryHordeCount = 0
			alliedLargeInfantryHordeCount = 0
			alliesVisible = false
			alliedGreyedOutUnits = []
			indexCount = 0
			let i7
			for (i7 = 0; i7 < this.state.alliedListedUnits.length; i7 ++) {
				unitStrengthTotal -= this.state.alliedListedUnits[i7].unit.unit_strength
			}
		} else {
			alliedArmy = this.state.alliedArmy
			alliedListedUnits = this.state.alliedListedUnits
			alliedPointTotal = this.state.alliedPointTotal
			alliedTroopUnlocks = this.state.alliedTroopUnlocks
			alliedHeroUnlocks = this.state.alliedHeroUnlocks,
			alliedWarEngineUnlocks = this.state.alliedWarEngineUnlocks
			alliedMonsterUnlocks = this.state.alliedMonsterUnlocks
			alliedUnlocksFromRegiments = this.state.alliedUnlocksFromRegiments
			alliedUnlocksFromLargeInfantry = this.state.alliedUnlocksFromLargeInfantry
			alliedHeroCount = this.state.alliedHeroCount
			alliedWarEngineCount = this.state.alliedWarEngineCount
			alliedMonsterCount = this.state.alliedMonsterCount
			alliedTitanCount = this.state.alliedTitanCount
			alliedInfantryHordeCount = this.state.alliedInfantryHordeCount
			alliedLargeInfantryHordeCount = this.state.alliedLargeInfantryHordeCount
			alliesVisible = this.state.alliesVisible
			alliedGreyedOutUnits = this.state.alliedGreyedOutUnits
			indexCount = this.state.indexCount
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
		pointTotal = getPoints(listedUnits, selectedUnitOptions, selectedArtefacts)

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
			largeInfantryHordeCount: largeInfantryHordeCount,
			alliedArmy: alliedArmy,
			alliedListedUnits: alliedListedUnits,
			alliedPointTotal: alliedPointTotal,
			alliedTroopUnlocks: alliedTroopUnlocks,
			alliedHeroUnlocks: alliedHeroUnlocks,
			alliedWarEngineUnlocks: alliedWarEngineUnlocks,
			alliedMonsterUnlocks: alliedMonsterUnlocks,
			alliedUnlocksFromRegiments: alliedUnlocksFromRegiments,
			alliedUnlocksFromLargeInfantry: alliedUnlocksFromLargeInfantry,
			alliedHeroCount: alliedHeroCount,
			alliedWarEngineCount: alliedWarEngineCount,
			alliedMonsterCount: alliedMonsterCount,
			alliedTitanCount: alliedTitanCount,
			alliedInfantryHordeCount: alliedInfantryHordeCount,
			alliedLargeInfantryHordeCount: alliedLargeInfantryHordeCount,
			alliesVisible: alliesVisible,
			alliedGreyedOutUnits: alliedGreyedOutUnits,
			indexCount: indexCount
		})
	}

	removeAlliedUnitFromList(unitObject) {
		let alliedListedUnits = this.state.alliedListedUnits
		let alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions
		let alliedRemovedUnitOptionObjects = []
		let alliedPointTotal = 0
		let unitStrengthTotal = 0
		let alliedTroopUnlocks = 0
		let alliedHeroUnlocks = 0
		let alliedWarEngineUnlocks = 0
		let alliedMonsterUnlocks = 0
		let alliedUnlocksFromLargeInfantry = 0
		let alliedUnlocksFromRegiments = 0
		let alliedHeroCount = 0
		let alliedWarEngineCount = 0
		let alliedMonsterCount = 0
		let alliedTitanCount = 0
		let alliedInfantryHordeCount = 0
		let alliedLargeInfantryHordeCount = 0
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
			alliedTroopUnlocks = 0
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
						alliedTroopUnlocks += 2
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
						alliedTroopUnlocks += 4
					}	
				}
			}
		}

		let addHeroWarEngineMonsterUnlocks = array => {
			alliedHeroUnlocks = 0
			alliedWarEngineUnlocks = 0
			alliedMonsterUnlocks = 0
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
					alliedHeroUnlocks += 1
					alliedWarEngineUnlocks += 1
					alliedMonsterUnlocks += 1
				}
			}
		}

		let addUnlocksFromLargeInfantry = array => {
			alliedUnlocksFromLargeInfantry = 0
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
					alliedUnlocksFromLargeInfantry += 2
				}				
			}	
		}

		let addUnlocksFromRegiments = array => {
			alliedUnlocksFromRegiments = 0
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
					alliedUnlocksFromRegiments += 1
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
					alliedTroopUnlocks -= 1
				}
				if (array[i4].unit.unit_type.includes('Hero')) {
					if (alliedHeroUnlocks > 0) {
						alliedHeroUnlocks -= 1
					} else {
						if (alliedUnlocksFromLargeInfantry > 0) {
							alliedUnlocksFromLargeInfantry -= 1
						} else {
							if (alliedUnlocksFromRegiments > 0) {
								alliedUnlocksFromRegiments -= 1
							}
						}
					}
				}
				if (array[i4].unit.unit_type === 'War Engine') {
					if (alliedWarEngineUnlocks > 0) {
						alliedWarEngineUnlocks  -= 1
					} else {
						if (alliedUnlocksFromLargeInfantry > 0) {
							alliedUnlocksFromLargeInfantry -= 1
						} else {
							if (alliedUnlocksFromRegiments > 0) {
								alliedUnlocksFromRegiments -= 1
							}
						}
					}
				}
				if (
					array[i4].unit.unit_type === 'Monster' ||
					array[i4].unit.unit_type === 'Titan'
				) {
					if (alliedMonsterUnlocks > 0) {
						alliedMonsterUnlocks  -= 1
					} else {
						if (alliedUnlocksFromLargeInfantry > 0) {
							alliedUnlocksFromLargeInfantry -= 1
						} else {
							if (alliedUnlocksFromRegiments > 0) {
								alliedUnlocksFromRegiments -= 1
							}
						}
					}
				}
			}
		}

		let actuallyDeleteStuff = (unitArray, unitOptionArray) => {
			let i4
			for (i4 = unitArray.length - 1; i4 >= 0; i4--) {
				if (unitArray[i4].index === unitObject.index) {
					unitStrengthTotal -= unitArray[i4].unit.unit_strength
					unitArray.splice(unitArray.indexOf(unitArray[i4]), 1)
				}
			}
			for (i4 = unitOptionArray.length - 1; i4 >= 0; i4--) {
				if (unitOptionArray[i4].index === unitObject.index) {
					alliedRemovedUnitOptionObjects.push(unitOptionArray[i4])
					unitOptionArray.splice(unitOptionArray.indexOf(unitOptionArray[i4]), 1)
				}
			}		
		}

		let getPoints = (unitArray, unitOptionArray) => {
			let points = 0
			let i4
			for (i4 = 0; i4 < unitArray.length; i4++) {
				points += unitArray[i4].unit.points
			}
			for (i4 = 0; i4 < unitOptionArray.length; i4++) {
				points += unitOptionArray[i4].unitOption.points
			}
			return points
		}

		let getUnitStrength = array => {
			unitStrengthTotal = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				unitStrengthTotal += array[i4].unit.unit_strength
			}
			for (i4 = 0; i4 < this.state.listedUnits.length; i4++) {
				unitStrengthTotal += this.state.listedUnits[i4].unit.unit_strength
			}
		}

		let getUnitTypeCounts = array => {
			alliedHeroCount = 0
			alliedWarEngineCount = 0
			alliedMonsterCount = 0
			alliedTitanCount = 0
			alliedInfantryHordeCount = 0
			alliedLargeInfantryHordeCount = 0
			let i4
			for (i4 = 0; i4 < array.length; i4++) {
				if (array[i4].unit.unit_type.includes('Hero')) {
					alliedHeroCount += 1
				}
				if (array[i4].unit.unit_type === 'War Engine') {
					alliedWarEngineCount += 1
				}	
				if (array[i4].unit.unit_type === 'Monster') {
					alliedMonsterCount += 1
				}
				if (array[i4].unit.unit_type === 'Titan') {
					alliedTitanCount += 1
				}
				if (array[i4].unit.is_irregular === false) {
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
						alliedInfantryHordeCount += 1
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
						alliedLargeInfantryHordeCount += 1
					}
				}
			}
		}

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2
			alliedPointTotal = 0

			getUnitTypeCounts(array)
			alliedPointTotal += getPoints(array, alliedSelectedUnitOptions)

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										alliedHeroCount +
										alliedWarEngineCount +
										alliedMonsterCount +
										alliedTitanCount <
										alliedHeroUnlocks +
										alliedWarEngineUnlocks +
										alliedMonsterUnlocks +
										alliedUnlocksFromLargeInfantry && (
											(
												alliedHeroCount <= alliedWarEngineCount ||
												alliedHeroCount <= alliedMonsterCount ||
												alliedHeroCount <= alliedTitanCount
											) && (
												alliedLargeInfantryHordeCount >
												alliedHeroCount +
												alliedWarEngineCount +
												alliedMonsterCount +
												alliedTitanCount
											) 
										) || (
											alliedHeroCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										alliedHeroCount +
										alliedWarEngineCount +
										alliedMonsterCount +
										alliedTitanCount <
										alliedHeroUnlocks +
										alliedWarEngineUnlocks +
										alliedMonsterUnlocks +
										alliedUnlocksFromLargeInfantry && (										
											(
												alliedWarEngineCount <= alliedHeroCount ||
												alliedWarEngineCount <= alliedMonsterCount ||
												alliedWarEngineCount <= alliedTitanCount
											) && (
												alliedLargeInfantryHordeCount >
												alliedHeroCount +
												alliedWarEngineCount +
												alliedMonsterCount +
												alliedTitanCount
											)
										) || (
											alliedWarEngineCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										alliedHeroCount +
										alliedWarEngineCount +
										alliedMonsterCount +
										alliedTitanCount <
										alliedHeroUnlocks +
										alliedWarEngineUnlocks +
										alliedMonsterUnlocks +
										alliedUnlocksFromLargeInfantry && (
											(
												alliedMonsterCount <= alliedHeroCount ||
												alliedMonsterCount <= alliedWarEngineCount ||
												alliedMonsterCount <= alliedTitanCount
											) && (
												alliedLargeInfantryHordeCount >
												alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
											)
										) || (
											alliedMonsterCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										alliedHeroCount +
										alliedWarEngineCount +
										alliedMonsterCount +
										alliedTitanCount <
										alliedHeroUnlocks +
										alliedWarEngineUnlocks +
										alliedMonsterUnlocks +
										alliedUnlocksFromLargeInfantry && (
											(
												alliedTitanCount <= alliedHeroCount ||
												alliedTitanCount <= alliedWarEngineCount ||
												alliedTitanCount <= alliedMonsterCount
											) && (
												alliedLargeInfantryHordeCount >
												alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
											)
										) || (
											alliedTitanCount < alliedInfantryHordeCount + alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(this.state.pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}



		let fakeListedUnits = []
		for (i = 0; i < alliedListedUnits.length; i++) {
			fakeListedUnits.push(alliedListedUnits[i])
		}
		let fakeSelectedUnitOptions = []
		for (i = 0; i < alliedSelectedUnitOptions.length; i++) {
			fakeSelectedUnitOptions.push(alliedSelectedUnitOptions[i])
		}

		actuallyDeleteStuff(fakeListedUnits, fakeSelectedUnitOptions)
		addTroopUnlocks(fakeListedUnits)
		addHeroWarEngineMonsterUnlocks(fakeListedUnits)
		addUnlocksFromLargeInfantry(fakeListedUnits)
		addUnlocksFromRegiments(fakeListedUnits)
		subtractUnlocks(fakeListedUnits)
		getUnitTypeCounts(fakeListedUnits)
		alliedPointTotal = getPoints(fakeListedUnits, fakeSelectedUnitOptions)

		if (doesUnitUnlock(unitObject.unit) === true) {
			alliedListedUnits = fakeListedUnits
			alliedSelectedUnitOptions = fakeSelectedUnitOptions

			if (alliedTroopUnlocks < 0) {
				alliedListedUnits = this.state.alliedListedUnits
				alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions
			}
			if (this.state.alliedHeroUnlocks <= 0) {
				if (
					this.state.alliedUnlocksFromLargeInfantry <= 0 || (
						this.state.alliedHeroCount > this.state.alliedWarEngineCount &&
						this.state.alliedHeroCount > this.state.alliedMonsterCount &&
						this.state.alliedHeroCount > this.state.alliedTitanCount &&
						this.state.alliedHeroCount >= this.state.alliedLargeInfantryHordeCount
					)
				) {
					if (this.state.alliedUnlocksFromRegiments <= 0) {
						alliedListedUnits = this.state.alliedListedUnits
						alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions					
					}
				}
			}
			if (this.state.alliedWarEngineUnlocks <= 0) {
				if (
					this.state.alliedUnlocksFromLargeInfantry <= 0 || (
						this.state.alliedWarEngineCount > this.state.alliedHeroCount &&
						this.state.alliedWarEngineCount > this.state.alliedMonsterCount &&
						this.state.alliedWarEngineCount > this.state.alliedTitanCount &&
						this.state.alliedWarEngineCount >= this.state.alliedLargeInfantryHordeCount
					)
				) {
					if (this.state.alliedUnlocksFromRegiments <= 0) {
						alliedListedUnits = this.state.alliedListedUnits
						alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions						
					}
				}
			}
			if (this.state.alliedMonsterUnlocks <= 0) {
				if (
					this.state.alliedUnlocksFromLargeInfantry <= 0 || (
						this.state.alliedMonsterCount > this.state.alliedHeroCount &&
						this.state.alliedMonsterCount > this.state.alliedWarEngineCount &&
						this.state.alliedMonsterCount > this.state.alliedTitanCount &&
						this.state.alliedMonsterCount >= this.state.alliedLargeInfantryHordeCount
					)
				) {
					if (this.state.alliedUnlocksFromRegiments <= 0) {
						alliedListedUnits = this.state.alliedListedUnits
						alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions					
					}
				}
				if (
					this.state.alliedUnlocksFromLargeInfantry <= 0 || (
						this.state.alliedTitanCount > this.state.alliedHeroCount &&
						this.state.alliedTitanCount > this.state.alliedWarEngineCount &&
						this.state.alliedTitanCount > this.state.alliedMonsterCount &&
						this.state.alliedTitanCount >= this.state.alliedLargeInfantryHordeCount
					)
				) {
					if (this.state.alliedUnlocksFromRegiments <= 0) {
						alliedListedUnits = this.state.alliedListedUnits
						alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions						
					}
				}
			}		
		} else {
			alliedListedUnits = fakeListedUnits
			alliedSelectedUnitOptions = fakeSelectedUnitOptions
		}

		if (
			(this.state.pointTotal + alliedPointTotal + unitObject.unit.points) / 4 <
			alliedPointTotal + unitObject.unit.points
		) {
			alliedListedUnits = this.state.alliedListedUnits
			alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions				
		}

		let alliedArmy
		let alliedArmySingularName
		if (alliedListedUnits.length > 0) {
			alliedArmy = this.state.alliedArmy
			alliedArmySingularName = this.state.alliedArmySingularName
		} else {
			alliedArmy = ''
			alliedArmySingularName = ''
		}

		addTroopUnlocks(alliedListedUnits)
		addHeroWarEngineMonsterUnlocks(alliedListedUnits)
		addUnlocksFromLargeInfantry(alliedListedUnits)
		addUnlocksFromRegiments(alliedListedUnits)
		subtractUnlocks(alliedListedUnits)
		alliedPointTotal = getPoints(alliedListedUnits, alliedSelectedUnitOptions)
		getUnitStrength(alliedListedUnits)
		getUnitTypeCounts(alliedListedUnits)

		this.setState({
			alliedArmy: alliedArmy,
			alliedArmySingularName: alliedArmySingularName,
			alliedListedUnits: alliedListedUnits,
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: alliedPointTotal,
			unitStrengthTotal: unitStrengthTotal,
			alliedTroopUnlocks: alliedTroopUnlocks,
			alliedHeroUnlocks: alliedHeroUnlocks,
			alliedWarEngineUnlocks: alliedWarEngineUnlocks,
			alliedMonsterUnlocks: alliedMonsterUnlocks,
			alliedUnlocksFromLargeInfantry: alliedUnlocksFromLargeInfantry,
			alliedUnlocksFromRegiments: alliedUnlocksFromRegiments,
			alliedHeroCount: alliedHeroCount,
			alliedWarEngineCount: alliedWarEngineCount,
			alliedMonsterCount: alliedMonsterCount,
			alliedTitanCount: alliedTitanCount,
			alliedInfantryHordeCount: alliedInfantryHordeCount,
			alliedLargeInfantryHordeCount: alliedLargeInfantryHordeCount,
			alliedGreyedOutUnits: determineIfGreyedOut(alliedListedUnits)
		})
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

	toggleArtefacts() {
		if (this.state.artefactsVisible === false) {
			this.setState({ artefactsVisible: true })
		} else {
			this.setState({
				artefactsVisible: false,
				unitBeingGivenArtefact: ''
			})
		}
	}

	toggleAllies() {
		let alliesVisible
		let buttonLabel = document.getElementsByClassName('allies-button')[0]
		if (this.state.alliesVisible === true) {
			alliesVisible = false
			buttonLabel.innerHTML = 'Allies'
		} else {
			alliesVisible = true
			buttonLabel.innerHTML = 'Main Army Units'
		}
		this.setState({ alliesVisible: alliesVisible })
	}

	updateUnitBeingGivenOption(unit) {
		this.setState({ unitBeingGivenOption: unit })
		this.toggleUnitOptions()
	}

	updateAlliedUnitBeingGivenOption(unit) {
		this.setState({ alliedUnitBeingGivenOption: unit })
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
				highlightedUnitOptions[i].unitOption.display_name === 'Raid Leader' ||
				highlightedUnitOptions[i].unitOption.display_name === 'Path of Fire'
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

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(pointTotal + this.state.alliedPointTotal + units[i].points) / 4 < this.state.alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitBeingGivenOption: '',
			alliedGreyedOutUnits: determineIfGreyedOut(this.state.alliedListedUnits)
		})
		this.toggleUnitOptions()
	}

	selectAlliedUnitOptions(unitObject, highlightedUnitOptions) {
		let alliedSelectedUnitOptions = []
		let alliedPointTotal = this.state.alliedPointTotal
		let i
		for (i = 0; i < highlightedUnitOptions.length; i++) {
			highlightedUnitOptions[i] = {
				index: unitObject.index,
				unitOption: highlightedUnitOptions[i]
			}
		}
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			if (this.state.alliedSelectedUnitOptions[i].index !== unitObject.index) {
				alliedSelectedUnitOptions.push(this.state.alliedSelectedUnitOptions[i])
			} else {
				alliedPointTotal -= this.state.alliedSelectedUnitOptions[i].unitOption.points
			}
		}		
		for (i = 0; i < highlightedUnitOptions.length; i++) {
			alliedPointTotal += highlightedUnitOptions[i].unitOption.points
		}
		for (i = 0; i < alliedSelectedUnitOptions.length; i++) {
			let i3
			for (i3 = 0; i3 < highlightedUnitOptions.length; i3++) {
				if (
					highlightedUnitOptions[i3].unitOption.is_unique === true &&
					highlightedUnitOptions[i3].unitOption.display_name === alliedSelectedUnitOptions[i].unitOption.display_name
				) {
					alliedPointTotal -= alliedSelectedUnitOptions[i].unitOption.points
					alliedSelectedUnitOptions.splice(alliedSelectedUnitOptions.indexOf(alliedSelectedUnitOptions[i]), 1)
				}
			}
		}
		alliedSelectedUnitOptions = alliedSelectedUnitOptions.concat(highlightedUnitOptions)

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(this.state.pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: alliedPointTotal,
			alliedUnitBeingGivenOption: '',
			alliedGreyedOutUnits: (determineIfGreyedOut(this.state.alliedListedUnits))
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
					selectedUnitOptions[i].unitOption.display_name === 'Raid Leader' ||
					selectedUnitOptions[i].unitOption.display_name === 'Path of Fire'
				)
			) {
				pointTotal -= selectedUnitOptions[i].unitOption.points
				selectedUnitOptions.splice(selectedUnitOptions.indexOf(selectedUnitOptions[i]), 1)
			}
		}

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(pointTotal + this.state.alliedPointTotal + units[i].points) / 4 < this.state.alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitBeingGivenArtefact: '',
			alliedGreyedOutUnits: determineIfGreyedOut(this.state.alliedListedUnits)
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

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(pointTotal + this.state.alliedPointTotal + units[i].points) / 4 < this.state.alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			selectedUnitOptions = this.state.selectedUnitOptions
			pointTotal += unitOptionObject.unitOption.points
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: pointTotal,
			alliedGreyedOutUnits: determineIfGreyedOut(this.state.alliedListedUnits)
		})
	}

	removeAlliedUnitOption(unitOptionObject) {
		let alliedSelectedUnitOptions = []
		let alliedPointTotal = this.state.alliedPointTotal
		let i
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			if (
				this.state.alliedSelectedUnitOptions[i].index !== unitOptionObject.index ||
				this.state.alliedSelectedUnitOptions[i].unitOption.id !== unitOptionObject.unitOption.id
			) {
				alliedSelectedUnitOptions.push(this.state.alliedSelectedUnitOptions[i])
			}
		}
		alliedPointTotal -= unitOptionObject.unitOption.points

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(this.state.pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: alliedPointTotal,
			alliedGreyedOutUnits: determineIfGreyedOut(this.state.alliedListedUnits)
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

		let determineIfGreyedOut = array => {
			let units = this.props.units
			let alliedGreyedOutUnits = []
			let alliedHeroesOnList = []
			let alliedWarEnginesOnList = []
			let alliedMonstersOnList = []
			let alliedLocked
			let i
			let i2

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeTooMany = []
				alliedLocked = false
				for (i2 = 0; i2 < array.length; i2++) {
					if (units[i].limited_n > 0) {
						limitedUnits.push(array[i2])
					}
					if (
						(units[i].unit_type.includes('Hero') && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && array[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && array[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(array[i2])
					}
				}
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) ||
					units[i].unit_type.includes('Hero') ||
					units[i].unit_type === 'War Engine' ||
					units[i].unit_type === 'Monster' ||
					units[i].unit_type === 'Titan'
				) {
					alliedLocked = true
					if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && this.state.alliedTroopUnlocks > 0) {
						alliedLocked = false
					} else {
						if (units[i].unit_type.includes('Hero') && this.state.alliedHeroUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedHeroCount <= this.state.alliedWarEngineCount ||
												this.state.alliedHeroCount <= this.state.alliedMonsterCount ||
												this.state.alliedHeroCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type.includes('Hero') && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && this.state.alliedWarEngineUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (										
											(
												this.state.alliedWarEngineCount <= this.state.alliedHeroCount ||
												this.state.alliedWarEngineCount <= this.state.alliedMonsterCount ||
												this.state.alliedWarEngineCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}
							}
							if (units[i].unit_type === 'War Engine' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Monster' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedMonsterCount <= this.state.alliedHeroCount ||
												this.state.alliedMonsterCount <= this.state.alliedWarEngineCount ||
												this.state.alliedMonsterCount <= this.state.alliedTitanCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Monster' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}
						if (units[i].unit_type === 'Titan' && this.state.alliedMonsterUnlocks > 0) {
							alliedLocked = false
						} else {
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromLargeInfantry > 0) {
								if (
									(
										this.state.alliedHeroCount +
										this.state.alliedWarEngineCount +
										this.state.alliedMonsterCount +
										this.state.alliedTitanCount <
										this.state.alliedHeroUnlocks +
										this.state.alliedWarEngineUnlocks +
										this.state.alliedMonsterUnlocks +
										this.state.alliedUnlocksFromLargeInfantry && (
											(
												this.state.alliedTitanCount <= this.state.alliedHeroCount ||
												this.state.alliedTitanCount <= this.state.alliedWarEngineCount ||
												this.state.alliedTitanCount <= this.state.alliedMonsterCount
											) && (
												this.state.alliedLargeInfantryHordeCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedInfantryHordeCount + this.state.alliedLargeInfantryHordeCount
										)
									)
								) {
									alliedLocked = false
								}

							}
							if (units[i].unit_type === 'Titan' && this.state.alliedUnlocksFromRegiments > 0) {
								alliedLocked = false
							}
						}						
					}
				}			
				if (
					alliedLocked === true ||
					(pointTotal + this.state.alliedPointTotal + units[i].points) / 4 < this.state.alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1 || (
						this.state.alliedArmy !== '' &&
						units[i].army_id !== this.state.alliedArmy.id &&
						this.state.alliedListedUnits.length > 0					
					)
				) {
					alliedGreyedOutUnits.push(units[i])
				}
			}
			return alliedGreyedOutUnits
		}

		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			selectedArtefacts = this.state.selectedArtefacts
			pointTotal += artefactObject.artefact.points
		}

		this.setState({
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			alliedGreyedOutUnits: determineIfGreyedOut(this.state.alliedListedUnits)
		})
	}

	clearList() {
		this.setState({
			listedUnits: [],
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
			formattedListVisible: false,
			unitOptionsVisible: false,
			artefactsVisible: false,
			alliesVisible: false,
			alliedArmy: '',
			alliedArmySingularName: '',
			alliedListedUnits: [],
			alliedSelectedUnitOptions: [],
			alliedPointTotal: 0,
			alliedTroopUnlocks: 0,
			alliedHeroUnlocks: 0,
			alliedWarEngineUnlocks: 0,
			alliedMonsterUnlocks: 0,
			alliedUnlocksFromRegiments: 0,
			alliedUnlocksFromLargeInfantry: 0,
			alliedHeroCount: 0,
			alliedWarEngineCount: 0,
			alliedMonsterCount: 0,
			alliedTitanCount: 0,
			alliedInfantryHordeCount: 0,
			alliedLargeInfantryHordeCount: 0,
			alliedGreyedOutUnits: []
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
		let appElement = document.getElementById('kow')
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
			return (b.points - a.points)
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
		let alliesButtonDisplay
		let viewListButtonDisplay
		let pointTotalDisplay
		let unsortedListedUnitsTop = []
		let unsortedListedUnitsSecondQuarter = []
		let unsortedListedUnitsThirdQuarter = []
		let unsortedListedUnitsBottom = []
		let unsortedAlliedListedUnitsTop = []
		let unsortedAlliedListedUnitsSecondQuarter = []
		let unsortedAlliedListedUnitsThirdQuarter = []
		let unsortedAlliedListedUnitsBottom = []
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (
				this.state.listedUnits[i].unit.unlocking_class === 1 ||
				this.state.listedUnits[i].unit.unlocking_class === 2 ||
				this.state.listedUnits[i].unit.unlocking_class === 3
			) {
				unsortedListedUnitsTop.push(this.state.listedUnits[i])
			}
			if (this.state.listedUnits[i].unit.unlocking_class === 0) {
				if (
					this.state.listedUnits[i].unit.is_irregular === false &&
					this.state.listedUnits[i].unit.unit_size === 'Regiment' && (
						this.state.listedUnits[i].unit.unit_type === 'Large Infantry' ||
						this.state.listedUnits[i].unit.unit_type === 'Large Cavalry' ||
						this.state.listedUnits[i].unit.unit_type === 'Monstrous Infantry'
					)
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
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			if (
				this.state.alliedListedUnits[i].unit.unlocking_class === 1 ||
				this.state.alliedListedUnits[i].unit.unlocking_class === 2 ||
				this.state.alliedListedUnits[i].unit.unlocking_class === 3
			) {
				unsortedAlliedListedUnitsTop.push(this.state.alliedListedUnits[i])
			}
			if (this.state.alliedListedUnits[i].unit.unlocking_class === 0) {
				if (
					this.state.alliedListedUnits[i].unit.is_irregular === false &&
					this.state.alliedListedUnits[i].unit.unit_size === 'Regiment' && (
						this.state.alliedListedUnits[i].unit.unit_type === 'Large Infantry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Large Cavalry' ||
						this.state.alliedListedUnits[i].unit.unit_type === 'Monstrous Infantry'
					)
				) {
					unsortedAlliedListedUnitsSecondQuarter.push(this.state.alliedListedUnits[i])
				} else {
					if (
						this.state.alliedListedUnits[i].unit.is_irregular === false &&
						this.state.alliedListedUnits[i].unit.unit_size === 'Troop'
					) {
						unsortedAlliedListedUnitsThirdQuarter.push(this.state.alliedListedUnits[i])
					} else {
						unsortedAlliedListedUnitsBottom.push(this.state.alliedListedUnits[i])
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
		let alliedListedUnitsTop = unsortedAlliedListedUnitsTop.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let alliedListedUnitsSecondQuarter = unsortedAlliedListedUnitsSecondQuarter.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let alliedListedUnitsThirdQuarter = unsortedAlliedListedUnitsThirdQuarter.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let alliedListedUnitsBottom = unsortedAlliedListedUnitsBottom.sort((a, b) => {
			return ( b.unit.unit_strength - a.unit.unit_strength )
		})
		let idsOfUnitsThatCanHaveOptions = []
		for (i = 0; i < this.props.unitOptions.length; i++) {
			idsOfUnitsThatCanHaveOptions.push(this.props.unitOptions[i].unit_id)
		}
		let listedUnitsThatCanHaveOptions = []
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (idsOfUnitsThatCanHaveOptions.includes(this.state.listedUnits[i].unit.id)) {
				listedUnitsThatCanHaveOptions.push(this.state.listedUnits[i])
			}
		}
		let listedUnitsThatCanHaveArtefacts = []
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (
				this.state.listedUnits[i].unit.unit_type !== 'War Engine' &&
				this.state.listedUnits[i].unit.unit_type !== 'Monster' &&
				this.state.listedUnits[i].unit.unit_type !== 'Titan' && (
					this.state.listedUnits[i].unit.limited_n === null ||
					this.state.listedUnits[i].unit.limited_n === undefined ||
					this.state.listedUnits[i].unit.limited_n === '' ||
					this.state.listedUnits[i].unit.limited_n === 0
				)
			) {
				listedUnitsThatCanHaveArtefacts.push(this.state.listedUnits[i])
			}
		}

		let alliedListedUnitsThatCanHaveOptions = []
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			if (idsOfUnitsThatCanHaveOptions.includes(this.state.alliedListedUnits[i].unit.id)) {
				alliedListedUnitsThatCanHaveOptions.push(this.state.alliedListedUnits[i])
			}
		}
		let totalPoints
		let listedUnitTileDisplayTop
		let listedUnitTileDisplaySecondQuarter
		let listedUnitTileDisplayThirdQuarter
		let listedUnitTileDisplayBottom
		let alliedListedUnitTileDisplayTop
		let alliedListedUnitTileDisplaySecondQuarter
		let alliedListedUnitTileDisplayThirdQuarter
		let alliedListedUnitTileDisplayBottom
		if (this.state.unitOptionsVisible) {
			unitOptionSelectionTile =
				<div className="unit-option-selection-tile">
					<UnitOptionSelectionTile
						unitObject={this.state.unitBeingGivenOption}
						alliedUnitObject={this.state.alliedUnitBeingGivenOption}
						unitOptions={this.props.unitOptions}
						selectUnitOptions={this.selectUnitOptions}
						selectAlliedUnitOptions={this.selectAlliedUnitOptions}
						selectedUnitOptions={this.state.selectedUnitOptions}
						alliedSelectedUnitOptions={this.state.alliedSelectedUnitOptions}
						toggleUnitOptions={this.toggleUnitOptions}
						pointTotal={this.state.pointTotal}
						alliedPointTotal={this.state.alliedPointTotal}
					/>
				</div>
		}
		if (this.state.artefactsVisible) {
			artefactSelectionTile = 
				<div className="artefact-selection-tile">
					<ArtefactSelectionTile
						unitObject={this.state.unitBeingGivenArtefact}
						artefacts={this.props.artefacts}
						selectedArtefacts={this.state.selectedArtefacts}
						selectArtefact={this.selectArtefact}
						toggleArtefacts={this.toggleArtefacts}
						pointTotal={this.state.pointTotal}
						alliedPointTotal={this.state.alliedPointTotal}
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
			let i2
			for (i = 0; i < units.length; i++) {
				let listedUnits = this.state.listedUnits
				let limitedHeroCount = 0
				let limitedAndLockedFromJarvisCount = 0
				let limitedDuplicateCount = 0
				let maybeTooMany = []
				let heroesOnList = []
				let warEnginesOnList = []
				let monstersOnList = []
				let locked = false
				for (i2 = 0; i2 < listedUnits.length; i2++) {
					if (listedUnits[i2].unit.limited_n > 0 && listedUnits[i2].unit.unit_type.includes('Hero')) {
						limitedHeroCount += 1
					}
					if (units[i].limited_n > 0 && units[i].unit_type.includes('Hero') && listedUnits[i2].unit.name === 'Jarvis [1]') {
						limitedAndLockedFromJarvisCount += 1
					}
					if (units[i].limited_n > 0 && listedUnits[i2].unit.id === units[i].id) {
						limitedDuplicateCount += 1
					}
					if (
						(units[i].unit_type.includes('Hero') && listedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'War Engine' && listedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Monster' && listedUnits[i2].unit.id === units[i].id) ||
						(units[i].unit_type === 'Titan' && listedUnits[i2].unit.id === units[i].id)
					) {
						maybeTooMany.push(listedUnits[i2])
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
				if (
					units[i].name === 'Jarvis [1]' && (
						limitedHeroCount > 0 || (
							this.state.alliedListedUnits.length > 0 &&
							this.state.alliedArmy.alignment === 'Good'
						)
					)
				) {
					locked = true
				}
				if (units[i].limited_n > 0 && units[i].unit_type.includes('Hero') && limitedAndLockedFromJarvisCount > 0) {
					locked = true
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

			let alliesTitle
			if (this.state.alliesVisible === false) {
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
			} else {
				unitEntryButtonDisplay =
					<AlliesButtons
						armies={this.props.armies}
						selectedArmy={this.state.selectedArmy}
						units={allUnits}
						listedUnits={this.state.listedUnits}
						alliedListedUnits={this.state.alliedListedUnits}
						addToList={this.addAlliedUnitToList}
						alliedArmy={this.state.alliedArmy}
						pointTotal={this.state.pointTotal}
						alliedPointTotal={this.state.alliedPointTotal}
						alliedTroopUnlocks={this.state.alliedTroopUnlocks}
						alliedHeroUnlocks={this.state.alliedHeroUnlocks}
						alliedWarEngineUnlocks={this.state.alliedWarEngineUnlocks}
						alliedMonsterUnlocks={this.state.alliedMonsterUnlocks}
						alliedUnlocksFromRegiments={this.state.alliedUnlocksFromRegiments}
						alliedUnlocksFromLargeInfantry={this.state.alliedUnlocksFromLargeInfantry}
						alliedHeroCount={this.state.alliedHeroCount}
						alliedWarEngineCount={this.state.alliedWarEngineCount}
						alliedMonsterCount={this.state.alliedMonsterCount}
						alliedTitanCount={this.state.alliedTitanCount}
						alliedInfantryHordeCount={this.state.alliedInfantryHordeCount}
						alliedLargeInfantryHordeCount={this.state.alliedLargeInfantryHordeCount}
						greyedOutUnits={this.state.alliedGreyedOutUnits}
					/>
			}

			totalPoints = this.state.pointTotal + this.state.alliedPointTotal
			pointTotalDisplay =
				<div className="point-total">
					Points: <span className="bold">{totalPoints}</span><br />
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

			listedUnitTileDisplaySecondQuarter = listedUnitsSecondQuarter.map(unitObject => {
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

			listedUnitTileDisplayThirdQuarter = listedUnitsThirdQuarter.map(unitObject => {
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

			listedUnitTileDisplayBottom = listedUnitsBottom.map(unitObject => {
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

			alliedListedUnitTileDisplayTop = alliedListedUnitsTop.map(unitObject => {
				return (
					<tr
						key={unitObject.index + 225000}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<ArtefactIcon
									key={unitObject.index + 300000}
									id={unitObject.unit.id}
									no={'no'}
									listedUnitsThatCanHaveArtefacts={listedUnitsThatCanHaveArtefacts}
									updateUnitBeingGivenArtefact={this.updateUnitBeingGivenArtefact}
								/>
								<UnitOptionIcon
									key={unitObject.index + 250000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={alliedListedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateAlliedUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index + 275000}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.alliedSelectedUnitOptions}
								removeUnitOption={this.removeAlliedUnitOption}
								removeFromList={this.removeAlliedUnitFromList}
							/>
						</td>
					</tr>
				)				
			})

			alliedListedUnitTileDisplaySecondQuarter = alliedListedUnitsSecondQuarter.map(unitObject => {
				return (
					<tr
						key={unitObject.index + 225000}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<ArtefactIcon
									key={unitObject.index + 300000}
									id={unitObject.unit.id}
									no={'no'}
									listedUnitsThatCanHaveArtefacts={listedUnitsThatCanHaveArtefacts}
									updateUnitBeingGivenArtefact={this.updateUnitBeingGivenArtefact}
								/>
								<UnitOptionIcon
									key={unitObject.index + 250000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={alliedListedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateAlliedUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index + 275000}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.alliedSelectedUnitOptions}
								removeUnitOption={this.removeAlliedUnitOption}
								removeFromList={this.removeAlliedUnitFromList}
							/>
						</td>
					</tr>
				)				
			})

			alliedListedUnitTileDisplayThirdQuarter = alliedListedUnitsThirdQuarter.map(unitObject => {
				return (
					<tr
						key={unitObject.index + 225000}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<ArtefactIcon
									key={unitObject.index + 300000}
									id={unitObject.unit.id}
									no={'no'}
									listedUnitsThatCanHaveArtefacts={listedUnitsThatCanHaveArtefacts}
									updateUnitBeingGivenArtefact={this.updateUnitBeingGivenArtefact}
								/>
								<UnitOptionIcon
									key={unitObject.index + 250000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={alliedListedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateAlliedUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index + 275000}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.alliedSelectedUnitOptions}
								removeUnitOption={this.removeAlliedUnitOption}
								removeFromList={this.removeAlliedUnitFromList}
							/>
						</td>
					</tr>
				)				
			})

			alliedListedUnitTileDisplayBottom = alliedListedUnitsBottom.map(unitObject => {
				return (
					<tr
						key={unitObject.index + 225000}
						id={unitObject.index}
						className="list-entry-including-icons"
					>
						<td valign="top">
							<span className="list-icons">
								<ArtefactIcon
									key={unitObject.index + 300000}
									id={unitObject.unit.id}
									no={'no'}
									listedUnitsThatCanHaveArtefacts={listedUnitsThatCanHaveArtefacts}
									updateUnitBeingGivenArtefact={this.updateUnitBeingGivenArtefact}
								/>
								<UnitOptionIcon
									key={unitObject.index + 250000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveOptions={alliedListedUnitsThatCanHaveOptions}
									updateUnitBeingGivenOption={this.updateAlliedUnitBeingGivenOption}
								/>
							</span>
						</td>
						<td valign="top" className="user-select-none">
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<UnitEntryNameTile
								key={unitObject.index + 275000}
								id={unitObject.index}
								unitObject={unitObject}
								selectedUnitOptions={this.state.alliedSelectedUnitOptions}
								removeUnitOption={this.removeAlliedUnitOption}
								removeFromList={this.removeAlliedUnitFromList}
							/>
						</td>
					</tr>
				)				
			})

			if (this.state.listedUnits.length > 0) {
				alliesButtonDisplay =
					<div className="allies-button-div">
						<br /><br />
						<span onClick={this.toggleAllies} className="allies-button">Allies</span>
					</div>
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
		}

		let listOutputSide
		if (unitOptionSelectionTile !== undefined && artefactSelectionTile === undefined) {
			listOutputSide = unitOptionSelectionTile
		}
		if (unitOptionSelectionTile === undefined && artefactSelectionTile !== undefined) {
			listOutputSide = artefactSelectionTile
		}
 		if (unitOptionSelectionTile === undefined && artefactSelectionTile === undefined) {
			if (this.state.alliedListedUnits.length > 0) {
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
						</table><br />
						<div className="allies-title-on-list">
							{this.state.alliedArmySingularName} Allies:
						</div><br />
						<table>
							<tbody>
								{alliedListedUnitTileDisplayTop}
								{alliedListedUnitTileDisplaySecondQuarter}
								{alliedListedUnitTileDisplayThirdQuarter}
								{alliedListedUnitTileDisplayBottom}
							</tbody>
						</table>
						{viewListButtonDisplay}
					</div>
			} else {
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
		
		}

		let display =
			<div className={hidden}>
				{clearListDiv}	
				<div className="everything-after-army-dropdown row">
					<div>
						<div className="unit-entry-buttons column">
							{unitEntryButtonTitle}<br />
							{unitEntryButtonDisplay}<br />
							{unitEntryButtonDisplayUnlocked}
							{alliesButtonDisplay}
						</div>
					</div>
					<div>
						<div className="list-output-side column">
							<div className="list-title-bar">
								<h3 className="list-title">{this.state.selectedArmy.label}</h3>
							</div><br />
							{listOutputSide}
						</div>
					</div>
				</div>
				<div className="email-div">
					<span className="user-select-none">Email:{' '}</span>admin@goodarmylists.com
					<form className="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_donations" />
						<input type="hidden" name="business" value="admin@goodarmylists.com" />
						<input type="hidden" name="currency_code" value="USD" />
						<input type="image" src={paypal} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
						<img alt="" border="0" src={paypal} width="1" height="1" />
					</form>
				</div>
			</div>
		return (
						
			<div>
				<div className="army-dropdown-section">
					<div className="main-page-link">
						<span className="main-page-link-label">
							<a href="/">www.goodarmylists.com</a>
						</span>
					</div>
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
					appElement={appElement}
					isOpen={this.state.formattedListVisible}
					onRequestClose={this.hideFormattedList}
					shouldCloseOnOverlayClick={true}
					className="formatted-list-modal"
				>
					<FormattedList
						selectedArmy={selectedArmy}
						listedUnitsTop={listedUnitsTop}
						listedUnitsSecondQuarter={listedUnitsSecondQuarter}
						listedUnitsThirdQuarter={listedUnitsThirdQuarter}
						listedUnitsBottom={listedUnitsBottom}
						selectedUnitOptions={this.state.selectedUnitOptions}
						selectedArtefacts={this.state.selectedArtefacts}
						pointTotal={this.state.pointTotal}
						unitStrengthTotal={this.state.unitStrengthTotal}
						alliedArmy={this.state.alliedArmy}
						alliedListedUnitsTop={alliedListedUnitsTop}
						alliedListedUnitsSecondQuarter={alliedListedUnitsSecondQuarter}
						alliedListedUnitsThirdQuarter={alliedListedUnitsThirdQuarter}
						alliedListedUnitsBottom={alliedListedUnitsBottom}
						alliedSelectedUnitOptions={this.state.alliedSelectedUnitOptions}
						alliedPointTotal={this.state.alliedPointTotal}
						hideFormattedList={this.hideFormattedList}
					/>
				</Modal>
			</div>
		)
	}	
}

export default UnitEntriesFormContainer