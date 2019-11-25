import React from 'react'

const UnitOptionIsSpellCheckbox = props => {
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
	
export default UnitOptionIsSpellCheckbox