import React from 'react'

const UnitEntryNameTileFormatted = props => {
	let nonSpells = []
	let spells = []
	let i
	for (i = 0; i < props.selectedUnitOptions.length; i++) {
		if (
			props.selectedUnitOptions[i].unitOption.is_spell === false &&
			props.selectedUnitOptions[i].index === props.unitObject.index
		) {
			nonSpells.push(props.selectedUnitOptions[i])
		}
		if (
			props.selectedUnitOptions[i].unitOption.is_spell === true &&
			props.selectedUnitOptions[i].index === props.unitObject.index
		) {
			spells.push(props.selectedUnitOptions[i])
		}		
	}
	let artefact
	for (i = 0; i < props.selectedArtefacts.length; i++) {
		if (props.selectedArtefacts[i].index === props.unitObject.index) {
			artefact = props.selectedArtefacts[i].artefact
		}
	}

	let nonSpellDisplay
	if (nonSpells.length > 0) {
		nonSpellDisplay = nonSpells.map(unitOptionObject => {
			return (
				<div key={unitOptionObject.index + unitOptionObject.unitOption.id + 70000}>
					<i>--{' '}{unitOptionObject.unitOption.display_name}</i>
				</div>
			)
		})
	}

	let spellDisplay
	if (spells.length > 0) {
		spellDisplay = spells.map(unitOptionObject => {
			return (
				<div key={unitOptionObject.index + unitOptionObject.unitOption.id + 100000}>
					<i>--{' '}{unitOptionObject.unitOption.display_name}</i>
				</div>
			)
		})
	}

	let artefactDisplay
	if (artefact !== undefined && artefact !== null) {
		artefactDisplay = <div><i>--{' '}{artefact.display_name}</i></div>
	}

	return (
		<div>
			{props.unitObject.unit.display_name}<br />
			{nonSpellDisplay}
			{spellDisplay}
			{artefactDisplay}
		</div>
	)
}

export default UnitEntryNameTileFormatted