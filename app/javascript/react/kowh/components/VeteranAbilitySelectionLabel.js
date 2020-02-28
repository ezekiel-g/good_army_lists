import React from 'react'
import whiteSquare from '../../../../assets/images/whiteSquare.png'

const VeteranAbilitySelectionLabel = props => {
	let extraSpace
	if (props.veteranAbility.points < 10) {
		extraSpace = <span className="hidden">{'_'}</span>
	}

	return (
		<div>
			<table className="artefact-table">
				<tbody>
					<tr>
						<td valign="top">
							{extraSpace}
							<span className="blue-grey">{props.veteranAbility.points}</span>
						</td>
						<td>
							<span className="white-square"><img src={whiteSquare} width={"10"} height={"20"} /></span>
						</td>
						<td>
							<span
								onClick={() => props.selectVeteranAbility(props.unitObject, props.veteranAbility)}
								className="veteran-ability-selection-label"
							>
								{props.veteranAbility.display_name}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default VeteranAbilitySelectionLabel