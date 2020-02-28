import React, { Component } from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import Select from 'react-select'
import ListContainer from './ListContainer'

class KowhGameContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: [],
			unitOptions: [],
			veteranAbilities: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/kowh_units')
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
	
		fetch('/api/v1/kowh_unit_options')
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
				<ListContainer
					units={this.state.units}
					unitOptions={this.state.unitOptions}
					dropdownStyle={this.props.dropdownStyle}
				/>
			</div>
		)
	}
}

export default KowhGameContainer