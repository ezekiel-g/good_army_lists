import React from 'react'

const ArmyDropdown = props => {
	let dropdownOptions = props.options.map(option => {
		return (
			<option key={option.name} value={option.id}>
				{option.name}
			</option>
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
	
export default ArmyDropdown