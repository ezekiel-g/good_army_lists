import React from 'react'

const UnitOptionSelectionLabel = props => {
	return (
		<div>
			<span
				id={props.unitOption.id}
				className="unit-option-selection-label"
				onClick={() => props.handlerFunction(
					props.unitOption
				)}				
			>
				{props.unitOption.display_name}{' '}
				<span className="hidden">_</span>
				<span className="pastel-red">{props.unitOption.points}</span>
			</span>
		</div>		
	)
}

export default UnitOptionSelectionLabel