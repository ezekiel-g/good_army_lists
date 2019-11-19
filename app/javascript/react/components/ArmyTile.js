import React from 'react'

const ArmyTile = props => {
	return (
		<div className="army-tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.id, props.name)}
			>
				X
			</span>
			<span>
				{props.name}{' '}({props.alignment})
			</span>
		</div>
	)
}

export default ArmyTile