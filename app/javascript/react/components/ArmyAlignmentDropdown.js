import React from 'react'

const ArmyAlignmentDropdown = props => {
	let dropdownOptions = props.options.map(option => {
		return (
			<option key={option} value={option}>{option}</option>
		)
	})

	return (
	    <label>
	    	{props.label}
	      	<select
	      		className="dropdown"
	        	name={props.name}
	        	value={props.selection}
	        	onChange={props.handlerFunction}
	        >
	        	<option value=""></option>
	        	{dropdownOptions}
	      	</select>
	    </label>
	)
}
	
export default ArmyAlignmentDropdown