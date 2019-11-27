import React from 'react'
import vase from '../../../../assets/images/vase.ico'
import whiteSquare from '../../../../assets/images/whiteSquare.png'

const ArtefactIcon = props => {
	let display
	if (
		props.no !== 'no' &&
		props.listedUnitsThatCanHaveArtefacts.includes(props.unitObject)
	) {
		display =
			<span
				onClick={() => props.updateUnitBeingGivenArtefact(props.unitObject)}
				className="vase"
			>
				<img src={vase} width={"20"} height={"12"} />
			</span>		
	} else {
		display = <span className="removed-vase"><img src={whiteSquare} width={"20"} height={"20"} /></span>
	}

	return (
		<span>{display}</span>
	)
}

export default ArtefactIcon