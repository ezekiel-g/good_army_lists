import React, { Component } from 'react'
import UnitOptionSelectionLabel from './UnitOptionSelectionLabel'

class UnitOptionSelectionTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			highlightedUnitOptions: []
		}
		this.updateHighlightedUnitOptions = this.updateHighlightedUnitOptions.bind(this)
	}

	componentDidMount() {
		let unitObject = this.props.unitObject
		let unitOptions = this.props.unitOptions
		let selectedUnitOptions = this.props.selectedUnitOptions
		let highlightedUnitOptions = []
		let i2
		let i3
		for (i2 = 0; i2 < selectedUnitOptions.length; i2++) {
			for (i3 = 0; i3 < unitOptions.length; i3++) {	
				if (
					selectedUnitOptions[i2].index === unitObject.index &&
					selectedUnitOptions[i2].unitOption.name === unitOptions[i3].name
				) {
					highlightedUnitOptions.push(selectedUnitOptions[i2].unitOption)
				}
			}
		}
		this.setState({ highlightedUnitOptions: highlightedUnitOptions })
	}

	updateHighlightedUnitOptions(unitOption) {
		let highlightedUnitOptions = this.state.highlightedUnitOptions
		let i
		if (document.getElementById(unitOption.id).classList.contains('highlighted-unit-option')) {
			document.getElementById(unitOption.id).classList.remove('highlighted-unit-option')
			highlightedUnitOptions.splice(highlightedUnitOptions.indexOf(unitOption), 1)
		} else {		
			document.getElementById(unitOption.id).classList.add('highlighted-unit-option')
			highlightedUnitOptions.push(unitOption)
		}
		this.setState({ highlightedUnitOptions: highlightedUnitOptions })
	}

	render() {
		let unitObject = this.props.unitObject
		let unitOptions = this.props.unitOptions
		let selectedUnitOptions = []
		let i

		for (i = 0; i < unitOptions.length; i++) {
			if (unitOptions[i].kowh_unit_id === unitObject.unit.id) {
				selectedUnitOptions.push(unitOptions[i])
			}
		}
		let sortedUnitOptions = selectedUnitOptions.sort((a, b) => {
			return (a.points - b.points)
		})
		let display = sortedUnitOptions.map(unitOption => {
			let highlighted = false
			let greyedOut = false
			for (i = 0; i < this.props.selectedUnitOptions.length; i++) {
				if (
					this.props.selectedUnitOptions[i].index === unitObject.index &&
					this.props.selectedUnitOptions[i].unitOption.name === unitOption.name
				) {
					highlighted = true
				}
			}

			return (
				<UnitOptionSelectionLabel
					key={unitOption.id}
					id={unitOption.id}
					unitOption={unitOption}
					handlerFunction={this.updateHighlightedUnitOptions}
					greyedOut={greyedOut}
					highlighted={highlighted}
				/>
			)
		})

		return (
			<div>
				<h4 className="unit-option-title-kowh">
					What option(s) will<br />
					{unitObject.unit.display_name} have?
				</h4><br />
				<div className="unit-option-selections">
					{display}<br /><br />
				</div>
				<div>
					<span 
						onClick={() => this.props.selectUnitOptions(
							unitObject,
							this.state.highlightedUnitOptions
						)}
						className="clear-or-cancel-label"
					>
						Select
					</span>
					<span 
						onClick={this.props.toggleUnitOptions}
						className="clear-or-cancel-label"
					>
						Cancel
					</span>
				</div>
			</div>
		)
	}
}

export default UnitOptionSelectionTile