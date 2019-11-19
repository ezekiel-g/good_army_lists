import React from 'react'

const UnitIsIrregularCheckbox = props => {
	return (
	    <label>
	    	{props.label}
	      	<input
	        	name={props.name}
	        	type="checkbox"
	        	value={props.content}
	        	onChange={props.handlerFunction}
	      	/>
	    </label>
	)
}
	
export default UnitIsIrregularCheckbox