import React, { Component } from 'react'

class UnitNameDropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: []
		}
	}

	componentDidMount() {
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
	}

	render() {
		let dropdownOptions = this.state.units.map(unit => {
			return (
				<option key={unit.name} value={unit.id}>{unit.name}</option>
			)
		})

		return (
		    <label>
		    	{this.props.label}
		      	<select
		      		className="dropdown"
		        	name={this.props.name}
		        	value={this.props.selection}
		        	onChange={this.props.handlerFunction}
		        >
		        	<option value=""></option>
		        	{dropdownOptions}
		      	</select>
		    </label>
		)
	}
}
	
export default UnitNameDropdown