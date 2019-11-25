import React from 'react'

const ArtefactTile = props => {
	let pointsHorde
	if (props.artefact.points_horde >= 1) {
		pointsHorde = <span>/{props.artefact.points_horde}</span>
	}
	let isHeroic
	if (props.artefact.is_heroic) {
		isHeroic = <span>{' '}-{' '}Heroic</span>
	} else {
		isHeroic = <span>{' '}-{' '}Common</span>
	}
	const underline = { textDecoration: 'underline' }

	return (
		<div className="tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.artefact.id, props.artefact.name)}
			>
				X
			</span>
			<span>
				<span style={underline}>{props.artefact.name}</span>{' '}-{' '}
				{props.artefact.display_name}{' '}-{' '}
				{props.artefact.points}pts
				{isHeroic}
			</span>
		</div>
	)
}

export default ArtefactTile