import React, { Component } from 'react'
import VeteranAbilitySelectionLabel from './VeteranAbilitySelectionLabel'

class VeteranAbilitySelectionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			veteranAbilities: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/veteran_abilities')
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
			this.setState({ veteranAbilities: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))		
	}

	render() {
		let veteranAbilities = this.state.veteranAbilities
		let i

		if (this.props.unitObject.unit.unit_type.includes('Hero')) {
			let ornateToughenedArmor
			for (i = 0; i < veteranAbilities.length; i++) {
				if (veteranAbilities[i].name === 'Ornate Toughened Armor') {
					ornateToughenedArmor = veteranAbilities[i]
				}
			}
			if (
				this.props.unitObject.unit.unit_type !== 'Hero (Infantry)' &&
				this.props.unitObject.unit.unit_type !== 'Hero (Heavy Infantry)' &&
				this.props.unitObject.unit.unit_type !== 'Hero (Cavalry)'
			) {
				veteranAbilities.splice(veteranAbilities.indexOf(ornateToughenedArmor), 1)
			}
		} else {
			let commonVeteranAbilities = []
			for (i = 0; i < veteranAbilities.length; i++) {
				if (!veteranAbilities[i].is_heroic) {
					commonVeteranAbilities.push(veteranAbilities[i])
				}
			}
			veteranAbilities = commonVeteranAbilities
		}

		let sortedVeteranAbilities = veteranAbilities.sort((a, b) => {
			return ( a.points - b.points )
		})

		let veteranAbilityDisplay = sortedVeteranAbilities.map(veteranAbility => {
			return (
				<VeteranAbilitySelectionLabel
					key={veteranAbility.id}
					unitObject={this.props.unitObject}
					veteranAbility={veteranAbility}
					selectVeteranAbility={this.props.selectVeteranAbility}
				/>
			)
		})

		return (
			<div>
				<h4 className="veteran-ability-title">
					What Veteran Ability will<br />
					{this.props.unitObject.unit.display_name} have?
				</h4><br />
				<div>
					<span 
						onClick={this.props.toggleVeteranAbilities}
						className="clear-or-cancel-label"
					>
						Cancel
					</span>
				</div><br />
				<div className="artefact-selections">{veteranAbilityDisplay}</div>
			</div>
		)
	}
}

export default VeteranAbilitySelectionTile