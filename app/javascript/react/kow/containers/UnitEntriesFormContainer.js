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
		this.addToList = this.addToList.bind(this)
		this.addAlliedUnitToList = this.addAlliedUnitToList.bind(this)
		this.determineIfGreyedOut = this.determineIfGreyedOut.bind(this)
		this.removeFromList = this.removeFromList.bind(this)
		this.removeAlliedUnitFromList = this.removeAlliedUnitFromList.bind(this)
		this.selectUnitOptions = this.selectUnitOptions.bind(this)
		this.selectAlliedUnitOptions = this.selectAlliedUnitOptions.bind(this)
		this.selectArtefact = this.selectArtefact.bind(this)
		this.removeUnitOption = this.removeUnitOption.bind(this)
		this.removeAlliedUnitOption = this.removeAlliedUnitOption.bind(this)
		this.removeArtefact = this.removeArtefact.bind(this)
		this.toggleUnitOptions = this.toggleUnitOptions.bind(this)
		this.toggleArtefacts = this.toggleArtefacts.bind(this)
		this.toggleAllies = this.toggleAllies.bind(this)
		this.updateUnitBeingGivenOption = this.updateUnitBeingGivenOption.bind(this)
		this.updateAlliedUnitBeingGivenOption = this.updateAlliedUnitBeingGivenOption.bind(this)
		this.updateUnitBeingGivenArtefact = this.updateUnitBeingGivenArtefact.bind(this)
		this.showFormattedList = this.showFormattedList.bind(this)
		this.hideFormattedList = this.hideFormattedList.bind(this)
		this.clearList = this.clearList.bind(this)
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

	calculateUnlocks(listedUnitArray) {
		let is_ally = false
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			if (listedUnitArray[0].unit.army_id !== this.state.selectedArmy.value) {
				is_ally = true
			}
		}
		let unlockObject = {
			troopUnlocks: 0,
			heroUnlocks: 0,
			warEngineUnlocks: 0,
			monsterUnlocks: 0,
			unlocksFromLargeInfantry: 0,
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
				if (listedUnitArray[i].unit.unlocking_class === 2) {
					if (listedUnitArray[i].unit.unit_size === 'Horde') {
						unlockObject.troopUnlocks += 2
					}
					if (listedUnitArray[i].unit.unit_size === 'Legion') {
						unlockObject.troopUnlocks += 4
					}
					unlockObject.unlocksFromLargeInfantry += 1
				}
				if (listedUnitArray[i].unit.unlocking_class === 1) {
					unlockObject.troopUnlocks += 2
					unlockObject.unlocksFromRegiments += 1
				}
			}
			if (listedUnitArray[i].unit.unit_size === 'Troop' || listedUnitArray[i].unit.is_irregular === true) {
				unlockObject.troopUnlocks += -1
			}
			if (listedUnitArray[i].unit.unit_type.includes('Hero')) {
				if (unlockObject.heroUnlocks > 0) {
					unlockObject.heroUnlocks += -1
				} else {
					if (
						unlockObject.unlocksFromLargeInfantry > 0 && (
							(
								unitTypeCountObject.heroCount <= unitTypeCountObject.warEngineCount &&
								unitTypeCountObject.heroCount <= unitTypeCountObject.monsterCount &&
								unitTypeCountObject.heroCount <= unitTypeCountObject.titanCount
							) || (
								unitTypeCountObject.heroCount < unitTypeCountObject.largeInfantryCount
							)
						)
					) {
						unlockObject.unlocksFromLargeInfantry += -1
					} else {
						if (unlockObject.unlocksFromRegiments > 0) {
							unlockObject.unlocksFromRegiments += -1
						}
					}
				}
			}
			if (listedUnitArray[i].unit.unit_type === 'War Engine') {
				if (unlockObject.warEngineUnlocks > 0) {
					unlockObject.warEngineUnlocks  += -1
				} else {
					if (
						unlockObject.unlocksFromLargeInfantry > 0 && (
							(
								unitTypeCountObject.warEngineCount <= unitTypeCountObject.heroCount &&
								unitTypeCountObject.warEngineCount <= unitTypeCountObject.monsterCount &&
								unitTypeCountObject.warEngineCount <= unitTypeCountObject.titanCount
							) || (
								unitTypeCountObject.warEngineCount < unitTypeCountObject.largeInfantryCount
							)
						)
					) {
						unlockObject.unlocksFromLargeInfantry += -1
					} else {
						if (unlockObject.unlocksFromRegiments > 0) {
							unlockObject.unlocksFromRegiments += -1
						}
					}
				}
			}
			if (listedUnitArray[i].unit.unit_type === 'Monster') {
				if (unlockObject.monsterUnlocks > 0) {
					unlockObject.monsterUnlocks  += -1
				} else {
					if (
						unlockObject.unlocksFromLargeInfantry > 0 && (
							(
								unitTypeCountObject.monsterCount <= unitTypeCountObject.heroCount &&
								unitTypeCountObject.monsterCount <= unitTypeCountObject.warEngineCount &&
								unitTypeCountObject.monsterCount <= unitTypeCountObject.titanCount
							) || (
								unitTypeCountObject.monsterCount < unitTypeCountObject.largeInfantryCount
							)
						)
					) {
						unlockObject.unlocksFromLargeInfantry += -1
					} else {
						if (unlockObject.unlocksFromRegiments > 0) {
							unlockObject.unlocksFromRegiments += -1
						}
					}
				}
			}
			if (listedUnitArray[i].unit.unit_type === 'Titan') {
				if (unlockObject.monsterUnlocks > 0) {
					unlockObject.monsterUnlocks  += -1
				} else {
					if (
						unlockObject.unlocksFromLargeInfantry > 0 && (
							(
								unitTypeCountObject.titanCount <= unitTypeCountObject.heroCount &&
								unitTypeCountObject.titanCount <= unitTypeCountObject.warEngineCount &&
								unitTypeCountObject.titanCount <= unitTypeCountObject.monsterCount
							) || (
								unitTypeCountObject.titanCount < unitTypeCountObject.largeInfantryCount
							)
						)
					) {
						unlockObject.unlocksFromLargeInfantry += -1
					} else {
						if (unlockObject.unlocksFromRegiments > 0) {
							unlockObject.unlocksFromRegiments += -1
						}
					}
				}
			}
		}
		return unlockObject
	}

	addToList(unitToAdd) {
		let listedUnits = this.state.listedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount, unit: unitToAdd }
		listedUnits.push(unitToAddWithIndex)
		indexCount += 1
		let pointTotal = this.calculatePointTotal(listedUnits)
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnits)
		let unlockObject = this.calculateUnlocks(listedUnits)
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
			troopUnlocks: unlockObject.troopUnlocks,
			heroUnlocks: unlockObject.heroUnlocks,
			warEngineUnlocks: unlockObject.warEngineUnlocks,
			monsterUnlocks: unlockObject.monsterUnlocks,
			unlocksFromLargeInfantry: unlockObject.unlocksFromLargeInfantry,
			unlocksFromRegiments: unlockObject.unlocksFromRegiments,
			unitOptionsVisible: false,
			artefactsVisible: false,
			alliesVisible: false
		})
	}

	addAlliedUnitToList(unitToAdd, alliedArmy, alliedArmySingularName) {
		let alliedListedUnits = this.state.alliedListedUnits
		let indexCount = this.state.indexCount
		let unitToAddWithIndex = { index: indexCount + 200000, unit: unitToAdd }
		alliedListedUnits.push(unitToAddWithIndex)
		indexCount += 1
		let alliedPointTotal = this.calculatePointTotal(alliedListedUnits)
		let alliedUnitTypeCountObject = this.calculateUnitTypeCounts(alliedListedUnits)
		let alliedUnlockObject = this.calculateUnlocks(alliedListedUnits)
		let i

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
			alliedTroopUnlocks: alliedUnlockObject.troopUnlocks,
			alliedHeroUnlocks: alliedUnlockObject.heroUnlocks,
			alliedWarEngineUnlocks: alliedUnlockObject.warEngineUnlocks,
			alliedMonsterUnlocks: alliedUnlockObject.monsterUnlocks,
			alliedUnlocksFromLargeInfantry: alliedUnlockObject.unlocksFromLargeInfantry,
			alliedUnlocksFromRegiments: alliedUnlockObject.unlocksFromRegiments,
			alliedGreyedOutUnits: this.determineIfGreyedOut(alliedListedUnits, alliedArmy),
			unitOptionsVisible: false,
			artefactsVisible: false
		})
	}

	determineIfGreyedOut(listedUnitArray, alliedArmy) {
		let is_ally = false
		let alliedArmyId
		if (alliedArmy != undefined && alliedArmy != '') {
			is_ally = true
			alliedArmyId = alliedArmy.id
		}
		if (alliedArmy = '') {
			alliedArmyId = ''
		}

		let units = this.props.units
		let greyedOutUnits = []
		let locked
		let pointTotal
		let alliedPointTotal
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
		let unlockObject = this.calculateUnlocks(listedUnitArray)
		let i
		let i2

		if (listedUnitArray.length > 0 && listedUnitArray != undefined) {
			if (listedUnitArray[0].unit.army_id !== this.state.selectedArmy.value) {
				is_ally = true
			}
		}
		if (is_ally === false) {
			pointTotal = this.calculatePointTotal(listedUnitArray)
			alliedPointTotal = this.state.alliedPointTotal		
		}
		if (is_ally === true) {
			pointTotal = (this.state.pointTotal)
			alliedPointTotal = this.calculatePointTotal(listedUnitArray)
		}

		for (i = 0; i < units.length; i++) {
			let limitedHeroCount = 0
			let limitedAndLockedFromJarvisCount = 0
			let limitedDuplicateCount = 0
			let maybeMaxedOut = []
			let limitedUnits = []
			locked = false
			for (i2 = 0; i2 < listedUnitArray.length; i2++) {
				if (listedUnitArray[i2].unit.limited_n > 0 && listedUnitArray[i2].unit.unit_type.includes('Hero')) {
					limitedHeroCount += 1
				}
				if (
					units[i].limited_n > 0 &&
					units[i].unit_type.includes('Hero') &&
					listedUnitArray[i2].unit.name === 'Jarvis [1]'
				) {
					limitedAndLockedFromJarvisCount += 1
				}
				if (units[i].limited_n > 0 && listedUnitArray[i2].unit.id === units[i].id) {
					limitedDuplicateCount += 1
				}
				if (
					(units[i].unit_type.includes('Hero') && listedUnitArray[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'War Engine' && listedUnitArray[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Monster' && listedUnitArray[i2].unit.id === units[i].id) ||
					(units[i].unit_type === 'Titan' && listedUnitArray[i2].unit.id === units[i].id)
				) {
					maybeMaxedOut.push(listedUnitArray[i2])
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
				if ((units[i].unit_size === 'Troop' || units[i].is_irregular === true) && unlockObject.troopUnlocks > 0) {
					locked = false
				} else {
					if (units[i].unit_type.includes('Hero') && unlockObject.heroUnlocks > 0) {
						locked = false
					} else {
						if (units[i].unit_type.includes('Hero') && unlockObject.unlocksFromLargeInfantry > 0) {
							if (
								(
									unitTypeCountObject.heroCount +
									unitTypeCountObject.warEngineCount +
									unitTypeCountObject.monsterCount +
									unitTypeCountObject.titanCount <
									unlockObject.heroUnlocks +
									unlockObject.warEngineUnlocks +
									unlockObject.monsterUnlocks +
									unlockObject.unlocksFromLargeInfantry && (
										(
											unitTypeCountObject.heroCount <= unitTypeCountObject.warEngineCount ||
											unitTypeCountObject.heroCount <= unitTypeCountObject.monsterCount ||
											unitTypeCountObject.heroCount <= unitTypeCountObject.titanCount
										) && (
											unitTypeCountObject.largeInfantryCount >
											unitTypeCountObject.heroCount +
											unitTypeCountObject.warEngineCount +
											unitTypeCountObject.monsterCount +
											unitTypeCountObject.titanCount
										) 
									) || (
										unitTypeCountObject.heroCount <
										unitTypeCountObject.hordeCount +
										unitTypeCountObject.largeInfantryCount
									)
								)
							) {
								locked = false
							}
						}
						if (units[i].unit_type.includes('Hero') && unlockObject.unlocksFromRegiments > 0) {
							locked = false
						}
					}
					if (units[i].unit_type === 'War Engine' && unlockObject.warEngineUnlocks > 0) {
						locked = false
					} else {
						if (units[i].unit_type === 'War Engine' && unlockObject.unlocksFromLargeInfantry > 0) {
							if (
								(
									unitTypeCountObject.heroCount +
									unitTypeCountObject.warEngineCount +
									unitTypeCountObject.monsterCount +
									unitTypeCountObject.titanCount <
									unlockObject.heroUnlocks +
									unlockObject.warEngineUnlocks +
									unlockObject.monsterUnlocks +
									unlockObject.unlocksFromLargeInfantry && (										
										(
											unitTypeCountObject.warEngineCount <= unitTypeCountObject.heroCount ||
											unitTypeCountObject.warEngineCount <= unitTypeCountObject.monsterCount ||
											unitTypeCountObject.warEngineCount <= unitTypeCountObject.titanCount
										) && (
											unitTypeCountObject.largeInfantryCount >
											unitTypeCountObject.heroCount +
											unitTypeCountObject.warEngineCount +
											unitTypeCountObject.monsterCount +
											unitTypeCountObject.titanCount
										)
									) || (
										unitTypeCountObject.warEngineCount <
										unitTypeCountObject.hordeCount +
										unitTypeCountObject.largeInfantryCount
									)
								)
							) {
								locked = false
							}
						}
						if (units[i].unit_type === 'War Engine' && unlockObject.unlocksFromRegiments > 0) {
							locked = false
						}
					}
					if (units[i].unit_type === 'Monster' && unlockObject.monsterUnlocks > 0) {
						locked = false
					} else {
						if (units[i].unit_type === 'Monster' && unlockObject.unlocksFromLargeInfantry > 0) {
							if (
								(
									unitTypeCountObject.heroCount +
									unitTypeCountObject.warEngineCount +
									unitTypeCountObject.monsterCount +
									unitTypeCountObject.titanCount <
									unlockObject.heroUnlocks +
									unlockObject.warEngineUnlocks +
									unlockObject.monsterUnlocks +
									unlockObject.unlocksFromLargeInfantry && (
										(
											unitTypeCountObject.monsterCount <= unitTypeCountObject.heroCount ||
											unitTypeCountObject.monsterCount <= unitTypeCountObject.warEngineCount ||
											unitTypeCountObject.monsterCount <= unitTypeCountObject.titanCount
										) && (
											unitTypeCountObject.largeInfantryCount >
											unitTypeCountObject.heroCount +
											unitTypeCountObject.warEngineCount +
											unitTypeCountObject.monsterCount +
											unitTypeCountObject.titanCount
										)
									) || (
										unitTypeCountObject.monsterCount <
										unitTypeCountObject.hordeCount +
										unitTypeCountObject.largeInfantryCount
									)
								)
							) {
								locked = false
							}

						}
						if (units[i].unit_type === 'Monster' && unlockObject.unlocksFromRegiments > 0) {
							locked = false
						}
					}
					if (units[i].unit_type === 'Titan' && unlockObject.monsterUnlocks > 0) {
						locked = false
					} else {
						if (units[i].unit_type === 'Titan' && unlockObject.unlocksFromLargeInfantry > 0) {
							if (
								(
									unitTypeCountObject.heroCount +
									unitTypeCountObject.warEngineCount +
									unitTypeCountObject.monsterCount +
									unitTypeCountObject.titanCount <
									unlockObject.heroUnlocks +
									unlockObject.warEngineUnlocks +
									unlockObject.monsterUnlocks +
									unlockObject.unlocksFromLargeInfantry && (
										(
											unitTypeCountObject.titanCount <= unitTypeCountObject.heroCount ||
											unitTypeCountObject.titanCount <= unitTypeCountObject.warEngineCount ||
											unitTypeCountObject.titanCount <= unitTypeCountObject.monsterCount
										) && (
											unitTypeCountObject.largeInfantryCount >
											unitTypeCountObject.heroCount +
											unitTypeCountObject.warEngineCount +
											unitTypeCountObject.monsterCount +
											unitTypeCountObject.titanCount
										)
									) || (
										unitTypeCountObject.titanCount <
										unitTypeCountObject.hordeCount +
										unitTypeCountObject.largeInfantryCount
									)
								)
							) {
								locked = false
							}

						}
						if (units[i].unit_type === 'Titan' && unlockObject.unlocksFromRegiments > 0) {
							locked = false
						}
					}						
				}
			}

			if (is_ally === false) {
				if (
					(
						units[i].limited_n > 0 &&
						units[i].unit_type.includes('Hero') &&
						limitedAndLockedFromJarvisCount > 0
					) || (
						maybeMaxedOut.length >= this.state.maximumCount
					) || (
							units[i].name === 'Jarvis [1]' && (
							limitedHeroCount > 0 || (
								this.state.alliedListedUnits.length > 0 &&
								this.state.alliedArmy.alignment === 'Good'
							)
						)
					)
				) {
					locked = true
				}
			}
			if (is_ally === true) {
				if (units[i].limited_n > 0 && units[i].army_id === alliedArmyId) {
					limitedUnits.push(units[i])
				}
				if (
					limitedUnits.length > 0 ||
					maybeMaxedOut.length > 0 ||
					(units[i].army_id !== alliedArmyId) ||
					((pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points)
				) {
					locked = true
				}
			}
			if (locked === true) {
				greyedOutUnits.push(units[i])
			}
		}
		return greyedOutUnits
	}

	removeFromList(unitObject) {
		let listedUnits = this.state.listedUnits
		let selectedUnitOptions = this.state.selectedUnitOptions
		let selectedArtefacts = this.state.selectedArtefacts
		let removedUnitOptionObjects = []
		let removedArtefactObject
		let pointTotal
		let unitStrengthTotal
		let unitTypeCountObject
		let unlockObject
		let alliedUnitTypeCountObject
		let alliedUnlockObject
		let i
		let i2
		let i3

		let actuallyDeleteStuff = (unitArray, unitOptionArray, artefactArray) => {
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
			for (i4 = artefactArray.length - 1; i4 >= 0; i4--) {
				if (artefactArray[i4].index === unitObject.index) {
					removedArtefactObject = artefactArray[i4]
					artefactArray.splice(artefactArray.indexOf(artefactArray[i4]), 1)
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
		pointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedArtefacts)
		unitStrengthTotal = this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions)
		unitTypeCountObject = this.calculateUnitTypeCounts(fakeListedUnits)
		unlockObject = this.calculateUnlocks(fakeListedUnits)

		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			listedUnits = this.state.listedUnits
			selectedUnitOptions = this.state.selectedUnitOptions
			selectedArtefacts = this.state.selectedArtefacts				
		} else {
			if (unitObject.unit.unlocking_class > 0) {
				listedUnits = fakeListedUnits
				selectedUnitOptions = fakeSelectedUnitOptions
				selectedArtefacts = fakeSelectedArtefacts
				if (unlockObject.troopUnlocks < 0) {
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

		unitTypeCountObject = this.calculateUnitTypeCounts(listedUnits)
		unlockObject = this.calculateUnlocks(listedUnits)
		alliedUnitTypeCountObject = this.calculateUnitTypeCounts(alliedListedUnits)
		alliedUnlockObject = this.calculateUnlocks(alliedListedUnits)

		this.setState({
			listedUnits: listedUnits,
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: this.calculatePointTotal(listedUnits, selectedUnitOptions, selectedArtefacts),
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions),
			heroCount: unitTypeCountObject.heroCount,
			warEngineCount: unitTypeCountObject.warEngineCount,
			monsterCount: unitTypeCountObject.monsterCount,
			titanCount: unitTypeCountObject.titanCount,
			hordeCount: unitTypeCountObject.hordeCount,
			largeInfantryCount: unitTypeCountObject.largeInfantryCount,
			troopUnlocks: unlockObject.troopUnlocks,
			heroUnlocks: unlockObject.heroUnlocks,
			warEngineUnlocks: unlockObject.warEngineUnlocks,
			monsterUnlocks: unlockObject.monsterUnlocks,
			unlocksFromLargeInfantry: unlockObject.unlocksFromLargeInfantry,
			unlocksFromRegiments: unlockObject.unlocksFromRegiments,
			alliedArmy: alliedArmy,
			alliedListedUnits: alliedListedUnits,
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits, alliedSelectedUnitOptions),
			alliedHeroCount: alliedUnitTypeCountObject.heroCount,
			alliedWarEngineCount: alliedUnitTypeCountObject.warEngineCount,
			alliedMonsterCount: alliedUnitTypeCountObject.monsterCount,
			alliedTitanCount: alliedUnitTypeCountObject.titanCount,
			alliedHordeCount: alliedUnitTypeCountObject.hordeCount,
			alliedLargeInfantryCount: alliedUnitTypeCountObject.largeInfantryCount,
			alliedTroopUnlocks: alliedUnlockObject.troopUnlocks,
			alliedHeroUnlocks: alliedUnlockObject.heroUnlocks,
			alliedWarEngineUnlocks: alliedUnlockObject.warEngineUnlocks,
			alliedMonsterUnlocks: alliedUnlockObject.monsterUnlocks,
			alliedUnlocksFromRegiments: alliedUnlockObject.unlocksFromRegiments,
			alliedUnlocksFromLargeInfantry: alliedUnlockObject.unlocksFromLargeInfantry,
			alliesVisible: alliesVisible,
			indexCount: indexCount,
			alliedGreyedOutUnits: this.determineIfGreyedOut(alliedListedUnits, this.state.alliedArmy),
			maximumCount: this.calculateMaximumCount(pointTotal + alliedPointTotal)
		})
	}

	removeAlliedUnitFromList(unitObject, alliedArmy) {
		let alliedListedUnits = this.state.alliedListedUnits
		let alliedSelectedUnitOptions = this.state.alliedSelectedUnitOptions
		let alliedRemovedUnitOptionObjects = []
		let alliedPointTotal
		let alliedUnitStrengthTotal
		let alliedUnitTypeCountObject
		let alliedUnlockObject
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
					alliedRemovedUnitOptionObjects.push(unitOptionArray[i4])
					unitOptionArray.splice(unitOptionArray.indexOf(unitOptionArray[i4]), 1)
				}
			}		
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
		alliedPointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions)
		alliedUnitStrengthTotal = this.calculateUnitStrengthTotal(fakeListedUnits, fakeSelectedUnitOptions)
		alliedUnitTypeCountObject = this.calculateUnitTypeCounts(fakeListedUnits)
		alliedUnlockObject = this.calculateUnlocks(fakeListedUnits)

		if (unitObject.unit.unlocking_class > 0) {
			alliedListedUnits = fakeListedUnits
			alliedSelectedUnitOptions = fakeSelectedUnitOptions
			if (alliedUnlockObject.alliedTroopUnlocks < 0) {
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

		alliedUnitTypeCountObject = this.calculateUnitTypeCounts(alliedListedUnits)
		alliedUnlockObject = this.calculateUnlocks(alliedListedUnits)

		let alliedArmySingularName = this.state.alliedArmySingularName
		if (alliedArmy != undefined && alliedArmy != '') {
			alliedArmySingularName = alliedArmy.adjective
		}
		if (alliedArmy == undefined || alliedListedUnits.length === 0) {
			alliedArmy = ''
			alliedArmySingularName = ''
		}
		this.setState({
			alliedArmy: alliedArmy,
			alliedArmySingularName: alliedArmySingularName,
			alliedListedUnits: alliedListedUnits,
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(alliedListedUnits, alliedSelectedUnitOptions),
			alliedHeroCount: alliedUnitTypeCountObject.heroCount,
			alliedWarEngineCount: alliedUnitTypeCountObject.warEngineCount,
			alliedMonsterCount: alliedUnitTypeCountObject.monsterCount,
			alliedTitanCount: alliedUnitTypeCountObject.titanCount,
			alliedHordeCount: alliedUnitTypeCountObject.hordeCount,
			alliedLargeInfantryCount: alliedUnitTypeCountObject.largeInfantryCount,
			alliedTroopUnlocks: alliedUnlockObject.troopUnlocks,
			alliedHeroUnlocks: alliedUnlockObject.heroUnlocks,
			alliedWarEngineUnlocks: alliedUnlockObject.warEngineUnlocks,
			alliedMonsterUnlocks: alliedUnlockObject.monsterUnlocks,
			alliedUnlocksFromRegiments: alliedUnlockObject.unlocksFromRegiments,
			alliedUnlocksFromLargeInfantry: alliedUnlockObject.unlocksFromLargeInfantry,
			alliedGreyedOutUnits: this.determineIfGreyedOut(alliedListedUnits, alliedArmy)
		})
	}

	selectUnitOptions(unitObject, highlightedUnitOptions) {
		let selectedUnitOptions = []
		let selectedArtefacts = this.state.selectedArtefacts
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
		for (i = 0; i < highlightedUnitOptions.length; i++) {
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
					selectedUnitOptions.splice(selectedUnitOptions.indexOf(selectedUnitOptions[i]), 1)
				}
			}
		}
		selectedUnitOptions = selectedUnitOptions.concat(highlightedUnitOptions)

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedArtefacts),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			unitBeingGivenOption: '',
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
		})
		this.toggleUnitOptions()
	}

	selectAlliedUnitOptions(unitObject, highlightedUnitOptions) {
		let alliedSelectedUnitOptions = []
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
			}
		}		
		for (i = 0; i < alliedSelectedUnitOptions.length; i++) {
			let i3
			for (i3 = 0; i3 < highlightedUnitOptions.length; i3++) {
				if (
					highlightedUnitOptions[i3].unitOption.is_unique === true &&
					highlightedUnitOptions[i3].unitOption.display_name === alliedSelectedUnitOptions[i].unitOption.display_name
				) {
					alliedSelectedUnitOptions.splice(alliedSelectedUnitOptions.indexOf(alliedSelectedUnitOptions[i]), 1)
				}
			}
		}
		alliedSelectedUnitOptions = alliedSelectedUnitOptions.concat(highlightedUnitOptions)

		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitBeingGivenOption: '',
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
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
					}
				}
				selectedArtefacts = artefactsToKeep
			}
			if (artefactToRemoveIfSame === undefined &&	artefactToRemoveIfDifferent !== undefined			
			) {
				for (i = 0; i < selectedArtefacts.length; i++) {
					if (selectedArtefacts[i].index !== newArtefactSelection.index) {
						artefactsToKeep.push(selectedArtefacts[i])
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
					}
				}				
				selectedArtefacts = artefactsToKeep
			}
			selectedArtefacts.push(newArtefactSelection)
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
				selectedUnitOptions.splice(selectedUnitOptions.indexOf(selectedUnitOptions[i]), 1)
			}
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedArtefacts: selectedArtefacts,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedArtefacts),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			unitBeingGivenArtefact: '',
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
		})
		this.toggleArtefacts()
	}

	removeUnitOption(unitOptionObject) {
		let selectedUnitOptions = []
		let pointTotal
		let i
		for (i = 0; i < this.state.selectedUnitOptions.length; i++) {
			if (
				this.state.selectedUnitOptions[i].index !== unitOptionObject.index ||
				this.state.selectedUnitOptions[i].unitOption.id !== unitOptionObject.unitOption.id
			) {
				selectedUnitOptions.push(this.state.selectedUnitOptions[i])
			}
		}

		pointTotal = this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions)
		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			selectedUnitOptions = this.state.selectedUnitOptions
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
		})
	}

	removeAlliedUnitOption(unitOptionObject) {
		let alliedSelectedUnitOptions = []
		let i
		for (i = 0; i < this.state.alliedSelectedUnitOptions.length; i++) {
			if (
				this.state.alliedSelectedUnitOptions[i].index !== unitOptionObject.index ||
				this.state.alliedSelectedUnitOptions[i].unitOption.id !== unitOptionObject.unitOption.id
			) {
				alliedSelectedUnitOptions.push(this.state.alliedSelectedUnitOptions[i])
			}
		}
		
		this.setState({
			alliedSelectedUnitOptions: alliedSelectedUnitOptions,
			alliedPointTotal: this.calculatePointTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedUnitStrengthTotal: this.calculateUnitStrengthTotal(this.state.alliedListedUnits, alliedSelectedUnitOptions),
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
		})
	}

	removeArtefact(artefactObject) {
		let selectedArtefacts = []
		let pointTotal
		let i
		for (i = 0; i < this.state.selectedArtefacts.length; i++) {
			if (this.state.selectedArtefacts[i].index !== artefactObject.index) {
				selectedArtefacts.push(this.state.selectedArtefacts[i])
			}
		}

		pointTotal = this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, selectedArtefacts)
		if ((pointTotal + this.state.alliedPointTotal) / 4 < this.state.alliedPointTotal) {
			selectedArtefacts = this.state.selectedArtefacts
		}

		this.setState({
			selectedArtefacts: selectedArtefacts,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, selectedArtefacts),
			alliedGreyedOutUnits: this.determineIfGreyedOut(this.state.alliedListedUnits, this.state.alliedArmy)
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

			let units = this.props.units
			let unitsInArmyTop = []
			let unitsInArmyBottom = []
			for (i = 0; i < units.length; i++) {	
				if (units[i].army_id === selectedArmy.value) {
					if (units[i].unlocking_class > 0) {
						unitsInArmyTop.push(units[i])
					} else {
						unitsInArmyBottom.push(units[i])
					}
				}
			}
			let greyedOutUnits = this.determineIfGreyedOut(this.state.listedUnits, '')

			let alliesTitle
			if (this.state.alliesVisible === false) {
				unitEntryButtonDisplay = unitsInArmyTop.map(unit => {
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
				unitEntryButtonDisplayUnlocked = unitsInArmyBottom.map(unit => {
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
						calculateUnitTypeCounts={this.calculateUnitTypeCounts}
						determineIfGreyedOut={this.determineIfGreyedOut}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
								alliedArmy={this.state.alliedArmy}
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
		let alliedPointPercentage
		if (this.state.alliedListedUnits.length > 0) {
			alliedPointPercentage = ((this.state.alliedPointTotal / (this.state.pointTotal + this.state.alliedPointTotal)) * 100).toFixed(1)
		}
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
							{this.state.alliedArmySingularName} Allies ({alliedPointPercentage}%):
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
					<form className="paypal-form user-select-none" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
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
						alliedPointPercentage={alliedPointPercentage}
						hideFormattedList={this.hideFormattedList}
					/>
				</Modal>
			</div>
		)
	}	
}

export default UnitEntriesFormContainer