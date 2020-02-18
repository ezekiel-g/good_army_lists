import React, { Component } from 'react'
import AlliedUnitEntryButton from './AlliedUnitEntryButton'

class AlliesButtons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			alliedUnitChoicesVisible: false,
			selectedAlliedArmy: '',
			selectedAlliedArmySingularName: '',
			unitsInAlliedArmyTop: [],
			unitsInAlliedArmyBottom: [],
			greyedOutUnits: []
		}
		this.showAlliedUnitChoices = this.showAlliedUnitChoices.bind(this)
		this.hideAlliedUnitChoices = this.hideAlliedUnitChoices.bind(this)
	}

	showAlliedUnitChoices(army, units, alliedListedUnits) {
		let alliedFilteredUnits = []
		let alliedFilteredUnitsUnlocked = []
		let alliedGreyedOutUnits = []
		let alliedHeroesOnList = []
		let alliedWarEnginesOnList = []
		let alliedMonstersOnList = []
		let alliedLocked
		let pointTotal = this.props.pointTotal
		let alliedPointTotal = this.props.alliedPointTotal
		let alliedTroopUnlocks = this.props.alliedTroopUnlocks
		let alliedHeroUnlocks = this.props.alliedHeroUnlocks
		let alliedWarEngineUnlocks = this.props.alliedWarEngineUnlocks
		let alliedMonsterUnlocks = this.props.alliedMonsterUnlocks
		let alliedUnlocksFromRegiments = this.props.alliedUnlocksFromRegiments
		let alliedUnlocksFromLargeInfantry = this.props.alliedUnlocksFromLargeInfantry
		let alliedHeroCount = this.props.alliedHeroCount
		let alliedWarEngineCount = this.props.alliedWarEngineCount
		let alliedMonsterCount = this.props.alliedMonsterCount
		let alliedTitanCount = this.props.alliedTitanCount
		let alliedInfantryHordeCount = this.props.alliedInfantryHordeCount
		let alliedLargeInfantryHordeCount = this.props.alliedLargeInfantryHordeCount
		let selectedAlliedArmySingularName
		let i
		let i2
		if (army.name === 'Basileans') {
			selectedAlliedArmySingularName = 'Basilean'
		}
		if (army.name === 'Dwarfs') {
			selectedAlliedArmySingularName = 'Dwarf'
		}
		if (army.name === 'Elves') {	
			selectedAlliedArmySingularName = 'Elf'
		}
		if (army.name === 'Northern Alliance') {
			selectedAlliedArmySingularName = 'Northern Alliance'
		}
		if (army.name === 'Forces of Nature') {
			selectedAlliedArmySingularName = 'Forces of Nature'
		}
		if (army.name === 'Ogres') {
			selectedAlliedArmySingularName = 'Ogre'
		}
		if (army.name === 'Trident Realm of Neritica') {	
			selectedAlliedArmySingularName = 'Trident Realm of Neritica'
		}
		if (army.name === 'Abyssal Dwarfs') {
			selectedAlliedArmySingularName = 'Abyssal Dwarf'
		}
		if (army.name === 'Empire of Dust') {
			selectedAlliedArmySingularName = 'Empire of Dust'
		}
		if (army.name === 'Forces of the Abyss') {
			selectedAlliedArmySingularName = 'Forces of the Abyss'
		}
		if (army.name === 'Goblins') {
			selectedAlliedArmySingularName = 'Goblin'
		}
		if (army.name === 'Nightstalkers') {
			selectedAlliedArmySingularName = 'Nightstalker'
		}
		if (army.name === 'Orcs') {
			selectedAlliedArmySingularName = 'Orc'
		}
		if (army.name === 'Undead') {
			selectedAlliedArmySingularName = 'Undead'
		}		
		if (army.name === 'Kingdoms of Men') {
			selectedAlliedArmySingularName = "Kingdoms of Men"
		}
		if (army.name === 'League of Rhordia') {
			selectedAlliedArmySingularName = 'League of Rhordia'
		}
		if (army.name === 'Sylvan Kin') {
			selectedAlliedArmySingularName = 'Sylvan Kin'
		}
		if (army.name === 'Twilight Kin') {
			selectedAlliedArmySingularName = 'Twilight Kin'
		}
		if (army.name === 'Free Dwarfs') {
			selectedAlliedArmySingularName = 'Free Dwarf'
		}
		if (army.name === 'Salamanders') {
			selectedAlliedArmySingularName = 'Salamander'
		}
		if (army.name === 'Order of the Brothermark') {
			selectedAlliedArmySingularName = 'Order of the Brothermark'
		}
		if (army.name === 'Order of the Green Lady') {
			selectedAlliedArmySingularName = 'Order of the Green Lady'
		}
		if (army.name === 'Ratkin') {
			selectedAlliedArmySingularName = 'Ratkin'
		}
		if (army.name === 'Ratkin Slaves') {
			selectedAlliedArmySingularName = 'Ratkin Slave'
		}
		if (army.name === 'The Herd') {
			selectedAlliedArmySingularName = 'Herd'
		}
		if (army.name === 'Varangur') {
			selectedAlliedArmySingularName = 'Varangur'
		}
		if (army.name === 'Crap') {
			selectedAlliedArmySingularName = 'Crap'
		}
		if (army.name === 'The Capgun Crew') {
			selectedAlliedArmySingularName = 'Capgun Crew'
		}
		if (army.name === 'League of Good') {
			selectedAlliedArmySingularName = 'League of Good'
		}

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
			if (units[i].army_id === army.id) {
				if (
					alliedLocked === true ||
					(pointTotal + alliedPointTotal + units[i].points) / 4 < alliedPointTotal + units[i].points ||
					limitedUnits.length >= 1 ||
					maybeTooMany.length >= 1
				) {
					alliedGreyedOutUnits.push(units[i])
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
					alliedFilteredUnits.push(units[i])
				} else {
					if (
						(
							units[i].limited_n < 1 ||
							units[i].limited_n === undefined ||
							units[i].limited_n === null
						) && (
							units[i].is_irregular === false
						)
					) {
						alliedFilteredUnitsUnlocked.push(units[i])
					}
				}
			}
		}

		this.setState({
			alliedUnitChoicesVisible: true,
			selectedAlliedArmy: army,
			selectedAlliedArmySingularName: selectedAlliedArmySingularName,
			unitsInAlliedArmyTop: alliedFilteredUnits,
			unitsInAlliedArmyBottom: alliedFilteredUnitsUnlocked,
			greyedOutUnits: alliedGreyedOutUnits
		})
	}

	hideAlliedUnitChoices() {
		this.setState({
			alliedUnitChoicesVisible: false,
			selectedAlliedArmy: '',
			selectedAlliedArmySingularName: '',
			unitsInAlliedArmyTop: '',
			unitsInAlliedArmyBottom: '',
			greyedOutUnits: ''
		})
	}

	render() {
		let mainArmyAlignment = ''
		let jarvisCount = 0
		let allyChoices = []
		let i3
		let i4

		for (i3 = 0; i3 < this.props.listedUnits.length; i3++) {
			if (this.props.listedUnits[i3].unit.name === 'Jarvis [1]') {
				jarvisCount += 1
			}
		}

		if (jarvisCount > 0) {
			mainArmyAlignment = 'Good'
		} else {
			if (
				this.props.selectedArmy.label === 'Basileans' ||
				this.props.selectedArmy.label === 'Dwarfs' ||
				this.props.selectedArmy.label === 'Elves' ||
				this.props.selectedArmy.label === 'Northern Alliance' ||
				this.props.selectedArmy.label === 'Free Dwarfs' ||
				this.props.selectedArmy.label === 'Order of the Brothermark' ||
				this.props.selectedArmy.label === 'Salamanders' ||
				this.props.selectedArmy.label === 'Crap' ||
				this.props.selectedArmy.label === 'The Capgun Crew'
			) {
				mainArmyAlignment = 'Good'
			}
			if (
				this.props.selectedArmy.label === 'Forces of Nature' ||
				this.props.selectedArmy.label === 'Ogres' ||
				this.props.selectedArmy.label === 'Trident Realm of Neritica' ||
				this.props.selectedArmy.label === 'The Herd' ||		
				this.props.selectedArmy.label === 'Kingdoms of Men' ||
				this.props.selectedArmy.label === 'League of Rhordia' ||
				this.props.selectedArmy.label === 'Order of the Green Lady' ||
				this.props.selectedArmy.label === 'Sylvan Kin' ||
				this.props.selectedArmy.label === 'League of Good'
			) {
				mainArmyAlignment = 'Neutral'
			}
			if (
				this.props.selectedArmy.label === 'Abyssal Dwarfs' ||
				this.props.selectedArmy.label === 'Empire of Dust' ||
				this.props.selectedArmy.label === 'Forces of the Abyss' ||
				this.props.selectedArmy.label === 'Goblins' ||
				this.props.selectedArmy.label === 'Nightstalkers' ||
				this.props.selectedArmy.label === 'Orcs' ||
				this.props.selectedArmy.label === 'Undead' ||
				this.props.selectedArmy.label === 'Twilight Kin' ||
				this.props.selectedArmy.label === 'Ratkin' ||
				this.props.selectedArmy.label === 'Ratkin Slaves' ||
				this.props.selectedArmy.label === 'Varangur'
			) {
				mainArmyAlignment = 'Evil'
			}
		}

		let masterListArmies = []
		for (i3 = 0; i3 < this.props.armies.length; i3++) {
			if (
				this.props.armies[i3].name !== 'Order of the Brothermark' &&
				this.props.armies[i3].name !== 'Order of the Green Lady' &&
				this.props.armies[i3].name !== 'Free Dwarfs' &&
				this.props.armies[i3].name !== 'Sylvan Kin' &&
				this.props.armies[i3].name !== 'The Herd' &&
				this.props.armies[i3].name !== 'League of Rhordia' &&
				this.props.armies[i3].name !== 'Ratkin Slaves' &&
				this.props.armies[i3].name !== 'Twilight Kin' &&
				this.props.armies[i3].name !== 'Varangur'
			) {
				masterListArmies.push(this.props.armies[i3])
			}
		}

		if (mainArmyAlignment === 'Good') {
			for (i3 = 0; i3 < masterListArmies.length; i3++) {
				if (
					masterListArmies[i3].name !== this.props.selectedArmy.label && (
						masterListArmies[i3].alignment === 'Good' ||
						masterListArmies[i3].alignment === 'Neutral'					
					)
				) {
					allyChoices.push(masterListArmies[i3])
				}
			}
		}
		if (mainArmyAlignment === 'Evil') {
			for (i3 = 0; i3 < masterListArmies.length; i3++) {
				if (
					masterListArmies[i3].name !== this.props.selectedArmy.label && (
						masterListArmies[i3].alignment === 'Evil' ||
						masterListArmies[i3].alignment === 'Neutral'	
					)
				) {
					allyChoices.push(masterListArmies[i3])
				}
				if (this.props.selectedArmy.label === 'Varangur') {
					for (i4 = allyChoices.length - 1; i4 >= 0; i4--) {
						if (
							allyChoices[i4].name === 'Abyssal Dwarfs' ||
							allyChoices[i4].name === 'Forces of the Abyss' ||
							allyChoices[i4].name === 'Twilight Kin'
						) {
							allyChoices.splice(allyChoices.indexOf(allyChoices[i4]), 1)
						}
					}
				}
			}
		}
		if (mainArmyAlignment === 'Neutral') {
			for (i3 = 0; i3 < masterListArmies.length; i3++) {
				if (masterListArmies[i3].name !== this.props.selectedArmy.label) {
					allyChoices.push(masterListArmies[i3])
				}
				if (this.props.selectedArmy.label === 'Order of the Green Lady') {
					for (i4 = allyChoices.length - 1; i4 >= 0; i4--) {
						if (
							allyChoices[i4].name === 'Abyssal Dwarfs' ||
							allyChoices[i4].name === 'Forces of the Abyss'
						) {
							allyChoices.splice(allyChoices.indexOf(allyChoices[i4]), 1)
						}
					}
				}
			}
		}

		if (this.props.selectedArmy.label === 'Order of the Brothermark') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Basileans') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'Order of the Green Lady') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Forces of Nature') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'Free Dwarfs' || this.props.selectedArmy.label === 'The Capgun Crew') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Dwarfs' || allyChoices[i3].name === 'Crap') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'Sylvan Kin') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Elves') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'The Herd') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Forces of Nature') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'League of Rhordia') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Kingdoms of Men' || allyChoices[i3].name === 'League of Good') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}
		if (this.props.selectedArmy.label === 'Ratkin Slaves') {
			for (i3 = 0; i3 < allyChoices.length; i3++) {
				if (allyChoices[i3].name === 'Abyssal Dwarfs') {
					allyChoices.splice(allyChoices.indexOf(allyChoices[i3]), 1)
				}
			}
		}

		let display
		let titleDisplay
		let topDisplay
		let bottomDisplay
		if (this.state.alliedUnitChoicesVisible === false) {
			titleDisplay =
				<div><h4 className="allies-title">Which allied army?</h4><br /></div>
			topDisplay = allyChoices.map(army => {
				return (						
					<div className="allied-army-choices" key={army.id + 150000}>
						<span
							onClick={() => this.showAlliedUnitChoices(army, this.props.units, this.props.alliedListedUnits)}
							className="allied-army-choice"
						>
						{army.name}
						</span>
					</div>
				)
			})
			display = 
				<div>
					{titleDisplay}
					{topDisplay}				
				</div>
		} else {
			titleDisplay =
				<div>
					<h4 className="allies-title">
						Add which{' '}{this.state.selectedAlliedArmySingularName}{' '} unit(s)?
					</h4><br />
					<div className="change-allied-army-button-div">
						<span
							onClick={this.hideAlliedUnitChoices}
							className="change-allied-army-button"
						>
							Change Ally
						</span>
					</div><br /><br />
				</div>
			topDisplay = this.state.unitsInAlliedArmyTop.map(unit => {	
				return (
					<AlliedUnitEntryButton
						key={unit.id}
						id={unit.id}
						army={this.state.selectedAlliedArmy}
						armySingularName={this.state.selectedAlliedArmySingularName}
						unit={unit}
						addToList={this.props.addToList}
						alliedListedUnits={this.props.alliedListedUnits}
						greyedOutUnits={this.state.greyedOutUnits}
						newGreyedOutUnits={this.props.greyedOutUnits}		
					/>
				)
			})
			bottomDisplay = this.state.unitsInAlliedArmyBottom.map(unit => {
				return (
					<AlliedUnitEntryButton
						key={unit.id + 325000}
						id={unit.id}
						army={this.state.selectedAlliedArmy}
						armySingularName={this.state.selectedAlliedArmySingularName}
						unit={unit}
						addToList={this.props.addToList}
						alliedListedUnits={this.props.alliedListedUnits}
						greyedOutUnits={this.state.greyedOutUnits}
						newGreyedOutUnits={this.props.greyedOutUnits}					
					/>					
				)
			})
			display =
				<div>
					{titleDisplay}
					{topDisplay}<br />
					{bottomDisplay}
				</div>
		}

		return (
			<div className="allies-buttons">
				{display}
			</div>
		)
	}
}

export default AlliesButtons