import React, { Component } from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import Select from 'react-select'
import ListContainer from './ListContainer'

class KowhGameContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: [],
			units: [],
			artefacts: [],
			unitOptions: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/armies')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ armies: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))

		fetch('/api/v1/units')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ units: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	
		fetch('/api/v1/unit_options')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ unitOptions: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	updateSelectedArmy(selectedArmy) {
		this.setState({ selectedArmy })
	}

	render() {
		let armyOptions = this.state.armies.map(armyOption => {
			return (
				{ label: armyOption.name, value: armyOption.id }
			)
		})
		let selectedArmy = this.state.selectedArmy

		return (
			<div className="sections-container">	
				<ListContainer
					armies={this.state.armies}
					units={this.state.units}
					unitOptions={this.state.unitOptions}
					updateSelectedArmy={this.updateSelectedArmy}
					dropdownStyle={this.props.dropdownStyle}
				/>
			</div>
		)
	}
}

export default KowhGameContainer