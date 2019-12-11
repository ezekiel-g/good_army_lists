import React from 'react'
import whiteSquare from '../../../../assets/images/whiteSquare.png'

const UnitOptionSelectionLabel = props => {
	let extraSpace
	if (props.unitOption.points < 10) {
		extraSpace = <span className="hidden">{'_'}</span>
	}

	let display
	if (props.greyedOut === false) {
		display =
			<table>
				<tbody>
					<tr>
						<td>
							{extraSpace}
							<span className="pastel-red">{props.unitOption.points}</span>
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td>
							<span
								id={props.unitOption.id}
								className="unit-option-selection-label"
								onClick={() => props.handlerFunction(
									props.unitOption
								)}				
							>
								{props.unitOption.display_name}
							</span>

						</td>
					</tr>
				</tbody>
			</table>
	} else {
		display =
			<table>
				<tbody>
					<tr id={props.unitOption.id} className="greyed-out-unit-option">
						<td>
							{extraSpace}{props.unitOption.points}
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td>
							<span>{props.unitOption.display_name}</span>

						</td>
					</tr>
				</tbody>
			</table>
	}

	return (
		<div>
			{display}
		</div>		
	)
}

export default UnitOptionSelectionLabel