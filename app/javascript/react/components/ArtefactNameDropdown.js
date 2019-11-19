import React, { Component } from 'react'

class ArtefactNameDropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			artefacts: []
		}
	}

	componentDidMount() {
		fetch('/api/v1/artefacts')
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
			this.setState({ artefacts: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	render() {
		let dropdownOptions = this.state.artefacts.map(artefact => {
			return (
				<option key={artefact.name} value={artefact.id}>{artefact.name}</option>
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
	
export default ArtefactNameDropdown