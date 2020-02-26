import React, { Component } from 'react'
import ArtefactSelectionLabel from './ArtefactSelectionLabel'

class ArtefactSelectionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			artefacts: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/artefacts')
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
			this.setState({ artefacts: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))		
	}

	render() {
		let artefacts = this.state.artefacts
		let blessingOfTheGods
		let blessingOfTheGodsHorde
		let chantOfHate
		let chantOfHateHorde
		let brewOfStrength
		let brewOfStrengthHorde
		let brewOfSharpness
		let brewOfSharpnessHorde
		let i

		for (i = 0; i < artefacts.length; i++) {
			if (artefacts[i].name === 'Blessing of the Gods') {
				blessingOfTheGods = artefacts[i]
			}
			if (artefacts[i].name === 'Blessing of the Gods (Horde)') {
				blessingOfTheGodsHorde = artefacts[i]
			}
			if (artefacts[i].name === 'Chant of Hate') {
				chantOfHate = artefacts[i]
			}
			if (artefacts[i].name === 'Chant of Hate (Horde)') {
				chantOfHateHorde = artefacts[i]
			}
			if (artefacts[i].name === 'Brew of Strength') {
				brewOfStrength = artefacts[i]
			}
			if (artefacts[i].name === 'Brew of Strength (Horde)') {
				brewOfStrengthHorde = artefacts[i]
			}
			if (artefacts[i].name === 'Brew of Sharpness') {
				brewOfSharpness = artefacts[i]
			}
			if (artefacts[i].name === 'Brew of Sharpness (Horde)') {
				brewOfSharpnessHorde = artefacts[i]
			}
		}
		
		if (
			this.props.unitObject.unit.unit_size === 'Horde' ||
			this.props.unitObject.unit.unit_size === 'Legion'
		) {
			artefacts.splice(artefacts.indexOf(blessingOfTheGods), 1)
			artefacts.splice(artefacts.indexOf(chantOfHate), 1)
			artefacts.splice(artefacts.indexOf(brewOfStrength), 1)
			artefacts.splice(artefacts.indexOf(brewOfSharpness), 1)
		} else {
			artefacts.splice(artefacts.indexOf(blessingOfTheGodsHorde), 1)
			artefacts.splice(artefacts.indexOf(chantOfHateHorde), 1)
			artefacts.splice(artefacts.indexOf(brewOfStrengthHorde), 1)
			artefacts.splice(artefacts.indexOf(brewOfSharpnessHorde), 1)			
		}

		if (this.props.unitObject.unit.unit_type.includes('Hero')) {
			let darklordsOnyxRing
			let mournfulBlade
			let bootsOfTheSevenLeagues
			let wingsOfHoneymaze
			for (i = 0; i < artefacts.length; i++) {
				if (artefacts[i].name === 'Darklord\'s Onyx Ring') {
					darklordsOnyxRing = artefacts[i]
				}
				if (artefacts[i].name === 'Mournful Blade') {
					mournfulBlade = artefacts[i]
				}
				if (artefacts[i].name === 'Boots of the Seven Leagues') {
					bootsOfTheSevenLeagues = artefacts[i]
				}
				if (artefacts[i].name === 'Wings of Honeymaze') {
					wingsOfHoneymaze = artefacts[i]
				}
			}
			if (
				this.props.unitObject.unit.unit_type !== 'Hero (Infantry)' &&
				this.props.unitObject.unit.unit_type !== 'Hero (Heavy Infantry)' &&
				this.props.unitObject.unit.unit_type !== 'Hero (Cavalry)'
			) {
				artefacts.splice(artefacts.indexOf(darklordsOnyxRing), 1)
				artefacts.splice(artefacts.indexOf(mournfulBlade), 1)
				artefacts.splice(artefacts.indexOf(bootsOfTheSevenLeagues), 1)
				artefacts.splice(artefacts.indexOf(wingsOfHoneymaze), 1)
			}
		} else {
			let commonArtefacts = []
			for (i = 0; i < artefacts.length; i++) {
				if (!artefacts[i].is_heroic) {
					commonArtefacts.push(artefacts[i])
				}
			}
			artefacts = commonArtefacts
		}

		let sortedArtefacts = artefacts.sort((a, b) => {
			return ( a.points - b.points )
		})

		let selectedArtefactPoints = 0
		for (i = 0; i < this.props.selectedArtefacts.length; i++) {
			if (this.props.selectedArtefacts[i].index === this.props.unitObject.index) {
				selectedArtefactPoints += this.props.selectedArtefacts[i].artefact.points
			}
		}

		let artefactDisplay = sortedArtefacts.map(artefact => {
			let greyedOut = false
			if (
				(
					(this.props.pointTotal + this.props.alliedPointTotal + artefact.points - selectedArtefactPoints) / 4 <
					this.props.alliedPointTotal
				) && (
					this.props.alliedPointTotal > 0
				)
			) {
				greyedOut = true
			}
			return (
				<ArtefactSelectionLabel
					key={artefact.id}
					unitObject={this.props.unitObject}
					artefact={artefact}
					selectArtefact={this.props.selectArtefact}
					greyedOut={greyedOut}
				/>
			)
		})

		return (
			<div>
				<h4 className="artefact-title">
					What Magical Artefact will<br />
					{this.props.unitObject.unit.display_name} have?
				</h4><br />
				<div>
					<span 
						onClick={this.props.toggleArtefacts}
						className="clear-or-cancel-label"
					>
						Cancel
					</span>
				</div><br />
				<div className="artefact-selections">{artefactDisplay}</div>
			</div>
		)
	}
}

export default ArtefactSelectionTile