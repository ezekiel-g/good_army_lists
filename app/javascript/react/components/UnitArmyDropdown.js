import React, { Component } from 'react'

class UnitArmyDropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: []
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
	}

	render() {
		let dropdownOptions = this.state.armies.map(army => {
			return (
				<option key={army.name} value={army.id}>{army.name}</option>
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
	
export default UnitArmyDropdown