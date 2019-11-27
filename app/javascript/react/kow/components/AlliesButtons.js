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
		let mainArmyAlignment
		let allyChoices = []
		let i3
		if (this.props.selectedArmy.label === 'Basileans') {
			mainArmyAlignment = 'Good'
		}
		if (this.props.selectedArmy.label === 'Dwarfs') {
			mainArmyAlignment = 'Good'
		}
		if (this.props.selectedArmy.label === 'Elves') {
			mainArmyAlignment = 'Good'
		}
		if (this.props.selectedArmy.label === 'Northern Alliance') {
			mainArmyAlignment = 'Good'
		}
		if (this.props.selectedArmy.label === 'Forces of Nature') {
			mainArmyAlignment = 'Neutral'
		}
		if (this.props.selectedArmy.label === 'Ogres') {
			mainArmyAlignment = 'Neutral'
		}
		if (this.props.selectedArmy.label === 'Trident Realm of Neritica') {
			mainArmyAlignment = 'Neutral'
		}
		if (this.props.selectedArmy.label === 'Abyssal Dwarfs') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Empire of Dust') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Forces of the Abyss') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Goblins') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Nightstalkers') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Orcs') {
			mainArmyAlignment = 'Evil'
		}
		if (this.props.selectedArmy.label === 'Undead') {
			mainArmyAlignment = 'Evil'
		}

		if (mainArmyAlignment === 'Good') {
			for (i3 = 0; i3 < this.props.armies.length; i3++) {
				if (
					this.props.armies[i3].name !== this.props.selectedArmy.label && (
						this.props.armies[i3].alignment === 'Good' ||
						this.props.armies[i3].alignment === 'Neutral'					
					)
				) {
					allyChoices.push(this.props.armies[i3])
				}
			}
		}
		if (mainArmyAlignment === 'Evil') {
			for (i3 = 0; i3 < this.props.armies.length; i3++) {
				if (
					this.props.armies[i3].name !== this.props.selectedArmy.label && (
						this.props.armies[i3].alignment === 'Evil' ||
						this.props.armies[i3].alignment === 'Neutral'	
					)
				) {
					allyChoices.push(this.props.armies[i3])
				}
			}
		}
		if (mainArmyAlignment === 'Neutral') {
			for (i3 = 0; i3 < this.props.armies.length; i3++) {
				if (this.props.armies[i3].name !== this.props.selectedArmy.label) {
					allyChoices.push(this.props.armies[i3])
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