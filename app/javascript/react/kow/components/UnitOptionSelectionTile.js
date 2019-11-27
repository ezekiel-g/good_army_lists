import React, { Component } from 'react'
import UnitOptionSelectionLabel from './UnitOptionSelectionLabel'

class UnitOptionSelectionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			unitOptions: [],
			highlightedUnitOptions: []
		}
		this.updateHighlightedUnitOptions = this.updateHighlightedUnitOptions.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/unit_options')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ unitOptions: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
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
			document.getElementById(unitOption.id).classList.add('highlighted-unit-option')
			highlightedUnitOptions.push(unitOption)
		}
		this.setState({ highlightedUnitOptions: highlightedUnitOptions })
	}

	render() {
		let unitOptions = this.state.unitOptions
		let unitObject
		let selectButton
		let nonSpells = []
		let spells = []
		let i

		if (this.props.unitObject != '' && (this.props.alliedUnitObject == '' || this.props.alliedUnitObject == undefined)) {
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
		if (this.props.unitObject == '' && (this.props.alliedUnitObject != '' || this.props.alliedUnitObject == undefined)) {
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
			let greyedOut = false
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
			return (
				<UnitOptionSelectionLabel
					key={unitOption.id}
					id={unitOption.id}
					unitOption={unitOption}
					handlerFunction={this.updateHighlightedUnitOptions}
					greyedOut={greyedOut}
				/>
			)
		})
		let spellDisplay = sortedSpells.map(unitOption => {
			let greyedOut = false
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
			return (
				<UnitOptionSelectionLabel
					key={unitOption.id + 20000}
					id={unitOption.id}
					unitOption={unitOption}
					handlerFunction={this.updateHighlightedUnitOptions}
					greyedOut={greyedOut}
				/>
			)
		})

		return (
			<div>
				<h4 className="unit-option-title">
					What option(s) will<br />
					{unitObject.unit.display_name} have?
				</h4><br />
				{nonSpellDisplay}
				{spellDisplay}<br /><br />
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