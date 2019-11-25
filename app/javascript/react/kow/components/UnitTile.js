import React from 'react'

const UnitTile = props => {
	let unitSize
	if (props.unit.unit_size) {
		unitSize = <span>{props.unit.unit_size}{' '}-{' '}</span>
	}
	let limitedN
	if (props.unit.limited_n >= 1) {
		limitedN = <span>{' '}-{' '}Limited({props.unit.limited_n})</span>
	}
	let isIrregular
	if (props.unit.is_irregular) {
		isIrregular = <span>{' '}-{' '}Irregular</span>
	}
	const underline = { textDecoration: 'underline' }

	return (
		<div className="unit-tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.unit.id, props.unit.name)}
			>
				X
			</span>
			<span>
				Army_{props.unit.army_id}{' '}-{' '}
				<span style={underline}>{props.unit.name}</span>{' '}-{' '}
				{props.unit.display_name}{' '}-{' '}
				({props.unit.unit_type_index}){' '}
				{props.unit.unit_type}{' '}-{' '}
				{unitSize}
				US{props.unit.unit_strength}{' '}-{' '}
				{props.unit.points}pts
				{limitedN}
				{isIrregular}
			</span>
		</div>
	)
}

export default UnitTile