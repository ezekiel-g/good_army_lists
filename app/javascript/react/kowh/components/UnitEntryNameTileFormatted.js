import React from 'react'

const UnitEntryNameTileFormatted = props => {
	let unitOptions = []
	let pointsForEntry = props.unitObject.unit.points
	let i
	for (i = 0; i < props.selectedUnitOptions.length; i++) {
		if (props.selectedUnitOptions[i].index === props.unitObject.index) {
			unitOptions.push(props.selectedUnitOptions[i])
			pointsForEntry += props.selectedUnitOptions[i].unitOption.points
		}	
	}
	let veteranAbility
	let veteranAbilityDisplay
	if (props.selectedVeteranAbilities != undefined) {
		for (i = 0; i < props.selectedVeteranAbilities.length; i++) {
			if (props.selectedVeteranAbilities[i].index === props.unitObject.index) {
				veteranAbility = props.selectedVeteranAbilities[i].veteranAbility
				pointsForEntry += props.selectedVeteranAbilities[i].veteranAbility.points
			}
		}
		if (veteranAbility !== undefined && veteranAbility !== null) {
			veteranAbilityDisplay =
				<div>
					--{' '}<i>{veteranAbility.display_name}</i>
				</div>
		}
	}

	let unitOptionDisplay
	if (unitOptions.length > 0) {
		unitOptionDisplay = unitOptions.map(unitOptionObject => {
			return (
				<div key={unitOptionObject.index + unitOptionObject.unitOption.id + 70000}>
					--{' '}<i>{unitOptionObject.unitOption.display_name}</i>
				</div>
			)
		})
	}

	return (
		<div className="formatted-list-entry">
			<div>{pointsForEntry},{' '}{props.unitObject.unit.display_name}</div>
			{veteranAbilityDisplay}
			{unitOptionDisplay}
		</div>
	)
}

export default UnitEntryNameTileFormatted