import React from 'react'

const UserTile = props => {	
	return (
		<div className="user-tile">
			<span
				className="delete-x"
				onClick={() => props.showDeletionTile(props.id, props.username)}
			>
				X
			</span>
			<span>
				{props.username}{' '}
				({props.role}){' '}-{' '}
				{props.email}
			</span>
		</div>
	)
}

export default UserTile