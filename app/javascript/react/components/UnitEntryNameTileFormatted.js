import React from 'react'
import whiteSquare from '../../../assets/images/whiteSquare.png'

const UnitEntryNameTileFormatted = props => {
	let nonSpells = []
	let spells = []
	let pointsForEntry = props.unitObject.unit.points
	let i
	for (i = 0; i < props.selectedUnitOptions.length; i++) {
		if (
			props.selectedUnitOptions[i].unitOption.is_spell === false &&
			props.selectedUnitOptions[i].index === props.unitObject.index
		) {
			nonSpells.push(props.selectedUnitOptions[i])
			pointsForEntry += props.selectedUnitOptions[i].unitOption.points
		}
		if (
			props.selectedUnitOptions[i].unitOption.is_spell === true &&
			props.selectedUnitOptions[i].index === props.unitObject.index
		) {
			spells.push(props.selectedUnitOptions[i])
			pointsForEntry += props.selectedUnitOptions[i].unitOption.points
		}	
	}
	let artefact
	for (i = 0; i < props.selectedArtefacts.length; i++) {
		if (props.selectedArtefacts[i].index === props.unitObject.index) {
			artefact = props.selectedArtefacts[i].artefact
			pointsForEntry += props.selectedArtefacts[i].artefact.points
		}
	}

	let nonSpellDisplay
	if (nonSpells.length > 0) {
		nonSpellDisplay = nonSpells.map(unitOptionObject => {
			return (
				<tr key={unitOptionObject.index + unitOptionObject.unitOption.id + 70000}>
					<td></td>
					<td>
						--{' '}<img className="white-square-formatted" src={whiteSquare} />
						<i>{unitOptionObject.unitOption.display_name}</i>
					</td>
				</tr>
			)
		})
	}

	let spellDisplay
	if (spells.length > 0) {
		spellDisplay = spells.map(unitOptionObject => {
			return (
				<tr key={unitOptionObject.index + unitOptionObject.unitOption.id + 100000}>
					<td></td>
					<td>
						--{' '}<img className="white-square-formatted" src={whiteSquare} />
						<i>{unitOptionObject.unitOption.display_name}</i>
					</td>
				</tr>
			)
		})
	}

	let artefactDisplay
	if (artefact !== undefined && artefact !== null) {
		artefactDisplay =
			<tr>
				<td></td>
				<td>
					--{' '}<img className="white-square-formatted" src={whiteSquare} />
					<i>{artefact.display_name}</i>
				</td>
			</tr>
	}
	let extraSpace
	if (pointsForEntry < 100) {
		extraSpace = <span className="hidden">{'_'}</span>
	}

	return (
		<div className="formatted-list-entry">
			<table>
				<tbody>
					<tr>
						<td>
							{extraSpace}{pointsForEntry}{' '}
							<img className="white-square-formatted" src={whiteSquare} />
							<span>--</span>
							<img className="white-square-formatted" src={whiteSquare} />
							{' '}
						</td>
						<td>{props.unitObject.unit.display_name}</td>
					</tr>
					{nonSpellDisplay}
					{spellDisplay}
					{artefactDisplay}
				</tbody>
			</table>
		</div>
	)
}

export default UnitEntryNameTileFormatted