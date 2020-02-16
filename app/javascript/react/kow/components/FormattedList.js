import React from 'react'
import UnitEntryNameTileFormatted from './UnitEntryNameTileFormatted'

const FormattedList = props => {
	let header

	let listTop = props.listedUnitsTop.map(unitObject => {
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
	let listSecondQuarter = props.listedUnitsSecondQuarter.map(unitObject => {
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
	let listThirdQuarter = props.listedUnitsThirdQuarter.map(unitObject => {
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
	let listBottom = props.listedUnitsBottom.map(unitObject => {
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
	let alliesListTop
	let alliesListSecondQuarter
	let alliesListThirdQuarter
	let alliesListBottom
	let listDisplay
	if (props.alliedListedUnitsTop.length > 0) {
		header =
			<div className="formatted-list-header">
				<div>Army: {props.selectedArmy.label}</div>
				<div>Ally: {props.alliedArmy.name}</div>
				<div>Points: {props.pointTotal + props.alliedPointTotal}</div>
				<div>Unit Strength: {props.unitStrengthTotal}</div>
			</div>

		alliesListTop = props.alliedListedUnitsTop.map(unitObject => {
			return (
				<UnitEntryNameTileFormatted
					key={unitObject.index + 350000}
					id={unitObject.index}
					unitObject={unitObject}
					selectedUnitOptions={props.alliedSelectedUnitOptions}
				/>
			)
		})
		alliesListSecondQuarter = props.alliedListedUnitsSecondQuarter.map(unitObject => {
			return (
				<UnitEntryNameTileFormatted
					key={unitObject.index + 350000}
					id={unitObject.index}
					unitObject={unitObject}
					selectedUnitOptions={props.alliedSelectedUnitOptions}
				/>
			)
		})
		alliesListThirdQuarter = props.alliedListedUnitsThirdQuarter.map(unitObject => {
			return (
				<UnitEntryNameTileFormatted
					key={unitObject.index + 350000}
					id={unitObject.index}
					unitObject={unitObject}
					selectedUnitOptions={props.alliedSelectedUnitOptions}
				/>
			)
		})
		alliesListBottom = props.alliedListedUnitsBottom.map(unitObject => {
			return (
				<UnitEntryNameTileFormatted
					key={unitObject.index + 350000}
					id={unitObject.index}
					unitObject={unitObject}
					selectedUnitOptions={props.alliedSelectedUnitOptions}
				/>
			)
		})

		listDisplay =
			<div>
				{listTop}
				{listSecondQuarter}
				{listThirdQuarter}
				{listBottom}<br />
				{alliesListTop}
				{alliesListSecondQuarter}
				{alliesListThirdQuarter}
				{alliesListBottom}
			</div>
	} else {
		header =
			<div className="formatted-list-header">
				<div>Army: {props.selectedArmy.label}</div>
				<div>Points: {props.pointTotal + props.alliedPointTotal}</div>
				<div>Unit Strength: {props.unitStrengthTotal}</div>
			</div>
		listDisplay =
			<div>
				{listTop}
				{listSecondQuarter}
				{listThirdQuarter}
				{listBottom}			
			</div>
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