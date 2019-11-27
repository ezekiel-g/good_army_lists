import React from 'react'

const UnitOptionSelectionLabel = props => {
	let display
	if (props.greyedOut === false) {
		display =
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
	} else {
		display =
			<span
				id={props.unitOption.id}
				className="greyed-out-unit-option"			
			>
				{props.unitOption.display_name}{' '}
				<span className="hidden">_</span>
				<span>{props.unitOption.points}</span>
			</span>
	}

	return (
		<div>
			{display}
		</div>		
	)
}

export default UnitOptionSelectionLabel