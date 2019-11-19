import React from 'react'
import cog from '../../../assets/images/cog.ico'
import whiteSquare from '../../../assets/images/whiteSquare.png'

const UnitOptionIcon = props => {
	let display
	if (props.listedUnitsThatCanHaveOptions.includes(props.unitObject)) {
		display =
			<span
				onClick={() => props.updateUnitBeingGivenOption(props.unitObject)}
				className="cog"
			>
				<img src={cog} width={"20"} height={"20"} />
			</span>	
	} else {
		display = <span className="removed-cog">{'_'}</span>
	}

	return (
		<span>{display}</span>
	)
}

export default UnitOptionIcon