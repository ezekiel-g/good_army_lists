import React from 'react'

const UnitSpecialField = props => {
	return (
	    <label>
	    	{props.label}
	      	<textarea
	      		rows="3"
	        	name={props.name}
	        	type='text'
	        	value={props.content}
	        	onChange={props.handlerFunction}
	      	/>
	    </label>
	)
}
	
export default UnitSpecialField