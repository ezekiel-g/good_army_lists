import React from 'react'
import UnitEntryNameTileFormatted from './UnitEntryNameTileFormatted'

const FormattedList = props => {
	let list = props.listedUnits.map(unitObject => {
		return (
			<UnitEntryNameTileFormatted
				key={unitObject.index}
				id={unitObject.index}
				unitObject={unitObject}
				selectedUnitOptions={props.selectedUnitOptions}
				selectedArtefacts={props.selectedArtefacts}
			/>
		)
	})

	let printList = (listElement) => {
	    let domClone = listElement.cloneNode(true)
	    let $printSection = document.createElement('div')
	    $printSection.id = 'printSection'
	    $printSection.appendChild(domClone)
	    document.body.insertBefore($printSection, document.body.firstChild)
	    window.print()

	    let oldElement = document.getElementById('printSection')
	    if (oldElement != null) {
	    	oldElement.parentNode.removeChild(oldElement)
	    }
	    return true
	}

	return (
		<div className="formatted-list-box">
			<div className="formatted-list-buttons">
				<span
					onClick={() => printList(document.getElementsByClassName('formatted-list')[0])}
					className="print-button formatted-list-button"
				>
					Print
				</span>
				<span onClick={props.hideFormattedList} className="formatted-list-button">
					Close
				</span>
			</div>
			<hr />		
			<div className="formatted-list">
				<div className="formatted-list-header">
					Army: {props.selectedArmy.label}<br />
					Points: {props.pointTotal}<br />
					Unit Strength: {props.unitStrengthTotal}
				</div><br />
				{list}
			</div>
		</div>
	)
}

export default FormattedList