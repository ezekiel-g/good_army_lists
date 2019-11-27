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
	let header
	let alliesList
	let listDisplay
	if (props.alliedListedUnits.length > 0) {
		header =
			<div className="formatted-list-header">
				<div>Army: {props.selectedArmy.label}</div>
				<div>Ally: {props.alliedArmy.name}</div>
				<div>Points: {props.pointTotal + props.alliedPointTotal}</div>
				<div>Unit Strength: {props.unitStrengthTotal}</div>
			</div>
		alliesList = props.alliedListedUnits.map(unitObject => {
			return (
				<UnitEntryNameTileFormatted
					key={unitObject.index + 350000}
					id={unitObject.index}
					unitObject={unitObject}
					selectedUnitOptions={props.alliedSelectedUnitOptions}
				/>
			)
		})
		listDisplay = <div>{list}<br />{alliesList}</div>
	} else {
		header =
			<div className="formatted-list-header">
				<div>Army: {props.selectedArmy.label}</div>
				<div>Points: {props.pointTotal + props.alliedPointTotal}</div>
				<div>Unit Strength: {props.unitStrengthTotal}</div>
			</div>
		listDisplay = <div>{list}</div>
	}

	const printList = listElement => {
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

	const copyList = listElement => {
		let range
		let selection
		if (document.body.createTextRange) {
			range = document.body.createTextRange()
			range.moveToElementText(listElement)
			range.select()
		} else {
			if (window.getSelection) {
				selection = window.getSelection()
				range = document.createRange()
    			range.selectNodeContents(listElement)
    			selection.removeAllRanges()
    			selection.addRange(range)
			}
		}
		document.execCommand('copy')
	}

	return (
		<div className="formatted-list-box">
			<div type="text" className="formatted-list">
				{header}<br />
				{listDisplay}<br />
				www.goodarmylists.com
			</div>
			<hr />		
			<div className="formatted-list-buttons">
				<span
					onClick={() => copyList(document.getElementsByClassName('formatted-list')[0])}
					className="copy-button formatted-list-button"
				>
					Copy
				</span>
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
		</div>
	)
}

export default FormattedList