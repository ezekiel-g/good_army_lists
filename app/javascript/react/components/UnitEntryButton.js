import React from 'react'
import whiteSquare from '../../../assets/images/whiteSquare.png'

const UnitEntryButton = props => {
	let extraSpace
	if (props.unit.points < 100) {
		extraSpace = <span className="hidden">{'_'}</span>
	}
	let asterisk
	if (props.unit.is_irregular === true) {
		asterisk = '*'
	}
	let limitNumber
	if (props.unit.limited_n > 0) {
		limitNumber = ' ' + '[' + props.unit.limited_n + ']'
	}
	let greyedOut = false
	let i
	for (i = 0; i < props.greyedOutUnits.length; i++) {
		if (props.greyedOutUnits[i].id === props.unit.id) {
			greyedOut = true
		}
	}

	let display
	if (greyedOut === false) {
		display =
			<table>
				<tbody>
					<tr>
						<td valign="top">
							{extraSpace}
							<span className="pastel-red">{props.unit.points}{' '}</span>
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<span
								onClick={() => props.addToList(props.unit)}
								className="unit-entry-button-label"
							>
								{props.unit.display_name}{asterisk}{limitNumber}
							</span>
						</td>
					</tr>
				</tbody>
			</table>		
	} else {
		display =
			<table>
				<tbody>
					<tr>
						<td valign="top">
							{extraSpace}
							<span className="greyed-out">{props.unit.points}{' '}</span>
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td valign="top">
							<span className="greyed-out">
								{props.unit.display_name}{asterisk}{limitNumber}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
	}

	return (
		<div className="unit-entry-button">
			{display}
		</div>
	)
}

export default UnitEntryButton