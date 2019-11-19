import React from 'react'

const UserDeletionTile = props => {
	return (
		<div>
			<p>Are you sure you want to delete "{props.username}"?</p>
			<button onClick={props.hideDeletionTile}>Cancel</button>
			<button onClick={props.deleteFromDatabase}>Delete</button>
		</div>
	)
}

export default UserDeletionTile