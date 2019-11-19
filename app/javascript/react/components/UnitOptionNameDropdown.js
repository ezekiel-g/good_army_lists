import React, { Component } from 'react'

class UnitOptionNameDropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			unitOptions: []
		}
	}

	componentDidMount() {
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
		let dropdownOptions = this.state.unitOptions.map(unitOption => {
			return (
				<option key={unitOption.name} value={unitOption.id}>{unitOption.name}</option>
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
	
export default UnitOptionNameDropdown