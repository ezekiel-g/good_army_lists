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
			hordeCount: 0,
			largeInfantryCount: 0,
			maximumCount: 3,
			alliedArmy: '',
			alliedArmySingularName: '',
			alliedListedUnits: [],
			alliedSelectedUnitOptions: [],
			alliedUnitBeingGivenOption: '',
			alliedPointTotal: 0,
			alliedUnitStrengthTotal: 0,
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
			alliedHordeCount: 0,
			alliedLargeInfantryCount: 0,
			alliedGreyedOutUnits: []
		}
		this.updateSelectedArmy = this.updateSelectedArmy.bind(this)
		this.calculatePointTotal = this.calculatePointTotal.bind(this)
		this.calculateUnitStrengthTotal = this.calculateUnitStrengthTotal.bind(this)
		this.calculateUnitTypeCounts = this.calculateUnitTypeCounts.bind(this)
		this.calculateMaximumCount = this.calculateMaximumCount.bind(this)
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

	calculatePointTotal(listedUnitArray, unitOptionArray, artefactArray) {
		let is_ally = false
		let pointTotal = 0
		let i
		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			if (listedUnitArray[0].unit.army_id !== this.state.selectedArmy.value) {
				is_ally = true
			}
			for (i = 0; i < listedUnitArray.length; i++) {
				pointTotal += listedUnitArray[i].unit.points
			}
		}
		if (unitOptionArray == undefined) {
			if (is_ally === false) {
				unitOptionArray = this.state.selectedUnitOptions
			}
			if (is_ally === true) {
				unitOptionArray = this.state.alliedSelectedUnitOptions
			}		
		}
		for (i = 0; i < unitOptionArray.length; i++) {
			pointTotal += unitOptionArray[i].unitOption.points
		}
		if (artefactArray == undefined) {
			artefactArray = this.state.selectedArtefacts
		}
		for (i = 0; i < artefactArray.length; i++) {
			pointTotal += artefactArray[i].artefact.points
		}			
		return pointTotal
	}

	calculateUnitStrengthTotal(listedUnitArray, unitOptionArray) {
		let is_ally = false
		let unitStrengthTotal = 0
		let i
		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			if (listedUnitArray[0].unit.army_id !== this.state.selectedArmy.value) {
				is_ally = true
			}
			for (i = 0; i < listedUnitArray.length; i++) {
				unitStrengthTotal += listedUnitArray[i].unit.unit_strength
			}
		}
		if (unitOptionArray == undefined) {
			if (is_ally === false) {
				unitOptionArray = this.state.selectedUnitOptions
			}
			if (is_ally === true) {
				unitOptionArray = this.state.alliedSelectedUnitOptions
			}
		}
		for (i = 0; i < unitOptionArray.length; i++) {
			if (
				unitOptionArray[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				unitOptionArray[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				unitOptionArray[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				unitOptionArray[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				unitOptionArray[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
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
			titanCount: 0,
			monsterAndTitanCount: 0,
			hordeCount: 0,
			largeInfantryCount: 0,
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
				if (listedUnitArray[i].unit.unit_type.includes('Hero')) {
					unitTypeCountObject.heroCount += 1
				}
				if (listedUnitArray[i].unit.unit_type === 'War Engine') {
					unitTypeCountObject.warEngineCount += 1
				}	
				if (listedUnitArray[i].unit.unit_type === 'Monster') {
					unitTypeCountObject.monsterCount += 1
					unitTypeCountObject.monsterAndTitanCount += 1
				}
				if (listedUnitArray[i].unit.unit_type === 'Titan') {
					unitTypeCountObject.titanCount += 1
					unitTypeCountObject.monsterAndTitanCount += 1
				}
				if (listedUnitArray[i].unit.is_irregular === false) {
					if (listedUnitArray[i].unit.unlocking_class === 3) {
						unitTypeCountObject.hordeCount += 1
					}
					if (listedUnitArray[i].unit.unlocking_class === 2) {
						unitTypeCountObject.largeInfantryCount += 1
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
							this.state.heroCount < this.state.largeInfantryCount
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
							this.state.warEngineCount < this.state.largeInfantryCount
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
							this.state.monsterCount < this.state.largeInfantryCount
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
							this.state.titanCount < this.state.largeInfantryCount
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
			unlocksFromLargeInfantry: unlocksFromLargeInfantry,
			pointTotal: this.calculatePointTotal(listedUnits),
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits)
		})
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
							this.state.alliedHeroCount < this.state.alliedLargeInfantryCount
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
							this.state.alliedWarEngineCount < this.state.alliedLargeInfantryCount
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
							this.state.alliedMonsterCount < this.state.alliedLargeInfantryCount
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
							this.state.alliedTitanCount < this.state.alliedLargeInfantryCount
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
		let alliedHordeCount = 0
		let alliedLargeInfantryCount = 0
		let i2

		let getUnitTypeCounts = array => {
			alliedHeroCount = 0
			alliedWarEngineCount = 0
			alliedMonsterCount = 0
			alliedTitanCount = 0
			alliedHordeCount = 0
			alliedLargeInfantryCount = 0
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
						alliedHordeCount += 1
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
						alliedLargeInfantryCount += 1
					}
				}
			}
		}

		getUnitTypeCounts(alliedListedUnits)
		pointTotal += this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions)
		alliedPointTotal += this.calculatePointTotal(this.state.alliedListedUnits, this.state.alliedSelectedUnitOptions)

		for (i = 0; i < units.length; i++) {
			let limitedUnits = []
			let maybeMaxedOut = []
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
					maybeMaxedOut.push(alliedListedUnits[i2])
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
											alliedLargeInfantryCount >
											alliedHeroCount +
											alliedWarEngineCount +
											alliedMonsterCount +
											alliedTitanCount
										) 
									) || (
										alliedHeroCount < alliedHordeCount + alliedLargeInfantryCount
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
											alliedLargeInfantryCount >
											alliedHeroCount +
											alliedWarEngineCount +
											alliedMonsterCount +
											alliedTitanCount
										)
									) || (
										alliedWarEngineCount < alliedHordeCount + alliedLargeInfantryCount
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
											alliedLargeInfantryCount >
											alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
										)
									) || (
										alliedMonsterCount < alliedHordeCount + alliedLargeInfantryCount
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
											alliedLargeInfantryCount >
											alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
										)
									) || (
										alliedTitanCount < alliedHordeCount + alliedLargeInfantryCount
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
				maybeMaxedOut.length >= 1
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
			alliedPointTotal: this.calculatePointTotal(alliedListedUnits),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits),
			alliedGreyedOutUnits: alliedGreyedOutUnits
		})
	}

	addToList(unitToAdd) {
		let listedUnits = this.state.listedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount, unit: unitToAdd }
		listedUnits.push(unitToAddWithIndex)
		indexCount += 1
		let pointTotal = this.calculatePointTotal(listedUnits)
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnits)
		this.setState({
			listedUnits: listedUnits,
			indexCount: indexCount,
			pointTotal: pointTotal,
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits),
			heroCount: unitTypeCountObject.heroCount,
			warEngineCount: unitTypeCountObject.warEngineCount,
			monsterCount: unitTypeCountObject.monsterCount,
			titanCount: unitTypeCountObject.titanCount,
			hordeCount: unitTypeCountObject.hordeCount,
			largeInfantryCount: unitTypeCountObject.largeInfantryCount,
			maximumCount: this.calculateMaximumCount(pointTotal + this.state.alliedPointTotal),
			unitOptionsVisible: false,
			artefactsVisible: false,
			alliesVisible: false
		})
		this.calculateUnlocks(unitToAdd)
	}

	addAlliedUnitToList(unitToAdd, alliedArmy, alliedArmySingularName) {
		let alliedListedUnits = this.state.alliedListedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount + 200000, unit: unitToAdd }
		alliedListedUnits.push(unitToAddWithIndex)
		indexCount += 1
		let alliedPointTotal = this.calculatePointTotal(alliedListedUnits)
		let alliedUnitTypeCountObject = this.calculateUnitTypeCounts(alliedListedUnits)
		this.setState({
			alliedListedUnits: alliedListedUnits,
			alliedArmy: alliedArmy,
			alliedArmySingularName: alliedArmySingularName,
			indexCount: indexCount,
			alliedPointTotal: alliedPointTotal,
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits),
			alliedHeroCount: alliedUnitTypeCountObject.heroCount,
			alliedWarEngineCount: alliedUnitTypeCountObject.warEngineCount,
			alliedMonsterCount: alliedUnitTypeCountObject.monsterCount,
			alliedTitanCount: alliedUnitTypeCountObject.titanCount,
			alliedHordeCount: alliedUnitTypeCountObject.hordeCount,
			alliedLargeInfantryCount: alliedUnitTypeCountObject.largeInfantryCount,
			maximumCount: this.calculateMaximumCount(this.state.pointTotal + alliedPointTotal),
			unitOptionsVisible: false,
			artefactsVisible: false
		})
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
		let hordeCount = 0
		let largeInfantryCount = 0
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

		let getUnitTypeCounts = array => {
			heroCount = 0
			warEngineCount = 0
			monsterCount = 0
			titanCount = 0
			hordeCount = 0
			largeInfantryCount = 0
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
						hordeCount += 1
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
						largeInfantryCount += 1
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
		pointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedArtefacts)

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
							this.state.heroCount >= this.state.largeInfantryCount
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
							this.state.warEngineCount >= this.state.largeInfantryCount
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
							this.state.monsterCount >= this.state.largeInfantryCount
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
							this.state.titanCount >= this.state.largeInfantryCount
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

		unitStrengthTotal = this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions)
		let alliedArmy
		let alliedListedUnits = this.state.alliedListedUnits
		let alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions
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
		let alliedHordeCount
		let alliedLargeInfantryCount
		let alliesVisible
		let alliedGreyedOutUnits
		let indexCount
		if (listedUnits.length < 1) {
			alliedArmy = ''
			alliedListedUnits = []
			alliedSelectedUnitOptions = []
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
			alliedHordeCount = 0
			alliedLargeInfantryCount = 0
			alliesVisible = false
			alliedGreyedOutUnits = []
			indexCount = 0
		} else {
			alliedArmy = this.state.alliedArmy
			alliedListedUnits = this.state.alliedListedUnits
			alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions
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
			alliedHordeCount = this.state.alliedHordeCount
			alliedLargeInfantryCount = this.state.alliedLargeInfantryCount
			alliesVisible = this.state.alliesVisible
			alliedGreyedOutUnits = this.state.alliedGreyedOutUnits
			indexCount = this.state.indexCount
		}

		let oldPointTotal = this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, this.state.selectedArtefacts)
		let oldAlliedPointTotal = this.calculatePointTotal(this.state.alliedListedUnits, this.state.alliedSelectedUnitOptions)
		pointTotal = this.calculatePointTotal(listedUnits, selectedUnitOptions, selectedArtefacts)
		alliedPointTotal = this.calculatePointTotal(alliedListedUnits, alliedSelectedUnitOptions)
		let maximumCountBefore = this.calculateMaximumCount(oldPointTotal + oldAlliedPointTotal)
		let maximumCountAfter = this.calculateMaximumCount(pointTotal + alliedPointTotal)
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

		getUnitTypeCounts(listedUnits)

		pointTotal = this.calculatePointTotal(listedUnits, selectedUnitOptions, selectedArtefacts)
		alliedPointTotal = this.calculatePointTotal(alliedListedUnits, alliedSelectedUnitOptions)

		this.setState({
			listedUnits: listedUnits,
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: pointTotal,
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions),
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
			hordeCount: hordeCount,
			largeInfantryCount: largeInfantryCount,
			alliedArmy: alliedArmy,
			alliedListedUnits: alliedListedUnits,
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: alliedPointTotal,
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits, alliedSelectedUnitOptions),
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
			alliedHordeCount: alliedHordeCount,
			alliedLargeInfantryCount: alliedLargeInfantryCount,
			alliesVisible: alliesVisible,
			alliedGreyedOutUnits: alliedGreyedOutUnits,
			indexCount: indexCount,
			maximumCount: this.calculateMaximumCount(pointTotal + alliedPointTotal)
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
		let alliedHordeCount = 0
		let alliedLargeInfantryCount = 0
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

		let getUnitTypeCounts = array => {
			alliedHeroCount = 0
			alliedWarEngineCount = 0
			alliedMonsterCount = 0
			alliedTitanCount = 0
			alliedHordeCount = 0
			alliedLargeInfantryCount = 0
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
						alliedHordeCount += 1
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
						alliedLargeInfantryCount += 1
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
			alliedPointTotal += this.calculatePointTotal(array, alliedSelectedUnitOptions)

			for (i = 0; i < units.length; i++) {
				let limitedUnits = []
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												alliedLargeInfantryCount >
												alliedHeroCount +
												alliedWarEngineCount +
												alliedMonsterCount +
												alliedTitanCount
											) 
										) || (
											alliedHeroCount < alliedHordeCount + alliedLargeInfantryCount
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
												alliedLargeInfantryCount >
												alliedHeroCount +
												alliedWarEngineCount +
												alliedMonsterCount +
												alliedTitanCount
											)
										) || (
											alliedWarEngineCount < alliedHordeCount + alliedLargeInfantryCount
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
												alliedLargeInfantryCount >
												alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
											)
										) || (
											alliedMonsterCount < alliedHordeCount + alliedLargeInfantryCount
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
												alliedLargeInfantryCount >
												alliedHeroCount + alliedWarEngineCount + alliedMonsterCount + alliedTitanCount
											)
										) || (
											alliedTitanCount < alliedHordeCount + alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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
		alliedPointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions)

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
						this.state.alliedHeroCount >= this.state.alliedLargeInfantryCount
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
						this.state.alliedWarEngineCount >= this.state.alliedLargeInfantryCount
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
						this.state.alliedMonsterCount >= this.state.alliedLargeInfantryCount
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
						this.state.alliedTitanCount >= this.state.alliedLargeInfantryCount
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

		getUnitTypeCounts(alliedListedUnits)

		this.setState({
			alliedArmy: alliedArmy,
			alliedArmySingularName: alliedArmySingularName,
			alliedListedUnits: alliedListedUnits,
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits, alliedSelectedUnitOptions),
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
			alliedHordeCount: alliedHordeCount,
			alliedLargeInfantryCount: alliedLargeInfantryCount,
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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

		let unitStrengthTotal = 0
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			unitStrengthTotal += this.state.alliedListedUnits[i].unit.unit_strength
		}
		for (i = 0; i < selectedUnitOptions.length; i++) {
			if (
				selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				selectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			if (
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedArtefacts),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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

		let unitStrengthTotal = 0
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			unitStrengthTotal += this.state.alliedListedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (
				this.state.selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}
		for (i = 0; i < alliedSelectedUnitOptions.length; i++) {
			if (
				alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}

		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedArtefacts),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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

		let unitStrengthTotal = 0
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			unitStrengthTotal += this.state.alliedListedUnits[i].unit.unit_strength
		}
		for (i = 0; i < selectedUnitOptions.length; i++) {
			if (
				selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				selectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			if (
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				this.state.alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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

		let unitStrengthTotal = 0
		for (i = 0; i < this.state.listedUnits.length; i++) {
			unitStrengthTotal += this.state.listedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.alliedListedUnits.length; i++) {
			unitStrengthTotal += this.state.alliedListedUnits[i].unit.unit_strength
		}
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (
				this.state.selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				this.state.selectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}
		for (i = 0; i < alliedSelectedUnitOptions.length; i++) {
			if (
				alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (Kingdoms of Men))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Pegasus (Wizard (League of Rhordia))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Winged Unicorn (Exemplar Redeemer)' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Forces of Nature))' ||
				alliedSelectedUnitOptions[i].unitOption.name === 'Wings (Unicorn (Order of the Green Lady))'
			) {
				unitStrengthTotal += 1
			}
		}

		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(array[i2])
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											) 
										) || (
											this.state.alliedHeroCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount +
												this.state.alliedWarEngineCount +
												this.state.alliedMonsterCount +
												this.state.alliedTitanCount
											)
										) || (
											this.state.alliedWarEngineCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedMonsterCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
												this.state.alliedLargeInfantryCount >
												this.state.alliedHeroCount + this.state.alliedWarEngineCount + this.state.alliedMonsterCount + this.state.alliedTitanCount
											)
										) || (
											this.state.alliedTitanCount < this.state.alliedHordeCount + this.state.alliedLargeInfantryCount
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
					maybeMaxedOut.length >= 1 || (
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
			pointTotal: this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, selectedArtefacts),
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
			hordeCount: 0,
			largeInfantryCount: 0,
			maximumCount: 3,
			formattedListVisible: false,
			unitOptionsVisible: false,
			artefactsVisible: false,
			alliesVisible: false,
			alliedArmy: '',
			alliedArmySingularName: '',
			alliedListedUnits: [],
			alliedSelectedUnitOptions: [],
			alliedPointTotal: 0,
			alliedUnitStrengthTotal: 0,
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
			alliedHordeCount: 0,
			alliedLargeInfantryCount: 0,
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
		let grandPointTotal
		let unitCount
		let grandUnitStrengthTotal
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
				let maybeMaxedOut = []
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
						maybeMaxedOut.push(listedUnits[i2])
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
												this.state.largeInfantryCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											) 
										) || (
											this.state.heroCount < this.state.hordeCount + this.state.largeInfantryCount
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
												this.state.largeInfantryCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.warEngineCount < this.state.hordeCount + this.state.largeInfantryCount
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
												this.state.largeInfantryCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.monsterCount < this.state.hordeCount + this.state.largeInfantryCount
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
												this.state.largeInfantryCount >
												this.state.heroCount + this.state.warEngineCount + this.state.monsterCount + this.state.titanCount
											)
										) || (
											this.state.titanCount < this.state.hordeCount + this.state.largeInfantryCount
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
						maybeMaxedOut.length >= this.state.maximumCount ||
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
						alliedHordeCount={this.state.alliedHordeCount}
						alliedLargeInfantryCount={this.state.alliedLargeInfantryCount}
						greyedOutUnits={this.state.alliedGreyedOutUnits}
					/>
			}

			grandPointTotal = this.state.pointTotal + this.state.alliedPointTotal
			unitCount = this.state.listedUnits.length + this.state.alliedListedUnits.length
			grandUnitStrengthTotal = this.state.unitStrengthTotal + this.state.alliedUnitStrengthTotal
			pointTotalDisplay =
				<div className="point-total">
					Points: <span className="bold">{grandPointTotal}</span><br />
					Unit Count: <span className="bold">{unitCount}</span><br />
					Unit Strength: <span className="bold">{grandUnitStrengthTotal}</span>
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
						unitStrengthTotal={grandUnitStrengthTotal}
						unitCount={unitCount}
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