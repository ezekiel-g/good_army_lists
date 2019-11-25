import React from 'react'

const UnitOptionTile = props => {
	let isSpell
	let isUnique
	if (props.unitOption.is_spell) {
		isSpell = <span>{' '}-{' '}Spell</span>
	}
	if (props.unitOption.is_unique) {
		isUnique = <span>{' '}-{' '}Unique</span>
	}
	const underline = { textDecoration: 'underline' }

	return (
		<div className="tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.unitOption.id, props.unitOption.name)}
			>
				X
			</span>
			<span>
				<span style={underline}>{props.unitOption.name}</span>{' '}-{' '}
				{props.unitOption.display_name}{' '}-{' '}
				{props.unitOption.points}pts
				{isSpell}
				{isUnique}
			</span>
		</div>
	)
}

export default UnitOptionTile