import React, { Component } from 'react'
import UnitOptionSelectionLabel from './UnitOptionSelectionLabel'

class UnitOptionSelectionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			highlightedUnitOptions: []
		}
		this.updateHighlightedUnitOptions = this.updateHighlightedUnitOptions.bind(this)
	}

	componentDidMount() {
		let unitObject = this.props.unitObject
		let alliedUnitObject = this.props.alliedUnitObject
		let unitOptions = this.props.unitOptions
		let selectedUnitOptions = this.props.selectedUnitOptions
		let alliedSelectedUnitOptions = this.props.alliedSelectedUnitOptions
		let highlightedUnitOptions = []
		let i2
		let i3
		if (unitObject != '' && unitObject != undefined && (alliedUnitObject == '' || alliedUnitObject == undefined)) {
			for (i2 = 0; i2 < selectedUnitOptions.length; i2++) {
				for (i3 = 0; i3 < unitOptions.length; i3++) {	
					if (
						selectedUnitOptions[i2].index === unitObject.index &&
						selectedUnitOptions[i2].unitOption.name === unitOptions[i3].name
					) {
						highlightedUnitOptions.push(selectedUnitOptions[i2].unitOption)
					}
				}
			}
		}
		if ((unitObject == '' || unitObject == undefined) && alliedUnitObject != '' && alliedUnitObject != undefined) {
			for (i2 = 0; i2 < alliedSelectedUnitOptions.length; i2++) {
				for (i3 = 0; i3 < unitOptions.length; i3++) {	
					if (
						alliedSelectedUnitOptions[i2].index === alliedUnitObject.index &&
						alliedSelectedUnitOptions[i2].unitOption.name === unitOptions[i3].name
					) {
						highlightedUnitOptions.push(alliedSelectedUnitOptions[i2].unitOption)
					}
				}
			}
		}	
		this.setState({ highlightedUnitOptions: highlightedUnitOptions })
	}

	updateHighlightedUnitOptions(unitOption) {
		let highlightedUnitOptions = this.state.highlightedUnitOptions
		let i
		if (document.getElementById(unitOption.id).classList.contains('highlighted-unit-option')) {
			document.getElementById(unitOption.id).classList.remove('highlighted-unit-option')
			highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(unitOption), 1)
		} else {
			if (unitOption.name.includes('to replace')) {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (unitOption.display_name.includes(highlightedUnitOptions[i].display_name)) {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name.includes('(Cumulative)')) {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].display_name.includes(unitOption.display_name)) {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.display_name === 'War Wagon') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].display_name === 'Dread') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.display_name === 'Dread') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].display_name === 'War Wagon') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name.includes('Two-Handed Weapon') && unitOption.name.includes('Sergeant on')) {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (
						highlightedUnitOptions[i].name.includes('Heavy Crossbow') &&
						highlightedUnitOptions[i].name.includes('Sergeant on')
					) {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name.includes('Heavy Crossbow') && unitOption.name.includes('Sergeant on')) {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (
						highlightedUnitOptions[i].name.includes('Two-Handed Weapon') &&
						highlightedUnitOptions[i].name.includes('Sergeant on')
					) {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Fleabag (King (Goblins))') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Jareth\'s Pendant [1]') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Jareth\'s Pendant [1]') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Fleabag (King (Goblins))') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Horse (Summoner Crone)') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Scepter of Shadows [1] (Summoner Crone)') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Scepter of Shadows [1] (Summoner Crone)') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Horse (Summoner Crone)') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Raptor (Battle Captain (Salamanders))') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Path of Fire [1] (Battle Captain (Salamanders))') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Path of Fire [1] (Battle Captain (Salamanders))') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Raptor (Battle Captain (Salamanders))') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Horse (Exemplar Paladin)') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Lead from the Front [1] (Exemplar Paladin)') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.name === 'Lead from the Front [1] (Exemplar Paladin)') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].name === 'Horse (Exemplar Paladin)') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.display_name === 'Brand of the Warrior') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].display_name === 'Guise of the Deceiver') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}
			if (unitOption.display_name === 'Guise of the Deceiver') {
				for (i = 0; i < highlightedUnitOptions.length; i++) {
					if (highlightedUnitOptions[i].display_name === 'Brand of the Warrior') {
						document.getElementById(highlightedUnitOptions[i].id).classList.remove('highlighted-unit-option')
						highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(highlightedUnitOptions[i]), 1)
					}
				}
			}		
			document.getElementById(unitOption.id).classList.add('highlighted-unit-option')
			highlightedUnitOptions.push(unitOption)
		}
		this.setState({ highlightedUnitOptions: highlightedUnitOptions })
	}

	render() {
		let unitObject
		let unitOptions = this.props.unitOptions
		let selectButton
		let nonSpells = []
		let spells = []
		let i

		if (
			this.props.unitObject != '' &&
			this.props.unitObject != undefined && (
				this.props.alliedUnitObject == '' || this.props.alliedUnitObject == undefined
			)
		) {
			unitObject = this.props.unitObject
			selectButton =
				<span 
					onClick={() => this.props.selectUnitOptions(
						unitObject,
						this.state.highlightedUnitOptions
					)}
					className="clear-or-cancel-label"
				>
					Select
				</span>
		}
		if (
			this.props.alliedUnitObject != '' &&
			this.props.alliedUnitObject != undefined && (
				this.props.unitObject == '' || this.props.unitObject == undefined
			)
		) {
			unitObject = this.props.alliedUnitObject
			selectButton =
				<span 
					onClick={() => this.props.selectAlliedUnitOptions(
						unitObject,
						this.state.highlightedUnitOptions
					)}
					className="clear-or-cancel-label"
				>
					Select
				</span>			
		}		

		for (i = 0; i < unitOptions.length; i++) {
			if (unitOptions[i].unit_id === unitObject.unit.id) {
				if (unitOptions[i].is_spell === true) {
					spells.push(unitOptions[i])
				} else {
					nonSpells.push(unitOptions[i])
				}
			}
		}
		let sortedNonSpells = nonSpells.sort((a, b) => {
			return (a.points - b.points)
		})
		let sortedSpells = spells.sort((a, b) => {
			return (a.points - b.points)
		})
		let nonSpellDisplay = sortedNonSpells.map(unitOption => {
			let highlighted = false
			let greyedOut = false
			for (i = 0; i < this.props.selectedUnitOptions.length; i++) {
				if (
					this.props.selectedUnitOptions[i].index === unitObject.index &&
					this.props.selectedUnitOptions[i].unitOption.name === unitOption.name
				) {
					highlighted = true
				}
			}
			for (i = 0; i < this.props.alliedSelectedUnitOptions.length; i++) {
				if (
					this.props.alliedSelectedUnitOptions[i].index === unitObject.index &&
					this.props.alliedSelectedUnitOptions[i].unitOption.name === unitOption.name
				) {
					highlighted = true
				}
			}
			if (highlighted === true && unitObject === this.props.unitObject) {
				if (
					(
						(this.props.pointTotal + this.props.alliedPointTotal - unitOption.points) / 4 <
						this.props.alliedPointTotal
					) && (
						this.props.alliedPointTotal > 0
					)
				) {
					greyedOut = true
				}				
			} else {
				if (
					(
						(this.props.pointTotal + this.props.alliedPointTotal + unitOption.points) / 4 <
						this.props.alliedPointTotal + unitOption.points
					) && (
						this.props.alliedPointTotal > 0
					)
				) {
					greyedOut = true
				}
			}

			return (
				<UnitOptionSelectionLabel
					key={unitOption.id}
					id={unitOption.id}
					unitOption={unitOption}
					handlerFunction={this.updateHighlightedUnitOptions}
					greyedOut={greyedOut}
					highlighted={highlighted}
				/>
			)
		})
		let spellDisplay = sortedSpells.map(unitOption => {
			let highlighted = false
			let greyedOut = false
			for (i = 0; i < this.props.selectedUnitOptions.length; i++) {
				if (
					this.props.selectedUnitOptions[i].index === unitObject.index &&
					this.props.selectedUnitOptions[i].unitOption.name === unitOption.name
				) {
					highlighted = true
				}
			}
			for (i = 0; i < this.props.alliedSelectedUnitOptions.length; i++) {
				if (
					this.props.alliedSelectedUnitOptions[i].index === unitObject.index &&
					this.props.alliedSelectedUnitOptions[i].unitOption.name === unitOption.name
				) {
					highlighted = true
				}
			}
			if (highlighted === false) {
				if (
					(
						(this.props.pointTotal + this.props.alliedPointTotal + unitOption.points) / 4 <
						this.props.alliedPointTotal + unitOption.points
					) && (
						this.props.alliedUnitObject != '' && this.props.alliedUnitObject != undefined
					)
				) {
					greyedOut = true
				}
			}
			if (highlighted === true) {
				if (
					(
						(this.props.pointTotal + this.props.alliedPointTotal - unitOption.points) / 4 <
						this.props.alliedPointTotal - unitOption.points
					) && (
						this.props.alliedUnitObject != '' && this.props.alliedUnitObject != undefined
					)
				) {
					greyedOut = true
				}				
			}

			return (
				<UnitOptionSelectionLabel
					key={unitOption.id + 20000}
					id={unitOption.id}
					unitOption={unitOption}
					handlerFunction={this.updateHighlightedUnitOptions}
					greyedOut={greyedOut}
					highlighted={highlighted}
				/>
			)
		})

		return (
			<div>
				<h4 className="unit-option-title">
					What option(s) will<br />
					{unitObject.unit.display_name} have?
				</h4><br />
				<div className="unit-option-selections">
					{nonSpellDisplay}
					{spellDisplay}<br /><br />
				</div>
				<div>
					{selectButton}
					<span 
						onClick={this.props.toggleUnitOptions}
						className="clear-or-cancel-label"
					>
						Cancel
					</span>
				</div>
			</div>
		)
	}
}

export default UnitOptionSelectionTile