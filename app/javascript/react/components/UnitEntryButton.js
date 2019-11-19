import React from 'react'
import whiteSquare from '../../../assets/images/whiteSquare.png'

const UnitEntryButton = props => {
	let extraSpace
	if (props.unit.points < 100) {
		extraSpace = <span className="hidden">{'_'}</span>
	}

	return (
		<div className="unit-entry-button">
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
								{props.unit.display_name}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default UnitEntryButton