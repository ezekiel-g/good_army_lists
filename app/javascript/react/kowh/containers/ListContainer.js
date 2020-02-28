import React, { Component } from 'react'
import Select from 'react-select'
import Modal from 'react-modal'
// import UnitEntryButton from '../components/UnitEntryButton'
// import UnitOptionIcon from '../components/UnitOptionIcon'
// import VeteranAbilityIcon from '../components/VeteranAbilityIcon'
// import UnitEntryNameTile from '../components/UnitEntryNameTile'
// import UnitOptionSelectionTile from '../components/UnitOptionSelectionTile'
import FormattedList from '../components/FormattedList'
// import VeteranAbilitySelectionTile from '../components/VeteranAbilitySelectionTile'
// import whiteSquare from '../../../../assets/images/whiteSquare.png'
import paypal from '../../../../assets/images/paypal.gif'

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
		this.addUnlocks = this.addUnlocks.bind(this)
		this.subtractUnlocks = this.subtractUnlocks.bind(this)
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
		if (veteranAbilityArray == undefined) {
			veteranAbilityArray = this.state.selectedVeteranAbilities
		}
		for (i = 0; i < veteranAbilityArray.length; i++) {
			pointTotal += veteranAbilityArray[i].veteranAbility.points
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

	addUnlocks(listedUnitArray) {
		let unitTypeCountObject = this.calculateUnitTypeCounts(listedUnitArray)
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
					unlockObject.unlocksFromLargeInfantry += 2
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

		let largeInfantryToHero = unlockObject.unlocksFromLargeInfantry / 2
		let largeInfantryToWarEngine = unlockObject.unlocksFromLargeInfantry / 2
		let largeInfantryToMonster = unlockObject.unlocksFromLargeInfantry / 2
		let largeInfantryToTitan = unlockObject.unlocksFromLargeInfantry / 2

		let regimentToHero = unitTypeCountObject.regimentCount
		let regimentToWarEngine = unitTypeCountObject.regimentCount
		let regimentToMonster = unitTypeCountObject.regimentCount
		let regimentToTitan = unitTypeCountObject.regimentCount
		
		let hordeToHero = unitTypeCountObject.hordeCount
		let hordeToWarEngine = unitTypeCountObject.hordeCount
		let hordeToMonster = unitTypeCountObject.hordeCount
		let hordeToTitan = unitTypeCountObject.hordeCount

		let i
		for (i = 0; i < unitTypeCountObject.heroCount; i++) {
			if (hordeToHero > 0) {
				hordeToHero--
			}
			else if (largeInfantryToHero > 0 && unlockObject.unlocksFromLargeInfantry > 0) {
				largeInfantryToHero--
				unlockObject.unlocksFromLargeInfantry--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
				regimentToTitan--
			}
		}

		for (i = 0; i < unitTypeCountObject.warEngineCount; i++) {
			if (hordeToWarEngine > 0) {
				hordeToWarEngine--
			}
			else if (largeInfantryToWarEngine > 0 && unlockObject.unlocksFromLargeInfantry > 0) {
				largeInfantryToWarEngine--
				unlockObject.unlocksFromLargeInfantry--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
				regimentToTitan--
			}
		}

		for (i = 0; i < unitTypeCountObject.monsterCount; i++) {
			if (hordeToMonster > 0) {
				hordeToMonster--
				hordeToTitan--
			}
			else if (largeInfantryToMonster > 0 && unlockObject.unlocksFromLargeInfantry > 0) {
				largeInfantryToMonster--
				unlockObject.unlocksFromLargeInfantry--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
				regimentToTitan--
			}
		}

		for (i = 0; i < unitTypeCountObject.titanCount; i++) {
			if (hordeToTitan > 0) {
				hordeToMonster--
				hordeToTitan--
			}
			else if (largeInfantryToTitan > 0 && unlockObject.unlocksFromLargeInfantry > 0) {
				largeInfantryToTitan--
				unlockObject.unlocksFromLargeInfantry--
			}
			else {
				regimentToHero--
				regimentToWarEngine--
				regimentToMonster--
				regimentToTitan--
			}
		}
		
		let heroTotals = [regimentToHero, hordeToHero]
		let warEngineTotals = [regimentToWarEngine, hordeToWarEngine]
		let monsterTotals = [regimentToMonster, hordeToMonster]
		let titanTotals = [regimentToTitan, hordeToTitan]

		if (unlockObject.unlocksFromLargeInfantry > 0) {
			heroTotals.push(largeInfantryToHero)
			warEngineTotals.push(largeInfantryToWarEngine)
			monsterTotals.push(largeInfantryToMonster)
			titanTotals.push(largeInfantryToTitan)
		}

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
		this.setState({
			listedUnits: listedUnits,
			indexCount: indexCount,
			pointTotal: this.calculatePointTotal(listedUnits),
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits),
			unitTypeCountObject: this.calculateUnitTypeCounts(listedUnits),
			unlockObject: this.subtractUnlocks(listedUnits),
			maximumCount: this.calculateMaximumCount(pointTotal),
			unitOptionsVisible: false,
			veteranAbilitiesVisible: false,
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
			};
			
			// Just to make typing faster...
			let utc = unitTypeCountObject;
			let uo = unlockObject;

			let liHordes = uo.unlocksFromLargeInfantry / 2;
			let liu = uo.unlocksFromLargeInfantry;
			let lih = liHordes;
			let liw = liHordes;
			let lim = liHordes;
			let lit = liHordes;

			let regh = utc.regimentCount;
			let regw = utc.regimentCount;
			let regm = utc.regimentCount;
			let regt = utc.regimentCount;
			
			// horde count does NOT include large/monstrous inf/cav
			let rHordes = utc.hordeCount;
			let hh = rHordes;
			let hw = rHordes;
			let hm = rHordes;
			let ht = rHordes;

			for(let i = 0; i < utc.heroCount; i++) {
				if(lih > 0 && liu > 0) {
					lih--;
					liu--;
				}
				else if(regh > 0) {
					regh--;
					regw--;
					regm--;
					regt--;
				}
				else {
					hh--;
				}
			}

			for(let i = 0; i < utc.warEngineCount; i++) {
				if(liw > 0 && liu > 0) {
					liw--;
					liu--;
				}
				else if(regw > 0) {
					regh--;
					regw--;
					regm--;
					regt--;
				}
				else {
					hw--;
				}
			}

			for(let i = 0; i < utc.monsterCount; i++) {
				if(lim > 0 && liu > 0) {
					lim--;
					liu--;
				}
				else if(regm > 0) {
					regh--;
					regw--;
					regm--;
					regt--;
				}
				else {
					hm--;
					ht--;
				}
			}

			for(let i = 0; i < utc.titanCount; i++) {
				if(lit > 0 && liu > 0) {
					lit--;
					liu--;
				}
				else if(regt > 0) {
					regh--;
					regw--;
					regm--;
					regt--;
				}
				else {
					hm--;
					ht--;
				}
			}
			
			canOrCannotAdd.hero = ((lih > 0 && liu > 0) || regh > 0 || hh > 0);
			canOrCannotAdd.warEngine = ((liw > 0 && liu > 0) || regw > 0 || hw > 0);
			canOrCannotAdd.titan = ((lit > 0 && liu > 0) || regt > 0 || ht > 0);
			canOrCannotAdd.monster = ((lim > 0 && liu > 0) || regm > 0 || hm > 0);
			canOrCannotAdd.troop = (utc.troopCount < uo.troopUnlocks);
			
			return canOrCannotAdd;
		}

		for (i = 0; i < units.length; i++) {
			let limitedHeroCount = 0
			let limitedDuplicateCount = 0
			let maybeMaxedOut = []
			let limitedUnits = []
			locked = false
			for (i2 = 0; i2 < listedUnitArray.length; i2++) {
				if (listedUnitArray[i2].unit.limited_n > 0 && listedUnitArray[i2].unit.unit_type.includes('Hero')) {
					limitedHeroCount += 1
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

			if (units[i].unlocking_class === 0) {
				locked = true
				if (
					(units[i].unit_size === 'Troop' || units[i].is_irregular === true) &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).troop === true
				) {
					locked = false
				}
				if (
					units[i].unit_type.includes('Hero') &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).hero === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'War Engine' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).warEngine === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'Monster' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).monster === true
				) {
					locked = false
				}
				if (
					units[i].unit_type === 'Titan' &&
					determineIfCanAdd(unitTypeCountObject, unlockObject).titan === true
				) {
					locked = false
				}
				if (
					(
						units[i].unit_type === 'Large Infantry' ||
						units[i].unit_type === 'Large Cavalry' ||
						units[i].unit_type === 'Monstrous Infantry'
					) && (
						units[i].unit_size === 'Regiment'
					) && (
						units[i].is_irregular === false
					)
				) {
					locked = false
				}
			}
			if (
				maybeMaxedOut.length >= this.state.maximumCount || 
				limitedDuplicateCount > 0
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
		let selectedVeteranAbilities = this.state.selectedVeteranAbilities
		let removedUnitOptionObjects = []
		let removedVeteranAbilityObject
		let oldPointTotal
		let pointTotal
		let unitStrengthTotal
		let unitTypeCountObject
		let unlockObject
		let i
		let i2
		let i3

		let actuallyDeleteStuff = (unitArray, unitOptionArray, veteranAbilityArray) => {
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
			for (i4 = veteranAbilityArray.length - 1; i4 >= 0; i4--) {
				if (veteranAbilityArray[i4].index === unitObject.index) {
					removedVeteranAbilityObject = veteranAbilityArray[i4]
					veteranAbilityArray.splice(veteranAbilityArray.indexOf(veteranAbilityArray[i4]), 1)
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
		let fakeSelectedVeteranAbilities = []
		for (i = 0; i < selectedVeteranAbilities.length; i++) {
			fakeSelectedVeteranAbilities.push(selectedVeteranAbilities[i])
		}

		actuallyDeleteStuff(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedVeteranAbilities)
		pointTotal = this.calculatePointTotal(fakeListedUnits, fakeSelectedUnitOptions, fakeSelectedVeteranAbilities)
		unitStrengthTotal = this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions)
		unitTypeCountObject = this.calculateUnitTypeCounts(fakeListedUnits)
		unlockObject = this.subtractUnlocks(fakeListedUnits)

		if (unitObject.unit.unlocking_class > 0) {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
			selectedVeteranAbilities = fakeSelectedVeteranAbilities
			if (unlockObject.troopUnlocks < 0) {
				listedUnits = this.state.listedUnits
				selectedUnitOptions = this.state.selectedUnitOptions
				selectedVeteranAbilities = this.state.selectedVeteranAbilities
			}
			if (this.state.unlockObject.heroUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromLargeInfantry <= 0) {
					if (this.state.unlockObject.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedVeteranAbilities = this.state.selectedVeteranAbilities						
					}
				}
			}
			if (this.state.unlockObject.warEngineUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromLargeInfantry <= 0) {
					if (this.state.unlockObject.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedVeteranAbilities = this.state.selectedVeteranAbilities						
					}
				}
			}
			if (this.state.unlockObject.monsterUnlocks <= 0) {
				if (this.state.unlockObject.unlocksFromLargeInfantry <= 0) {
					if (this.state.unlockObject.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedVeteranAbilities = this.state.selectedVeteranAbilities						
					}
				}
				if (this.state.unlockObject.unlocksFromLargeInfantry <= 0) {
					if (this.state.unlockObject.unlocksFromRegiments <= 0) {
						listedUnits = this.state.listedUnits
						selectedUnitOptions = this.state.selectedUnitOptions
						selectedVeteranAbilities = this.state.selectedVeteranAbilities						
					}
				}
			}		
		} else {
			listedUnits = fakeListedUnits
			selectedUnitOptions = fakeSelectedUnitOptions
			selectedVeteranAbilities = fakeSelectedVeteranAbilities
		}

		oldPointTotal = this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, this.state.selectedVeteranAbilities)
		pointTotal = this.calculatePointTotal(listedUnits, selectedUnitOptions, selectedVeteranAbilities)
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

		this.setState({
			listedUnits: listedUnits,
			selectedUnitOptions: selectedUnitOptions,
			selectedVeteranAbilities: selectedVeteranAbilities,
			pointTotal: this.calculatePointTotal(listedUnits, selectedUnitOptions, selectedVeteranAbilities),
			unitStrengthTotal: this.calculateUnitStrengthTotal(listedUnits, selectedUnitOptions),
			unitTypeCountObject: this.calculateUnitTypeCounts(listedUnits),
			unlockObject: this.subtractUnlocks(listedUnits),
			indexCount: indexCount,
			maximumCount: this.calculateMaximumCount(pointTotal)
		})
	}

	selectUnitOptions(unitObject, highlightedUnitOptions) {
		let selectedUnitOptions = []
		let selectedVeteranAbilities = this.state.selectedVeteranAbilities
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
			selectedVeteranAbilities: selectedVeteranAbilities,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedVeteranAbilities),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			unitBeingGivenOption: '',
		})
		this.toggleUnitOptions()
	}

	selectVeteranAbility(unitObject, veteranAbility) {
		let selectedVeteranAbilities = this.state.selectedVeteranAbilities
		let selectedUnitOptions = this.state.selectedUnitOptions
		let newVeteranAbilitySelection = { index: unitObject.index, veteranAbility: veteranAbility }
		let veteranAbilityToRemoveIfSame
		let veteranAbilityToRemoveIfDifferent
		let veteranAbilitiesToKeep = []
		let i
		for (i = 0; i < selectedVeteranAbilities.length; i++) {
			if (
				selectedVeteranAbilities[i].veteranAbility.id === newVeteranAbilitySelection.veteranAbility.id ||
				selectedVeteranAbilities[i].veteran_ability.display_name === newVeteranAbilitySelection.veteran_ability.display_name
			) {
				veteranAbilityToRemoveIfSame = selectedVeteranAbilities[i]
			}
			if (selectedVeteranAbilities[i].index === newVeteranAbilitySelection.index) {
				veteranAbilityToRemoveIfDifferent = selectedVeteranAbilities[i]
			}			
		}
		if (
			veteranAbilityToRemoveIfSame !== undefined &&
			veteranAbilityToRemoveIfDifferent !== undefined &&
			veteranAbilityToRemoveIfSame.veteranAbility.id === veteranAbilityToRemoveIfDifferent.veteranAbility.id
		) {
			selectedVeteranAbilities = selectedVeteranAbilities
		} else {
			if (veteranAbilityToRemoveIfSame === undefined && veteranAbilityToRemoveIfDifferent === undefined				
			) {
				selectedVeteranAbilities = selectedVeteranAbilities
			}
			if (veteranAbilityToRemoveIfSame !== undefined && veteranAbilityToRemoveIfDifferent === undefined) {
				for (i = 0; i < selectedVeteranAbilities.length; i++) {
					if (
						selectedVeteranAbilities[i].veteranAbility.id !== newVeteranAbilitySelection.veteranAbility.id &&
						selectedVeteranAbilities[i].veteran_ability.display_name !== newVeteranAbilitySelection.veteran_ability.display_name
					) {
						veteranAbilitiesToKeep.push(selectedVeteranAbilities[i])
					}
				}
				selectedVeteranAbilities = veteranAbilitiesToKeep
			}
			if (veteranAbilityToRemoveIfSame === undefined && veteranAbilityToRemoveIfDifferent !== undefined			
			) {
				for (i = 0; i < selectedVeteranAbilities.length; i++) {
					if (selectedVeteranAbilities[i].index !== newVeteranAbilitySelection.index) {
						veteranAbilitiesToKeep.push(selectedVeteranAbilities[i])
					}
				}
				selectedVeteranAbilities = veteranAbilitiesToKeep
			}
			if (veteranAbilityToRemoveIfSame !== undefined && veteranAbilityToRemoveIfDifferent !== undefined	
			) {
				for (i = 0; i < selectedVeteranAbilities.length; i++) {
					if (
						selectedVeteranAbilities[i].index !== newVeteranAbilitySelection.index &&
						selectedVeteranAbilities[i].veteranAbility.id !== newVeteranAbilitySelection.veteranAbility.id
					) {
						veteranAbilitiesToKeep.push(selectedVeteranAbilities[i])
					}
				}				
				selectedVeteranAbilities = veteranAbilitiesToKeep
			}
			selectedVeteranAbilities.push(newVeteranAbilitySelection)
		}

		this.setState({
			selectedUnitOptions: selectedUnitOptions,
			selectedVeteranAbilities: selectedVeteranAbilities,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, selectedUnitOptions, selectedVeteranAbilities),
			unitStrengthTotal: this.calculateUnitStrengthTotal(this.state.listedUnits, selectedUnitOptions),
			unitBeingGivenVeteranAbility: ''
		})
		this.toggleVeteranAbilities()
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

	removeVeteranAbility(veteranAbilityObject) {
		let selectedVeteranAbilities = []
		let i
		for (i = 0; i < this.state.selectedVeteranAbilities.length; i++) {
			if (this.state.selectedVeteranAbilities[i].index !== veteranAbilityObject.index) {
				selectedVeteranAbilities.push(this.state.selectedVeteranAbilities[i])
			}
		}

		this.setState({
			selectedVeteranAbilities: selectedVeteranAbilities,
			pointTotal: this.calculatePointTotal(this.state.listedUnits, this.state.selectedUnitOptions, selectedVeteranAbilities)		})
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
		let appElement = document.getElementById('kowh')
		let armyOptions = [
			{ label: 'Master List', value: 'Master List' }
		]
		let selectedArmy = this.state.selectedArmy
		let i
		let hidden
		if (selectedArmy === '') {
			hidden = 'hidden'
		}
		if (selectedArmy === 'Master List') {
			hidden = ''
		}
		let allUnits = this.props.units.sort((a, b) => {
			return (b.points - a.points)
		})
		let unitOptionSelectionTile
		let veteranAbilitySelectionTile
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
			idsOfUnitsThatCanHaveOptions.push(this.props.unitOptions[i].unit_id)
		}
		let listedUnitsThatCanHaveOptions = []
		for (i = 0; i < this.state.listedUnits.length; i++) {
			if (idsOfUnitsThatCanHaveOptions.includes(this.state.listedUnits[i].unit.id)) {
				listedUnitsThatCanHaveOptions.push(this.state.listedUnits[i])
			}
		}
		let listedUnitsThatCanHaveVeteranAbilities = []
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
				listedUnitsThatCanHaveVeteranAbilities.push(this.state.listedUnits[i])
			}
		}

		let listedUnitTileDisplayTop
		let listedUnitTileDisplaySecondQuarter
		let listedUnitTileDisplayThirdQuarter
		let listedUnitTileDisplayBottom
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
		if (this.state.veteranAbilitiesVisible) {
			veteranAbilitySelectionTile = 
				<div className="veteran-ability-selection-tile">
					<VeteranAbilitySelectionTile
						unitObject={this.state.unitBeingGivenVeteranAbility}
						selectedVeteranAbilities={this.state.selectedVeteranAbilities}
						selectVeteranAbility={this.selectVeteranAbility}
						toggleVeteranAbilities={this.toggleVeteranAbilities}
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
				<div className="unit-entry-button-title-bar-kowh">
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
			let greyedOutUnits = this.determineIfGreyedOut(this.state.listedUnits)

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
								<VeteranAbilityIcon
									key={unitObject.index + 20000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveVeteranAbilities={listedUnitsThatCanHaveVeteranAbilities}
									updateUnitBeingGivenVeteranAbility={this.updateUnitBeingGivenVeteranAbility}
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
								selectedVeteranAbilities={this.state.selectedVeteranAbilities}
								removeUnitOption={this.removeUnitOption}
								removeVeteranAbility={this.removeVeteranAbility}
								removeUnitFromList={this.removeUnitFromList}
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
								<VeteranAbilityIcon
									key={unitObject.index + 20000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveVeteranAbilities={listedUnitsThatCanHaveVeteranAbilities}
									updateUnitBeingGivenVeteranAbility={this.updateUnitBeingGivenVeteranAbility}
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
								selectedVeteranAbilities={this.state.selectedVeteranAbilities}
								removeUnitOption={this.removeUnitOption}
								removeVeteranAbility={this.removeVeteranAbility}
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
								<VeteranAbilityIcon
									key={unitObject.index + 20000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveVeteranAbilities={listedUnitsThatCanHaveVeteranAbilities}
									updateUnitBeingGivenVeteranAbility={this.updateUnitBeingGivenVeteranAbility}
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
								selectedVeteranAbilities={this.state.selectedVeteranAbilities}
								removeUnitOption={this.removeUnitOption}
								removeVeteranAbility={this.removeVeteranAbility}
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
								<VeteranAbilityIcon
									key={unitObject.index + 20000}
									id={unitObject.unit.id}
									unitObject={unitObject}
									listedUnitsThatCanHaveVeteranAbilities={listedUnitsThatCanHaveVeteranAbilities}
									updateUnitBeingGivenVeteranAbility={this.updateUnitBeingGivenVeteranAbility}
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
								selectedVeteranAbilities={this.state.selectedVeteranAbilities}
								removeUnitOption={this.removeUnitOption}
								removeVeteranAbility={this.removeVeteranAbility}
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
		}

		let listOutputSide
		if (unitOptionSelectionTile !== undefined && veteranAbilitySelectionTile === undefined) {
			listOutputSide = unitOptionSelectionTile
		}
		if (unitOptionSelectionTile === undefined && veteranAbilitySelectionTile !== undefined) {
			listOutputSide = veteranAbilitySelectionTile
		}
 		if (unitOptionSelectionTile === undefined && veteranAbilitySelectionTile === undefined) {
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

		let display =
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
					<div className="main-title-box-kowh">
						<h2 className="main-title">Make a Good Kings of War Historical List</h2>
					</div>
					<div className="copyright-notice">Kings of War Historical is copyrighted by Mantic Entertainment</div>
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
						selectedVeteranAbilities={this.state.selectedVeteranAbilities}
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