import React, { Component } from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import Select from 'react-select'
import UnitEntriesFormContainer from './UnitEntriesFormContainer'

class NonAdminSectionContainer extends Component {
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

	render() {
		return (
			<div className="sections-container">	
				<UnitEntriesFormContainer
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

export default NonAdminSectionContainer