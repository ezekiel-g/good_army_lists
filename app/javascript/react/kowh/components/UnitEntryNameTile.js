import React from 'react'

const UnitEntryNameTile = props => {
	let allSelectedUnitOptions = props.selectedUnitOptions.sort((a, b) => {
		return (a.points - b.points)
	})
	let selectedUnitOptions = []
	let unitOptionText
	let i
	if (props.selectedUnitOptions) {
		for (i = 0; i < allSelectedUnitOptions.length; i++) {
			if (allSelectedUnitOptions[i].index === props.unitObject.index) {
				selectedUnitOptions.push(allSelectedUnitOptions[i])
			}
		}
		if (selectedUnitOptions.length > 0) {
			unitOptionText = selectedUnitOptions.map((unitOptionObject, index) => {
				return (
					<span key={index + 15000} >
						<span						
							className="unit-option-entry-label"
							onClick={() => props.removeUnitOption(unitOptionObject)}
						>
							{' -- '}{unitOptionObject.unitOption.display_name}
						</span><br />
					</span>

				)
			})
		}
	}

	let allselectedVeteranAbilities = props.selectedVeteranAbilities
	let selectedVeteranAbilities = []
	let veteranAbilityText
	if (props.selectedVeteranAbilities) {
		for (i = 0; i < allselectedVeteranAbilities.length; i++) {
			if (allselectedVeteranAbilities[i].index === props.unitObject.index) {
				selectedVeteranAbilities.push(allselectedVeteranAbilities[i])
			}
		}
		if (selectedVeteranAbilities.length > 0) {
			veteranAbilityText =
				<span>
					<span
						onClick={() => props.removeVeteranAbility(selectedVeteranAbilities[0])}
						className="unit-option-entry-label"
					>
						{' -- '}{selectedVeteranAbilities[selectedVeteranAbilities.length - 1].veteranAbility.display_name}
					</span><br />
				</span>
		}
	}

	return (
		<span className="list-entry">
			<span 
				onClick={() => props.removeUnitFromList(props.unitObject)}
				className="list-entry-label-kowh"
			>
				{props.unitObject.unit.display_name}
			</span><br />
				{veteranAbilityText}
				{unitOptionText}
		</span>
	)
}

export default UnitEntryNameTile