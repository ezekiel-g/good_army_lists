import React from 'react'

const UserPasswordConfirmationField = props => {
	return (
	    <label>
	    	{props.label}
	      	<input
	        	name={props.name}
	        	type='password'
	        	value={props.content}
	        	onChange={props.handlerFunction}
	      	/>
	    </label>
	)
}
	
export default UserPasswordConfirmationField